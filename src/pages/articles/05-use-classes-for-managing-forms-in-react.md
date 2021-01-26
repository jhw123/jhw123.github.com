---
title: "리액트에서 클래스로 폼 (form) 데이터 관리하기"
dateTime: "2021-01-05"
image: ""
tags: "웹, 리액트, 훅"
keywords: "React useState hook, 리액트 훅, useState with class object"
---

<!--- 새롭게 알게 된 내용 -->
전번에 [폼 데이터를 클래스를 이용해 관리하는 방법](http://localhost:8000/articles/2021/01/02-til-manage-form/)을 소개했었다.
이번 글에서는 이 클래스를 어떻게 리액트와 결합시켜 사용하면 편할지 나름대로 강구한 방식을 기록해본다.

```typescript
function useFormClass() {
  const [form, setForm] = useState(new Form())
}
```

보통 보기 힘든 방식이지만 리액트의 `useState`에 클래스를 담을 수 있다.
`useState`에 클래스를 잘 담지 않는 이유는, `useState`에 들어가는 데이터가 (클래스가 그렇듯) mutable할 경우 상태 변화 감지가 안 된다는 이유와
복잡한 데이터 구조를 immutable하게 다룰 경우 이미 `useReducer`가 있기 때문이다.
하지만 그럼에도 클래스를 사용했을 때 함수 형태보다 같은 관심사의 데이터와 그와 연관된 메소드를 하나의 스코프 안에서 관리하고 찾기 편한 점이 있다고 생각한다. 

[immer](https://immerjs.github.io/immer/docs/introduction) 라이브러리를 사용하면 필드 값을 간단히 변경하는 편한 개발감을 유지하면서 immutability를 지켜 상태 변화 감지 문제를 해결할 수 있다. 
다만 클래스에 immer를 사용할 때 [클래스에 `immerable`필드를 세팅해야 한다](https://immerjs.github.io/immer/docs/complex-objects)는 걸 기억하자.

<!--- 연관된 실예제 -->

```typescript jsx
function useFormClass<T>(FormClass: { new(): T }) {
  const [form, setForm] = useState<T>(new FormClass())

  const update = (recipe: (draft: T) => void) => {
    setForm(form => produce(form, recipe))
  }

  return {
    form,
    update,
  }
}

class Form {
  [immerable] = true
  
  constructor(public count = 0) {}
}

function Component() {
  const { form, update } = useFormClass(Form)

  const increase = () => {
    update(draft => {
      draft.count += 1
    })
  }
  
  return (
    <>
      <div>form.count</div>
      <button onClick={increase}>Increment</button>
    </>
  )
}
```

<!--- 스스로의 생각 -->

<!--- 참고 -->
