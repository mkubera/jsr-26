// import logo from "./logo.svg";
import "./App.css";
import Products from "./components/Products";
import Counter from "./components/Counter";
import Input from "./components/Input";
import Chuck from "./components/Chuck";
import CounterClass from "./components/CounterClass";
import LoadingHello from "./components/LoadingHello";

// React functional component
const App = () => {
  return (
    // JSX
    <div className="App">
      <header className="App-header">
        {/* <Input onClickSendDataToParent={(e) => console.log(e.target.value)} /> */}

        {/* <Chuck /> */}

        <LoadingHello />

        <CounterClass initialCount={13} />

        <Counter
          initialCounter={0}
          onClickSendDataToParent={(e) => console.log(e)}
        />
        {/* <Counter
          initialCounter={5}
          onClickSendDataToParent={(e) => console.log("Hello")}
        />
        <Counter
          initialCounter={10}
          onClickSendDataToParent={(e) => console.log(e.target.value)}
        /> */}

        <Products />
      </header>
    </div>
  );
};

export default App;
