import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import CircleSvg from './CircleSvg';
import { unmountComponentAtNode } from 'react-dom';
import styles from './CircleButton.css';
import classNames from 'classnames';

class CircleButton extends Component {
  handleUnmount = () =>
    unmountComponentAtNode(document.getElementById(this.props.id));

  render() {
    const { context } = this.props;
    const classList = classNames({
      [styles.isPlaying]: context.state.isPlaying,
      [styles.isPaused]: !context.state.isPlaying,
      [styles.slideDown]: true,
    });
    return (
      <StyledCircleButton
        className={classList}
        isPlaying={context.state.isPlaying}
        onAnimationEnd={this.handleUnmount}
        onClick={this.handleUnmount}
        style={{
          '--animation-playing': 'running',
          '--animation-paused': 'paused',
        }}
      >
        <CircleSvg size={100} fill="teal" />
      </StyledCircleButton>
    );
  }
}

const StyledCircleButton = styled.button`
  position: absolute;
  top: 0;
  z-index: 1;
`;

export default CircleButton;
