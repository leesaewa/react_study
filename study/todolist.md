# 여러 개의 toDo를 받을 수 있는 배열 만들기
- `const [toDos, setToDos] = useState([]);` -> 기본값이 비어있는 배열
- `state`는 직접적으로 수정 불가능 (예 : `toDo = “”` )
  - 함수를 가져와서 수정하게 만들어야함 (예 : `setToDo = (“”)` )
  - `toDos 배열`을 수정하고 싶다면 수정하는 함수를 써야함
- `setToDos(currentArray => [toDo, ...currentArray]);` -> `...`을 써서 `currentArray` 배열에 toDo를 추가 시켜줌
- 어플리케이션이 시작될 때는 비어있는 배열을 가지며, 첫 번째 to-do를 입력할 때 비어있는 `currentArray` 받아옴
- 이건 새로운 toDos가 input을 통해 작성한 toDo와 아무것도 들어있지 않은 빈 배열의 element가 더해지게 된다는 것

### 코드
<img src="https://user-images.githubusercontent.com/97646713/192440796-5ab7e022-57ed-45ce-8545-4445a0e6c5dd.jpg">

### 결과물
<img src="https://user-images.githubusercontent.com/97646713/192440788-68a60906-5834-4be3-9341-71a34b275c44.jpg">

------

# map() 함수
- 배열 내의 모든 요소 각각에 대하여, 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환
- 배열을 가지고 있을 때 각각의 element들을 바꿀 수 있게 해줌.
- `map()` 은 `()`에 함수를 넣을 수 있는데 배열의 모든 item에 대해 실행됨.
  - 즉, 배열에 6개의 item이 있다면 6번 함수가 실행됨. 그리고 그 함수로부터 내가 return한 값은 새로운 배열에 들어가게 함

## 입력한 todo list 값을 li로 출력
- 리액트는 기본적으로 list에 있는 모든 item을 인식하기 때문에 key를 넣어 고유하게 만들어줘야 함.
- map의 `첫 번째 argument`는 `값`이고 `두번째`는 `index(숫자)`
  - `{toDos.map((item, index) => {item})}`
  - 배열을 만들어 각자 고유의 `key`를 가지게 함.
    - `key`는 엘리먼트 리스트를 만들 때 포함해야 하는 특수한 문자열 어트리뷰트

## Key
- React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 도움.
- 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정.
- 형제 사이에서만 고유한 값이어야 함.
```
const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
```

- Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것.
- 대부분의 경우 데이터의 ID를 key로 사용함.
```
const todoItems = todos.map((todo) =>
  <li key={todo.id}>
    {todo.text}
  </li>
);
```

- 렌더링 한 항목에 대한 안정적인 ID가 없다면 최후의 수단으로 항목의 인덱스를 key로 사용할 수 있음.
```
const todoItems = todos.map((todo, index) =>
  // Only do this if items have no stable IDs
  <li key={index}>
    {todo.text}
  </li>
);
```

- 

### <a href="https://ko.reactjs.org/docs/lists-and-keys.html">참고 링크</a>

### 코드
<img src="https://user-images.githubusercontent.com/97646713/192516659-b7b39d80-edc2-4f95-8561-28a6a723cc24.jpg">

### 결과물
<img src="https://user-images.githubusercontent.com/97646713/192516667-b1ef3067-0c73-47db-a3c4-466ce8237761.jpg">


------

# Filter()
- 주어진 함수의 테스트를 통과하는 모든 요소를 모아(true면 요소를 유지, false면 버림) 새로운 배열을 반환하는 함수.
- callback 함수는 호출되는 배열을 변화시키지 않음.

> callback 함수는 3개의 인수와 함께 호출됨.
> 1. 처리할 현재(대상) 요소값
> 2. 처리할 현재(대상) 요소의 인덱스
> 3. filter을 호출한 배열 객체(=순회되는 배열 객체)

## 필터링
- 내가 원하는 값들을 필터링 할 수 있음.

```
notes={notes.filter((note) =>
	note.text.toLowerCase().includes(searchText)
)}
```
- `notes`배열에 들어있는 `note.text`가 `searchText`를 포함하고 있으면 `notes`배열로 구성

## 삭제
- 배열을 삭제할 수 있음.
- 단순히 부모요소를 삭제하는게 아닌 `배열에 들어가있는 index`와 `삭제할(버튼의 li) index`를 찾아서 삭제할 경우

```
const onDelete = (index) => {
  setToDos(toDos.filter((item, todoIndex) => index !== todoIndex));
};

<button onClick={() => onDelete(index)}>Delete</button>
```
- `filter` 함수에 넣는 `두 번째 인자`는 `todos 배열에 있는 요소의 index`가 들어간다.
- `onDelete={onDelete}` 가 아니라 `onClick={() => onDelete(index)}`로 쓰는 이유는 `바로 실행`되지 않고 `클릭을 기다리는 함수`로 쓰기 위함.


