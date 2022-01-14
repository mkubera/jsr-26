import { useState } from "react";

const Counter = ({ initialCounter, onClickSendDataToParent }) => {
  const [count, setCount] = useState(initialCounter);
  // const [name, setName] = useState("John");

  const increment = () => setCount((state) => state + 1);
  const decrement = () => setCount((state) => state - 1);

  return (
    <div>
      <button onClick={increment}>+1</button>
      <p>{count}</p>
      <button onClick={decrement}>-1</button>
    </div>
  );
};

export default Counter;
