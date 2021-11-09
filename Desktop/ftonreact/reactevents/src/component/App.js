import React, { Component } from "react";
import Loaded, { Loading } from "./components/Conditional";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 1500);
  }

  render() {
    return this.state.isLoading ? <Loading /> : <Loaded />;
  }
}

export default App;
