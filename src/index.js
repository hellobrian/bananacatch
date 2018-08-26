import PropTypes from "prop-types";
import React, { Component } from "react";
import styled from "styled-components";
import { render } from "react-dom";
import Header from "./components/Header";
import CircleButtonEnhanced from "./components/CircleButtonEnhanced";
import "./index.css";

const MainSection = styled.section`
  display: block;
  height: 100vh;
`;

const CircleSection = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(150px, 1fr));
`;

class App extends Component {
  state = {
    speedPercent: 100,
    fastestAnimationDuration: 2000
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
          <CircleButtonEnhanced
            animationDuration={animationDuration}
            style={{ animationDelay: "1000ms" }}
          />
          <CircleButtonEnhanced
            animationDuration={animationDuration}
            style={{ animationDelay: "2000ms" }}
          />
          <CircleButtonEnhanced
            animationDuration={animationDuration}
            style={{ animationDelay: "4000ms" }}
          />
          <CircleButtonEnhanced
            animationDuration={animationDuration}
            style={{ animationDelay: "500ms" }}
          />
        </CircleSection>
      </MainSection>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? render(<App />, wrapper) : false;
