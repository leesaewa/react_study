# useEffect(callback, [])
- 두 개의 argument를 가지는 함수
- 첫 번째 argument는 우리가 딱 한번만 실행하고 싶은 코드
- 두 번째는 `[]` 배열을 넣어줌
  - `useEffect`가 컴포넌트의 첫 번째 렌더 시점에 `iRunOnlyOnce` 함수 호출
  - 상태를 변화시키면 iRunOnlyOnce는 호출되지 않음
  - **즉, 한번만 렌더링 됨**
- 화면이 다 그려지고 나서 실행됨. 화면을 먼저 그리고 그 다음 실행됨.
- **대표적인 사용법** -> API를 딱 한 번만 호출하고 그 뒤로는 다시는 호출하기 싫은 경우

```
단순화
useEffect(() => {
console.log("CALL THE API")
},[]);
-> 1번만 실행됨.
```

### memo와 차이점
- 라이프 사이클이랑 연관이 있는 함수이고, `최초 실행만 할 것`이냐, OR `props, state에 따라(언급한 마법) 렌더링시 다시 그릴 것`이냐 판단하는 함수인 듯?
- class 문법 라이프 사이클 펑션을 함축해놓은게 `useEffect` 입니다.

## Deps
### [] 안에 입력
- 비어있는 [](array)를 써주었을 때는 코드가 단 한번만 실행됨.
  - react.js가 지켜볼 대상이 없어서 한 번만 실행.
- 아래 그림처럼 `keyword`, `counter`를 입력하면 해당 값이 변화할 때 코드를 실행할 것이라고 react.js에게 알려줌.

<img src="https://user-images.githubusercontent.com/97646713/192211954-3c39c16e-c1ca-4e7e-9daa-05c3ed330f10.jpg">

#### counter 결과
<img src="https://user-images.githubusercontent.com/97646713/192211949-0f123ac0-b26d-4186-b281-5ee1f715c85c.jpg">

#### keyword 결과
<img src="https://user-images.githubusercontent.com/97646713/192211943-5ac00f4d-707a-4f61-a67d-b25092a88e7f.jpg">

#### 따로 입력이 번거로울 때
- 2개도 가능함.
```
useEffect(() => {
console.log("I run when 'keyword & counter' changes.")
}, [keyword, counter]);
```
#### Dependencies
- react.js가 지켜보아야 하는 것들.
- 그것들이 변화할 때 react.js가 코드를 실행.


## Cleanup
#### effect에서 함수를 반환하는 이유는 무엇일까요?
- 이는 effect를 위한 추가적인 정리(clean-up) 메커니즘입니다. 모든 effect는 정리를 위한 함수를 반환할 수 있습니다.

#### React가 effect를 정리(clean-up)하는 시점은 정확히 언제일까요?
- React는 컴포넌트가 마운트 해제되는 때에 정리(clean-up)를 실행합니다.
- 하지만 위의 예시에서 보았듯이 effect는 한번이 아니라 렌더링이 실행되는 때마다 실행됩니다.
- React가 다음 차례의 effect를 실행하기 전에 이전의 렌더링에서 파생된 effect 또한 정리하는 이유가 바로 이 때문입니다.


