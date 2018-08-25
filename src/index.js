import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import { render } from "react-dom";
import Header from "./components/Header";
import CircleSvg from "./components/CircleSvg";
import "./index.css";

const slideDown = keyframes`
  from {
    transform: translateY(0)
  }

  to {
    transform: translateY(100vh);
  }
`;

const MainSection = styled.section`
  display: block;
  height: 100vh;
`;

const CircleSection = styled.div`
  display: block;
  margin: 0 auto;
`;

const CircleButtonWrapper = styled.button`
  animation-name: ${slideDown};
  animation-duration: ${props => props.animationDuration};
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  position: relative;
  top: -100px;
  appearance: none;
  padding: 0;
  border: 0;
  background: 0;
`;

class App extends Component {
  state = { speed: 75, duration: 1, circleCount: 3 };

  handleChange = event => {
    const speed = parseInt(event.target.value, 10);
    this.setState({ speed });
  };

  render() {
    const animationDuration = `${(this.state.duration / this.state.speed) * 100}s`;
    return (
      <MainSection>
        <Header speed={this.state.speed} onChange={this.handleChange} />
        <CircleSection>
          {/* TODO: render Circles as children.toArray and keep track of circleCount in state to control animation delay so that circles don't appear at the same time */}
          <CircleButtonWrapper animationDuration={animationDuration}>
            <CircleSvg size={170} fill="green" />
          </CircleButtonWrapper>
          <CircleButtonWrapper animationDuration={animationDuration}>
            <CircleSvg size={70} fill="blue" />
          </CircleButtonWrapper>
          <CircleButtonWrapper animationDuration={animationDuration}>
            <CircleSvg size={100} fill="red" />
          </CircleButtonWrapper>
        </CircleSection>
      </MainSection>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;
