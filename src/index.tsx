import * as React from "react";
import { Component } from "react";
import { render } from "react-dom";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hello World!</h1>
        <sub>...from Typescript!</sub>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
