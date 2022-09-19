# props

- `object(객체)`이다.
- 부모 컴포넌트로부터 자식 컴포넌트에게 데이터를 전송하는 방식.
- 부모에 props를 사용하면 자식 컴포넌트(함수)의 인자로 객체가 들어가게 됨.
- 하나의 버튼을 만들어서 props를 이용해 버튼의 스타일을 관리해서 재사용 할 수 있게됨.
- 컴포넌트의 첫번째이자 유일한 인자.
- 아래 `예시 코드`에서 `text=""` 부분은 내 마음대로 이름을 정할 수 있음.

#### 예시 코드

```
function Btn({props}) {
.
.
.
{props.text}
</button>
);
.
.
.
<Btn text="Save Changes" />
<Btn text="Continue" />
```

<img src="https://user-images.githubusercontent.com/97646713/190971136-c513d3ce-1d0f-49e3-bffe-add6627a3ab2.jpg">

#### 결과물

<img src="https://user-images.githubusercontent.com/97646713/190970933-eb38c73c-b1e4-491d-8d38-22572dfb309f.jpg">

## shortcut

- props는 `object`이므로 아래처럼 기재할 수도 있음. 결과물은 위와 같음.

#### 예시 코드

```
function Btn({ text }) {
.
.
.
{text}
</button>
);
```

<img src="https://user-images.githubusercontent.com/97646713/190970794-5b325ab3-f4ca-4bcb-a9d5-aed336fff9e6.jpg">

## if else문 활용

- 당연히 if 문을 활용할 수도 있음.

#### 예시 코드

```
function Btn({ text, big }) {
.
.
.
fontSize: big ? 18 : 16,
// if else 조건문.
// big이 지정되어 있다면 font-size를 18px. 없다면 16px.
.
.
.
<Btn text="Save Changes" big="true" />
<Btn text="Continue" />
```

<img src="https://user-images.githubusercontent.com/97646713/190973449-5cd7589c-0c88-4942-9944-0c947c004620.jpg">

#### 결과물

<img src="https://user-images.githubusercontent.com/97646713/190973451-f1c1f630-d85b-47ac-b00b-3c1f3d19be6d.jpg">

## function

- `text`, `boolean` 뿐만 아니라 `function`도 보낼 수 있음.
- 이것은 JSX로 html 태그 자체에 이벤트 리스너를 넣는것과는 전혀 다른 것임. 그저 이벤트를 실행시키는 함수가 프로퍼티로 들어간 것임. `prop`은 그냥 부모에서 자식으로 데이터를 넘길 때 사용하는 `argument(인자)`의 역할이니까.
  - 컴포넌트 안에 `onClick`을 넣으면 `이벤트 리스너`가 아닌 `props` 중에 하나가 됨.
  - 즉, 컴포넌트 안에 무언가를 설정하면 무조건 `props`가 될 뿐. 실제로 `html 태그` 안에 들어가지 못함.

#### 예시 코드

```
function Btn({ text, changeValue }) {
  <button
    onClick={changeValue}
.
.
.
// save change 버튼을 누르면 revers change로 텍스트가 바뀌는 함수를 설정.
const [value, setValue] = React.useState("Save Change");
const changeValue = () => setValue("Revers Changes");
.
.
.
<Btn text={value} changeValue={changeValue} />
<Btn text="Continue" />
```

<img src="https://user-images.githubusercontent.com/97646713/190977200-a338aa5c-92f1-4fc2-8870-f5c0f00a5345.jpg">

#### 결과물

<img src="https://user-images.githubusercontent.com/97646713/190977942-cf7c1351-0128-413c-98e6-556bed50f809.jpg">

---

# memo

- `memorize(기억되다)`는 뜻.
- 불필요한 `re-render`는 `React.memo()`로 관리할 수 있음
  - 컴포넌트가 새로 그려질 때, 변경된 부분만 `re render`하도록 함.
- 부모 컴포넌트의 state를 변경하면 당연히 그 자식 컴포넌트들도 Re-render가 일어남. 불필요한 렌더링이 발생할 수도 있는데, 이 경우에는 `React.memo()`로 `prop`의 변경이 일어난 부분만 렌더링 시킬 수 있음. 아주 많은 자식 컴포넌트를 가지고 있는 부모 컴포넌트일 때 사용하면 됨.

## React.memo()

- 컴포넌트가 `React.memo()`로 wrapping 될 때, React는 컴포넌트를 렌더링하고 결과를 메모이징(Memoizing)한다. 그리고 다음 렌더링이 일어날 때 props가 같다면, React는 메모이징(Memoizing)된 내용을 재사용한다.

---

# prop Types

- **오타 조심**... 선언할 때는 `propTypes`. 사용할 때는 `PropTypes`.

#### 예시 코드

```
Btn.propTypes = {
  text: PropTypes.string.isRequired,
  fontSize: PropTypes.number,
};
```

- 프론트에서 component를 구성하기 위해 매개변수(prop)을 받을 떄 prop의 필요한 타입의 정보가 넘어오지 않아 문제가 생길 수 있음. (syntax 에러로 잡아주지 않기 때문)
- 이를 해결하기 위해서 `A` 라는 컴포넌트의 prop의 타입을 결정지을 필요가 있음.

```
A.propTypes = {
prop: PropTypes.[원하는 타입].[prop의 필수 여부 판단]
}
```

- 위의 형태의 정보를 제공할 경우 prop 을 제어할 수 있음.
- PropTypes로 전달하는 데이터는 `default optional`이고 만일 반드시 보내야 할 데이터 같은 경우 `.isRequired`를 붙이면 필수 항목이 됨.
