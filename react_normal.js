//react

//어려운 코드 방식
const root = document.getElementById("root");
const h3 = React.createElement(
  "h3",
  {
    onMouseEnter: () => console.log("mouse enter"),
    id: "sexy-span",
    style: { color: "red" },
  },
  "Hello i'm a span"
);

//react events
const btn = React.createElement(
  "button",
  {
    onClick: () => console.log("i am clicked"),
  },
  "Click me"
);

const container = React.createElement("div", { class: "container" }, [
  Title,
  Button,
]);

//new 코드 방식 : jsx
// const Title = () => (
//   <h3 id="title" onMouseEnter={() => console.log("mouse enter")}>
//     Hello i'm a title
//   </h3>
// );

// const Button = () => (
//   <button
//     style={{ background: "tomato" }}
//     onClick={() => console.log("i am clicked")}
//   >
//     Click me
//   </button>
// );

// const Container = () => (
//   <div>
//     <Title />
//     <Button />
//   </div>
// );

// //counter
// let counter = 0;
// function countUp() {
//   counter = counter + 1;
//   reRender();
// }
// function reRender() {
//   ReactDOM.render(<Container />, root); //클릭할 때마다 새로고침/리렌더링
// }

// // counter 변수를 JSX에 전달하는 방법
// // {} 안에 변수 이름을 담아주면 됨. -> 번거롭지 않음
// const Container = () => (
//   <div>
//     <h3>Total clicks: {counter}</h3>

//     <button onClick={countUp}>Click me</button>
//   </div>
// );

// reRender();

//효율적으로 리렌더링 할 수 있게 하는 법

//counter 변수를 JSX에 전달하는 방법
// {} 안에 변수 이름을 담아주면 됨. -> 번거롭지 않음
