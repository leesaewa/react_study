<a href="https://leesaewa.github.io/react_study/220705_TIL/converter.html">state로 converter만들기</a>

## state function

### state를 바꾸는 2가지 방법

1. setCounter를 이용해 원하는 값을 넣어주기

- `setCounter(counter + 1);`
- setCounter를 몇번을 호출해도 한 번만 실행됨.
  (counter가 1만 증가)

2. 함수를 이용해서 현재 값을 계산하기

- `setCounter((current) => current + 1);`
- setCounter가 호출된 만큼 counter가 증가.
- 이쪽이 더 안전함.

## inputs and state

### useState

`const [minutes, setMinutes] = React.useState();`

- `React.useState()`는 array를 제공함.
- 첫번째 element가 `현재의 값(minutes)`.
- 두번째 element에는 첫번째 element를 수정해주는 `modifier함수(setMinutes)`가 들어감.
