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
