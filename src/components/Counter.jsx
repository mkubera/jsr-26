const Counter = ({ initialCounter, onClickSendDataToParent }) => {
  return (
    <div>
      <p>{initialCounter}</p>
      <button onClick={onClickSendDataToParent}>Click</button>
    </div>
  );
};

export default Counter;
