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
