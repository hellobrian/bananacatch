import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { render } from "react-dom";
import Header from "./components/Header";
import CircleButton from "./components/CircleButton";
import "./index.css";

const MainSection = styled.section`
  display: block;
  height: 100vh;
`;

const CircleSection = styled.div`
  display: block;
  margin: 0 auto;
`;

class App extends Component {
  state = {
    speedPercent: 15,
    fastestAnimationDuration: 3000
  };

  handleChange = event => {
    const speedPercent = parseInt(event.target.value, 10);
    this.setState({ speedPercent });
  };

  render() {
    const animationDuration = this.state.fastestAnimationDuration / (this.state.speedPercent / 100);

    return (
      <MainSection>
        <Header speedPercent={this.state.speedPercent} onChange={this.handleChange} />
        <CircleSection>
          {/* TODO: render Circles as children.toArray and keep track of circleCount in state to control animation delay so that circles don't appear at the same time */}
          <CircleButton animationDuration={animationDuration} size={170} fill="green" />
          <CircleButton animationDuration={animationDuration} size={70} fill="blue" />
          <CircleButton animationDuration={animationDuration} size={100} fill="red" />
        </CircleSection>
      </MainSection>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;
