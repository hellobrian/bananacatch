import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import classNames from 'classnames';

import { MyContext } from './Context';
import CircleSvg from './CircleSvg';
import { randomSize, randomNumber } from '../utils';
import styles from './CircleButton.css';

class CircleButton extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isVisible: PropTypes.bool,
  };

  state = {
    size: randomSize(),
    animationDelay: 0,
    isClicked: false,
    isVisible: this.props.isVisible,
  };

  componentDidUpdate(prevProps, prevState) {
    // whenever CircleButton is invisibile based on isVisible prop, it should reset to a randomSize and random animationDelay
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        size: randomSize(),
        animationDelay: randomNumber(1, 10) * 500,
        isClicked: false,
      });
    }
  }

  handleClick = () => {
    console.log('isClicked');
    this.setState({ isClicked: true });
  };

  render() {
    const { index, isVisible } = this.props;
    const classList = classNames({
      [styles.slideDown]: isVisible,
      [styles.noAnimation]: !isVisible,
      [styles.visibilityHidden]: this.state.isClicked,
      [styles.visibilityVisible]: !this.state.isClicked,
    });
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
            size={this.state.size}
            onClick={this.handleClick}
          >
            <CircleSvg size={this.state.size} isVisible={isVisible} />
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
  animation-timing-function: cubic-bezier(0.445, 0.05, 0.55, 0.95);
  appearance: none;
  background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
  border-radius: 100%;
  border: 5px solid white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1);
  height: ${props => `${props.size}px`};
  padding: 0;
  transition: all 100ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  width: ${props => `${props.size}px`};

  &:focus,
  &:active {
    outline: 5px solid blue;
  }
`;

export default CircleButton;
