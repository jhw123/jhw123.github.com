---
title: "폼 (form) 데이터 관리"
dateTime: "2021-01-02"
image: ""
tags: "웹, 상태 관리"
keywords: "폼 데이터 관리, form 데이터, 상태 관리"
---

<!--- 새롭게 알게 된 내용 -->

<!--- 연관된 실예제 -->
프런트에서의 폼 (form) 데이터 관리는 항상 어렵다. 
데이터를 여러 페이지에 걸쳐 받아야 하는 경우도 고려해야 하고, 
특정 조건에서 데이터의 일부분을 초기화 시키거나, 
실제 api에 담아야 하는 데이터 형태가 ui에서 받는 형식과 다를 때도 있다.
아직 어떻게 관리하는 것이 최선일지에 대해 스스로 만족스런 해답은 못 찾았지만, 현재까지 찾은 최선의 구현 방식을 기록해본다.

#### 데이터 형식이 복잡해 관심사 분리가 필요한 경우
```typescript
class BirthDay {
  constructor(
    public year?: number,
    public month?: number,
    public dayOfMonth?: number
  ) {}

  get isAllFilled(): boolean {
    return (
      !isUndefined(this.year) 
      && !isUndefined(this.month) 
      && !isUndefined(this.dayOfMonth)
    )
  }
}
```
데이터 초기화 시점이 서로 다르거나 여러 페이지를 통해 데이터를 수집할 때 관리를 쉽게하기 위해 데이터를 관심사를 기준으로 묶을 필요가 있다.
이럴 때 `class`로 관심사를 표현하면 좋은데 데이터 초기화를 `new BirthDay()` 와 같이 쉽게 할 수 있고, 관심사와 연관된 메소드를 분리하여 작성할 수도 있다.
데이터 초기화에 관해서는 개발자 취향을 타는 것 같은데 음수 값이나 빈 스트링을 넣는 것보다 나는 `undefined` 로 정의하는 걸 선호한다.
데이터가 없음을 의미적으로 나타내며 추후에 음수나 빈 스트링을 받도록 비즈니스 로직이 수정될 경우 변경해야 하는 부분이 더 적다고 생각하기 때문이다.
물론 `undefined`를 사용할 경우, 데이터를 사용할 때마다 값이 정의 되어있는지 확인해야 한다는 점은 불편하다. 

#### ui 데이터 형식과 api 데이터 형식이 다를 경우
```typescript
class BirthDay {
  constructor(...) {}
  ...
  
  get format(): string {
    return `${this.year}/${this.month}/${this.dayOfMonth}`
  }
}
```
api용 데이터 형식으로 변환해야 하거나 여러 다른 형태로 변환할 경우 클래스의 메소드로 해당 변환 로직을 넣으면 편하다.
예를 들어 BirthDay 데이터를 서버 쪽에 하나의 string 포맷으로 보내야 한다면 예시와 같이 변환 메소드를 작성할 수 있다.

#### 하위 데이터 형식이 존재할 경우
```typescript
class BirthDay { ... }

class Form {
  constructor(
    public name?: string,
    public birthDay = new BirthDay(),
  ) {}
  
  get isAllFilled(): boolean {
    return (
      !isUndefined(this.name)
      && this.birthDay.isAllFilled
    )
  }
  
  get format() {
    return {
      name: this.name,
      birthDay: this.birthDay.format,
    }
  }
}
```
이미 하나의 관심사로 묶인 데이터가 다른 폼의 필드로 사용될 경우도 있다.
위의 예시의 경우 `Form`에서 사용자의 생일 정보를 받는데, 
[연, 월, 일]을 `Form`의 개별 필드로 풀어 쓰지 않고 생일 정보는 관심사로 묶어 두면 코드의 재사용성이 높일 수 있다.
또한 이러한 하위 데이터는 내부 값이 이미 `undefined`로 초기화되기 때문에 
NonNullable한 타입으로 정의해 추후 데이터를 가져올 때 값이 정의되어 있는지 불필요하게 체크하지 않게 한다.

<!--- 스스로의 생각 -->

<!--- 참고 -->
