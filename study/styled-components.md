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

<a href="https://github.com/leesaewa/react-practice2/commit/a1c575692c27cd907cd6143f06f112cb11caa4dc">코드 확인</a>

## 중복되는 코드 재사용
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


-----------
<a href="https://github.com/leesaewa/react-practice2/commit/2b32c2b85dd92df2684e4882af8a55941dc3d3a7">코드 확인</a>

## animation
- 스타일 컴포넌트에서는 `keyframes helper`를 사용시 앱 전체에서 사용할 수 있는 고유한 인스턴스를 생성함.
  - (다른 파일에서 같은 이름의 `keyframes`가 존재하더라도 이름 충돌이 나지 않도록 해줌.)
  - 개발자 도구로 확인할 시, 클래스 명처럼 애니메이션 이름 또한 랜덤으로 생성해줌.
  - `animation: dvrYCw 1s linear infinite`

#### 사용법
- `keyframes`를 `import`해줌.
- 아래처럼 작성
```
const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  }
  50% {
    border-radius: 100px;
  }
  100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;
```
- 해당 애니메이션을 사용할 곳에 아래처럼 작성.
  - `animation: ${rotation} 1s linear infinite;`


## 선택자
- `SASS`처럼 `Box`안에 있는 `span`을 선택해서 스타일 지정해줄 수 있음.
```
const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;

<!-- 선택자 -->
  span {
    font-size: 36px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>hi</span>
      </Box>
    </Wrapper>
  );
}
```
### hover
- `hover` 또한 `SASS` 작성하는 것과 같음.
- `&:hover {style내용}`
- 가상(의사) 클래스도 마찬가지. `::before` `::active`~~


## 컴포넌트 그대로를 사용하고 싶을 때
- 예를 들어, 위의 예시에서 `span`이 아닌 `p`로 바꿀 때는 styled까지 `p`로 바꿔야 하는 번거로움이 있음.
- 귀찮으니까 `span`을 컴포넌트로 사용하고 `style`에 적용하는 법

#### 예시
```
<!-- span으로 지정했 -->
const Emoji = styled.span`
  font-size: 36px;
`;

const Box = styled.div`
  background-color: tomato;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;

<!-- 변수에 담아 사용 -->
  ${Emoji}:hover {
    font-size: 98px;
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
<!--    p로 바꿈    -->
        <Emoji as="p">hi</Emoji>
      </Box>
    </Wrapper>
  );
}
```


--------

<a href="https://github.com/leesaewa/react-practice2/commit/fb8b5e3023b5be64bf12911c4445c816c29c73f2">코드 확인</a>


## Themes
- 기본적으로 모든 색상들을 가지고 있는 `object`
- 나중에 색상을 바꾸고 싶을 때 `object`만 바꿔주면 됨.
- `<ThemeProvider theme={darkTheme}>`

### Theming
- styled components는 ThemeProvider wrapper 컴포넌트를 통해 전체 테마를 지원함.
- 이 컴포넌트는 컨텍스트 API를 통해 자체 아래에 있는 모든 React 구성 요소에 테마를 제공함.
- 렌더 트리에서 모든 스타일 구성 요소는 여러 수준의 깊이에 있는 경우에도 제공된 테마에 액세스할 수 있음.

### The theme prop
- theme는 theme prop을 사용하여 컴포넌트로 전달될 수도 있음.
  - `color: ${(props) => props.theme.textColor};`

