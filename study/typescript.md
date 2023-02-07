# typescript
- 에러가 나면 먼저 알려줌.

## interface

- `object`를 설명해주는 것
```
interface ContainerProps {
  bgColor: string;
}
```
```
function Circle({ bgColor }: CircleProps) {
  return <Container bgColor={bgColor} />;
}
```


## Optional Props
- `필수 항목(required)`이 아닌, `선택 항목`일 때 사용
- `?`를 넣어주면 됨.
```
interface CircleProps {
  bgColor: string;
  borderColor?: string;
}
```
- 사용법
```
<Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />
//만약 borderColor가 undefined 라면, borderColor는 bgColor와 같은 값을 가진다.
```

### dafault 값을 주는 법
- `text = "default text"`를 넣어준다.
`function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {`
