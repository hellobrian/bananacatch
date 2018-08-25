import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import CircleSvg from "./CircleSvg";

const slideDown = keyframes`
  100% { transform: translateY(100vh); }
`;

const Root = styled.button`
  transform: ${props => `translateY(${props.size})`};
  animation-duration: ${props => props.animationDuration + "ms"};
  animation-iteration-count: infinite;
  animation-name: ${slideDown};
  animation-timing-function: linear;
  appearance: none;
  background: 0;
  border: 0;
  padding: 0;
  position: relative;
  top: ${props => `-${props.size}px`};
  margin: 1rem;
`;

class CircleButton extends Component {
  state = {
    size: Math.floor(Math.random() * 100) + 10,
    animationDuration: this.props.animationDuration
  };

  componentDidMount() {
    this.id = setInterval(() => this.tick(), this.state.animationDuration - 100);
  }

  componentDidUpdate(prevProps) {
    if (this.props.animationDuration !== prevProps.animationDuration) {
      this.setState({ animationDuration: this.props.animationDuration });
      console.log(this.state);
    }
  }

  componentWillUnmount() {
    clearInterval(this.id);
  }

  tick() {
    this.setState({
      size: Math.floor(Math.random() * 100) + 10
    });
  }

  render() {
    const { animationDuration, size, fill, isHidden } = this.props;
    return (
      <Root animationDuration={animationDuration} isHidden={isHidden} size={this.state.size}>
        <CircleSvg size={this.state.size} fill={fill} />
      </Root>
    );
  }
}

export default CircleButton;
