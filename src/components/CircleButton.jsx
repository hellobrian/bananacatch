import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import classNames from 'classnames';

import { MyContext } from './Context';
import CircleSvg from './CircleSvg';
import { randomSize, randomNumber, maxSize, minSize } from '../utils';
import styles from './CircleButton.css';
import { linearGradients } from './colors'

class CircleButton extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isVisible: PropTypes.bool,
  };

  state = {
    size: randomSize(),
    animationDelay: 0,
    isClicked: false,
    value: null,
  };

  componentDidMount() {
    const value = maxSize - this.state.size + minSize;
    this.setState({ value });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        size: randomSize(),
        animationDelay: randomNumber(1, 10) * 500,
        isClicked: false,
      });
    }
  }

  render() {
    const { index, isVisible } = this.props;
    const classList = classNames({
      [styles.slideDown]: isVisible,
      [styles.noAnimation]: !isVisible,
      [styles.visibilityHidden]: this.state.isClicked,
      [styles.visibilityVisible]: !this.state.isClicked,
    });

    const accessibleSize = this.state.size * 1.25;
    return (
      <MyContext.Consumer>
        {context => (
          <RootButton
            animationDelay={this.state.animationDelay}
            animationDuration={context.state.animationDuration}
            className={classList}
            index={index}
            isPlaying={context.state.isPlaying}
            isVisible={isVisible}
            size={accessibleSize}
            onClick={() => {
              context.incrementScore(this.state.value);
              this.setState({ isClicked: true });
            }} 
          >
            <CircleSvg size={accessibleSize} isVisible={isVisible} />
          </RootButton>
        )}
      </MyContext.Consumer>
    );
  }
}



const RootButton = styled.button`
  animation-delay: ${props => props.animationDelay + 'ms'};
  animation-duration: ${props => props.animationDuration + 'ms'};
  animation-play-state: ${props => (props.isPlaying ? 'running' : 'paused')};
  animation-timing-function: linear;
  appearance: none;
  background: ${linearGradients.circle};
  border-radius: 100%;
  border: 2px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  height: ${props => `${props.size}px`};
  padding: 0;
  transition: all 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: ${props => `${props.size}px`};
  outline: none;
`;

export default CircleButton;
