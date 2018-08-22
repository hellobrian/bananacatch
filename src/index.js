import React, { Component } from "react";
import styled from "styled-components";
import { render } from "react-dom";

import Button from "./components/Button";

import "./index.css";

class App extends Component {
  state = {
    counter: 0
  };

  incrementCounter = () => this.setState({ counter: this.state.counter + 1 });

  updateCounter = event => this.setState({ counter: Number(event.target.value) });

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
        <input type="number" value={this.state.counter} onChange={this.updateCounter} />
        <Button onClick={this.incrementCounter}>increment</Button>
      </div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? render(<App name="Brian" />, wrapper) : false;
