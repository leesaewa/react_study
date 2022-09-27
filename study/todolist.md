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

