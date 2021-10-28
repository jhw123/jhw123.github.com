---
title: "[디자인 시스템 개발기] 컴포넌트 상태는 어떻게 정의해야 할까?"
dateTime: "2020-12-29T01:00:00"
image: ""
tags: "디자인 시스템, 웹, 쏘카 캐스팅"
keywords: "디자인 시스템 개발기, 캐스팅 디자인 시스템, 컴포넌트 상태 정의"
---

디자인 시스템의 컴포넌트를 구현할 때, 동료 개발자와 의견이 엇갈린 구현 방향이 있었다.
`<button>`의 disabled과 같이 디자인 컴포넌트의 상태를 명시하는 방법에 대한 것이었다.
`<button>`의 경우를 보았을 때 비활성화라는 상태를 표시하기 위해 disabled 속성을 true로 해주거나 false로 한다.
디자인 시스템 컴포넌트에는 disabled와 같은 상태 밖에도 로딩 중, 선택됨 여부 등 여러 상태를 가질 수 있다.

예를 들어 `체크되지 않음`, `체크됨`, `비활성화됨` 라는 3가지 상태를 가진 라디오 체크 버튼이 있다고 하자.
이 컴포넌트는 체크될 수도 있고 안 될 수도 있으며, 비활성화 될 수도 활성화 될 수도 있다.
동료 개발자와 의견이 갈렸던 부분은 컴포넌트의 상태를 명시할 때, 상태를 체크 여부와 활성화 여부라는 관심사로 분리해 각각 따로 명시할 것인지 
아니면 명시적(Normal, Checked, Disabled)으로 하나의 값으로 전달할 것인지였다.
코드로 좀 더 자세히 살펴보면 라디오 컴포넌트의 `Props` 인터페이스가 두 개의 boolean 값으로 상태 정보를 받고 컴포넌트 내부에서 정보를 조합해 
최종 상태를 결정할 지 또는 하나의 enum 값으로 상태를 받을 것인지의 문제였다.
 
```typescript jsx
// Props 타입을 가지는 라디오 버튼
const Radio = (props: Props) => <input type="radio" />

// 1. 상태 속성에 대한 관심사를 분리해 전달하는 방식
interface Props {
  checked: boolean
  disabled: boolean
}

// 2. 가능한 모든 상태를 직접 넘겨주는 방식
enum State {
  Normal,
  Checked,
  Disabled
}

interface Props {
  state: State
}
```

동료는 첫번째 방식을 주장했는데, 라디오 버튼을 사용하는 대부분의 경우 체크 상태를 boolean 값으로 저장하고 있을테고 
이 boolean 값이 바로 `체크됨`과 `체크되지 않음`로 전환되는 것이 추후에 사용하기 편하지 않을까 하는 의견이었다.
또한, `체크됨`과 `체크되지 않음`을 오갈 때 enum 값으로 값을 반전시키는 것보다 boolean으로 했을 때 `!`로 쉽게 상태 변환이 가능하다는 이점도 있다.

반면 나는 두번째 방식을 고집했다. 
디자인 시스템을 개발하면서 내가 내세운 철학은 개발자가 쉽게 디자인 시스템을 사용하는 것과 코드 구조로 인해 발생할 수 있는 실수를 최소화하자는 것이었다. 
위의 예에서 상태 속성을 분리한다고 했을 때 `checked`와 `disabled`가 모두 참이면 어떻게 되는가? 
컴포넌트 내부에서 어떠한 속성을 우선하는 로직이 들어갈테고 이는 디자인 시스템을 올바르게 사용하기위해 컴포넌트 내부 구현까지 숙지해야 하는 불편함을 초래한다.
설령 공용적으로 속성에 대한 우선 순위를 정해두어 숙지의 불편함을 덜어내더라도, 컴포넌트 상태를 결정하는 코드에서 다른 상태 속성값을 함께 고려하여 상태를 결정해야 한다는 수고가 남는다. 
예를 들어, `disabled`가 `checked` 보다 우선된다고 할 때, `비활성화됨` 상태에서 `체크됨` 상태로 전환하기 위해선
 `checked=true` 뿐만이 아니라 `disabled=false`도 같이 해주어야 할 것이다. 
두번째 방식은 확장성 면에서도 이점이 있다. 만약 위의 라디오 컴포넌트에 에러 상태도 추가된다고 하자.
속성을 분리할 경우 속성간 우선 순위를 다시 정해야하고 이에 따라 컴포넌트를 사용한 코드에까지 영향이 미칠 수 있지만, 
상태가 명시적일 경우엔 컴포넌트 내부 수정도 간편하고 사이드 이펙트도 최소화할 수 있다.

