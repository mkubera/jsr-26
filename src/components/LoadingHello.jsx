import React, { Component } from "react";

class LoadingHello extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
    };

    setTimeout(
      () => this.setState((state) => ({ ...state, isLoading: false })),
      2000
    );
  }
  render() {
    return <h1>{this.state.isLoading ? "Loading" : "Witaj"}</h1>;
  }
}

export default LoadingHello;
