import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CircleSvg from './CircleSvg';
import { randomSize, randomNumber } from '../utils';

class CircleButton extends Component {
  static propTypes = {
    animationDuration: PropTypes.number.isRequired,
    isVisible: PropTypes.bool,
    isPlaying: PropTypes.bool.isRequired,
  };

  state = {
    size: randomSize(),
    animationDuration: this.props.animationDuration,
    randomHiddenDot: 1,
  };

  componentDidUpdate(prevProps) {
    // animationDuration needs to update based on onChange event handled by context.handleSpeedChange
    if (this.props.animationDuration !== prevProps.animationDuration) {
      this.setState({ animationDuration: this.props.animationDuration });
    }

    // whenever CircleButton is invisibile based on isVisible prop, it should reset to a randomSize
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        size: randomSize(),
        randomHiddenDot: randomNumber(0, this.props.columnCount),
      });
    }
  }

  render() {
    const {
      animationDuration,
      isVisible,
      isPlaying,
      index,
      columnCount,
      ...props
    } = this.props;
    return (
      <RootButton
        animationDelay={this.state.animationDelay}
        animationDuration={animationDuration}
        index={index}
        isPlaying={isPlaying}
        isVisible={isVisible}
        randomHiddenDot={this.state.randomHiddenDot}
        size={this.state.size}
        onClick={() =>
          console.log(
            'TODO: disable button, add to score, re-enable button when isVisible',
          )
        }
        {...props}
      >
        <CircleSvg size={this.state.size} isVisible={isVisible} />
      </RootButton>
    );
  }
}

const slideDown = keyframes`
  0% {
    transform: translateY(0);
  }

  98% {
    transform: translateY(150vh);
  }

  100% {
    transform: translateY(150vh);
  }
`;

// TODO: All these animations need to be controlled by a className that can be toggled on/off
const RootButton = styled.button`
  visibility: ${props =>
    props.randomHiddenDot === props.index ? 'hidden' : 'visible'};
  animation-delay: ${props => `${props.index * 500}ms`};
  animation-duration: ${props => props.animationDuration + 'ms'};
  animation-iteration-count: infinite;
  animation-name: ${slideDown};
  animation-play-state: ${props => (props.isPlaying ? 'running' : 'paused')};
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  appearance: none;
  background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
  border-radius: 100%;
  border: 5px solid white;
  height: ${props => `${props.size}px`};
  justify-self: center;
  padding: 0;
  width: ${props => `${props.size}px`};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  transition: all 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export default CircleButton;
