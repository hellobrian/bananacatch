import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import CircleSvg from "./CircleSvg";

const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const randomSize = () => Math.floor(Math.random() * 100) + 10;

class CircleButton extends Component {
  static propTypes = {
    animationDuration: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired
  };

  state = {
    color: getRandomColor(),
    size: randomSize(),
    animationDuration: this.props.animationDuration
  };

  componentDidUpdate(prevProps) {
    if (this.props.animationDuration !== prevProps.animationDuration) {
      this.setState({ animationDuration: this.props.animationDuration });
    }

    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({ size: randomSize(), color: getRandomColor() });
    }
  }

  render() {
    const { animationDuration, isVisible, ...props } = this.props;
    return (
      <RootButton
        animationDuration={animationDuration}
        size={this.state.size}
        isVisible={isVisible}
        onClick={() =>
          console.log("TODO: disable button, add to score, re-enable button when isVisible")
        }
        {...props}
      >
        <CircleSvg size={this.state.size} fill={this.state.color} isVisible={isVisible} />
      </RootButton>
    );
  }
}

const slideDown = keyframes`
  100% { transform: translateY(120vh); }
`;

const RootButton = styled.button`
  justify-self: center;
  animation-duration: ${props => props.animationDuration + "ms"};
  animation-iteration-count: infinite;
  animation-name: ${slideDown};
  animation-timing-function: linear;
  appearance: none;
  background: 0;
  border: 0;
  display: inline-flex;
  height: ${props => `${props.size}px`};
  padding: 0;
  position: relative;
  top: -300px;
  transform: ${props => `translateY(${props.size}px)`};
  width: ${props => `${props.size}px`};
`;

export default CircleButton;
