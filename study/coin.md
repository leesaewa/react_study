# createGlobalStyle
- 전역 스타일을 처리하는 특수 `Styled Component`를 생성하는 `helper` 함수.

# Fragment
- 일종의 유령 컴포넌트.
- 부모 없이 서로 붙어 있는 것들을 리턴할 수 있게 해줌.
  - 예를 들어, vue2에서 `template`안에 `div`를 무조건 넣어야 하는데, 그렇게 하면 컴포넌트 별로 쓸데없는 div가 계속 쌓이게 됨.
    그걸 방지하고자 나옴.

## 사용법
- `return` 다음에 `<></>`를 넣어줌.

## 예시
```
function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}
```
