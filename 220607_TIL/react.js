//react

const root = document.getElementById("container");
function App() {
  const [counter, setCounter] = React.useState(0);
  const onClick = () => {
    setCounter(counter + 1);
  };
  return (
    <div>
      <h2>React</h2>
      <h3>Total clicks:{counter}</h3>

      <button onClick={onClick}>Click me</button>
    </div>
  );
}

ReactDOM.render(<App />, root);
