# 사용법
- 설치 : `npm i styled-components`

## 장점
- `className`을 쓸 필요도, `css`를 따로 작성할 필요도 없음.
- styled components가 클래스 명을 랜덤하게 생성해줌.
- `div` 남발할 필요없이, 컴포넌트를 넣어주기만 하면 되니까 코드 읽기가 한결 수월함.

## 주의점
- 무조건 `백틱(``)` 안에 스타일을 작성해야 함.
- `styled-components`를 꼭 `import`해야 함.
- `html tag`를 선언해야 함.

### 예시

```
import styled from "styled-components";

const Father = styled.div`
  // 이 안에 CSS를 작성
  display: flex;
`;

const BoxOne = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const BoxTwo = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;

function App() {
  return (
    <Father>
      <BoxOne></BoxOne>
      <BoxTwo></BoxTwo>
    </Father>
  );
}
```

## 중복되는 코드 재사용할 떄
- `props`를 이용한다.
  - 중복되는 코드에 `background-color: ${(props) => props.bgColor};`로 설정.
  - 컴포넌트는 `<Box bgColor="teal"></Box>` `<Box bgColor="tomato" />`

### 컴포넌트 확장(상속)
- 기존 컴포넌트의 모든 속성을 들고 와서 전ㅂ 복붙하고 새로운 속성까지 더해주는 것.

- (위 코드의 연속.) 특정 Box에만 `border-radius`를 적용하고 싶을 때 어떻게 사용할 수 있는가?
  - 그걸 함수로 나타낼 수 있음. `const Circle = styled(Box)`border-radius: 50px;`;`
  - Box의 모든 속성들을 들고 온 다음, `border-radius`를 추가적으로 더해줌.

### style은 그대로 상속받으면서 html태그만 변경하고 싶을 때
- `as=""`를 추가하면 됨.
- `as` `href`는 `styled-components`에서 사용할 수 있는 `props`임.
```
<Btn>Login</Btn>
<Btn as="a" href="/">
  Login
</Btn>
 ```
 
 ### html 속성을 넣고 싶을 때
 - `const Inpuut = styled.input.attrs({ required: true })` 이렇게 넣을 수 있음.
 
