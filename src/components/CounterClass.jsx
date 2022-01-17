import React, { Component } from "react";

class CounterClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: props.initialCount,
    };
  }

  increment = () => {
    this.setState((state) => ({ ...state, count: state.count + 1 }));
  };
  decrement = () => {
    this.setState((state) => ({ ...state, count: state.count - 1 }));
  };
  reset = () => {
    this.setState((state) => ({ ...state, count: this.props.initialCount }));
  };

  render() {
    return (
      <div>
        <h3>Class component</h3>
        <button onClick={this.increment}>+1</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>reset</button>
      </div>
    );
  }
}

export default CounterClass;
