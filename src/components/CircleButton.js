import PropTypes from 'prop-types';
import styled from 'styled-components';
import React, { Component } from 'react';
import { MyContext } from './Context';
import CircleSvg from './CircleSvg';
import styles from './CircleButton.css';
import { randomSize, randomNumber } from '../utils';

class CircleButton extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    isVisible: PropTypes.bool,
  };

  state = {
    size: randomSize(),
    animationDelay: 0,
  };

  componentDidUpdate(prevProps, prevState) {
    // whenever CircleButton is invisibile based on isVisible prop, it should reset to a randomSize and random animationDelay
    if (prevProps.isVisible !== this.props.isVisible) {
      this.setState({
        size: randomSize(),
        animationDelay: randomNumber(1, 10) * 500,
      });
    }
  }

  render() {
    const { index, isVisible } = this.props;
    return (
      <MyContext.Consumer>
        {context => (
          <RootButton
            animationDelay={this.state.animationDelay}
            animationDuration={context.state.animationDuration}
            className={isVisible ? styles.slideDown : ''}
            index={index}
            isPlaying={context.state.isPlaying}
            isVisible={isVisible}
            size={this.state.size}
            onClick={() =>
              console.log(
                'TODO: restart animation, add to score, re-enable button when isVisible',
              )
            }
          >
            <CircleSvg size={this.state.size} isVisible={isVisible} />
          </RootButton>
        )}
      </MyContext.Consumer>
    );
  }
}

// TODO: All these animations need to be controlled by a className that can be toggled on/off
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
`;

export default CircleButton;