두번째 방식으로 개발을 진행하면서 마주친 문제가 두 가지 있었는데, 문제와 내가 낸 해결책을 간단히 공유해본다.

#### 컴포넌트 상태 변환이 번거로울 때

실제로 구현을 하고 컴포넌트를 사용해보니 앞서 첫번째 방식의 이점이었던 상태값 반전이 불편하게 느껴졌다.
아래와 같이 현재 상태값을 참조하여 다음 상태를 일일히 적어주는 것이 코드가 의미하는 것 이상으로 코드 가독성을 해치고 코드 중복으로 남는게 싫었다.

```typescript jsx
let state: State = State.Normal

<Radio 
  state={state}
  onClick={() => state = (state === State.Checked) ? State.Normal : State.Checked} 
/>
```

그래서 일반적으로 상태 변환 로직이 결정되어 있는 경우, 그 로직을 컴포넌트 내부로 옮겼다.
이벤트 핸들러의 파라미터로 변환될 상태 값을 전달해 일반적인 경우에 상태 변환하는 코드 작성을 간단히 하면서도,
컴포넌트를 사용하는 쪽에서 자유롭게 다음 상태를 결정할 수 있도록 되었다.
예를 들어, 라디오 버튼의 경우 클릭을 통해 `체크됨`과 `체크되지 않음` 사이를 번갈아 전환해야 한다고 할 때, 현재 `체크됨`일 경우 `체크되지 않음` 상태가, 
현재 `체크되지 않음`일 때 `체크됨`이 핸들러의 파라미터 값으로 전달되어 전달된 값 그대로 상태에 반영하면 편하게 토글이 가능하다.

```typescript jsx
let state: State = State.Normal

// nextState는 State.Normal 또는 State.Checked의 값을 가진다.
<Radio 
  state={state}
  onClick={nextState => state = nextState}
/>
```

#### 하나의 컴포넌트에서 여러 상태 값이 공존할 때

컴포넌트는 항상 하나의 상태만을 가진다는 전제 하에 여러 컴포넌트를 순조롭게 구현하고, 
애매모호한 컴포넌트의 정의를 '독립적인 상태를 가진 최소의 객체'라 할 수 있겠다 싶어 기뻐할 때, 아래와 같은 컴포넌트를 맞딱뜨렸다.
텍스트 필드 컴포넌트인데 기본적으로 크게 `에러`, `비활성화됨`, `로딩 중` 상태를 가지고 있는데, 붉은 색 보더가 표시되는 `에러` 상태이면서 
오른편에 로딩 인디케이터가 돌아가는 `로딩 중`일 수는 있지만 `비활성화`일 때는 보더 색상이나 로딩 인디케이터가 없어진다.

![에러 상태와 로딩 중 상태가 공존할 수 있는 텍스트 필드 컴포넌트. 붉은 색 보더로 제출한 사용자 값이 올바르지 않음을 알리면서 로딩 애니메이션을 통해 현재 새로 제출 중인 상태를 나타내고 있다.](/images/2020/12/29-design-system-component-states/1.png) 

이 컴포넌트를 구현하려고 봤을 때 위에서 언급한 첫번째 방식으로 구현하는게 최선인가에 대한 생각을 많이 했다.
첫번째 방식으로 구현을 한다고 하면 컴포넌트 상태를 `error`, `loading`, `disabled`라는 boolean 속성으로 나누어 상태를 조합하는 형태일 것이다.
하지만 상태를 나누는 것이 아닌, 컴포넌트를 각 속성이 담당하는 부분으로 나누는 것이 더 적절하다는 판단을 하게 되었다.

하나의 컴포넌트에 상태가 공존하는 것 같지만, 보더 라인을 포함하는 텍스트 필드의 바깥 박스 부분과 텍스트 필드 내부로 나누어 보면 각각 독립된 하나의 상태를 갖는 걸 알 수 있었다.
따라서 컴포넌트에 명시적으로 하나의 상태 값을 전달하는 것이 아닌 각 세부 부분의 상태를 전달하도록 `Props`를 구현하였다.

```typescript jsx
enum State {
  Normal,
  Error,
  Loading,
  Disabled
}

interface Props {
  boxState: State.Normal | State.Error
  fieldState: State.Normal | State.Loading | State.Disabled
}
```

결국 이렇게 정의하므로서 '독립적인 상태를 가진 최소의 객체'라고 컴포넌트를 정의할 순 없게되었지만, 개념적으로나 개발 철학에는 잘 들어맞으므로 자기합리화를 하였다.