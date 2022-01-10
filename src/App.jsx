// import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Input from "./components/Input";

// React functional component
const App = () => {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        <Input onClickSendDataToParent={(e) => console.log(e.target.value)} />
        <Input onClickSendDataToParent={(e) => console.log(e.target.value)} />
        <Input onClickSendDataToParent={(e) => console.log(e.target.value)} />

        <Counter
          initialCounter={0}
          onClickSendDataToParent={(e) => console.log(e)}
        />
        <Counter
          initialCounter={5}
          onClickSendDataToParent={(e) => console.log("Hello")}
        />
        <Counter
          initialCounter={10}
          onClickSendDataToParent={(e) => console.log(e.target.value)}
        />

        <Products />
        <Products />
        <Products />
      </header>
    </div>
  );
};

export default App;
