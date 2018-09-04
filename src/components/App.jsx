import React, { Component, Fragment } from 'react';
import styled, { keyframes } from 'styled-components';
import { times } from 'lodash';
import { MyContext } from './Context';
import { colors } from './colors';
import { render, unmountComponentAtNode } from 'react-dom';
import VisibilitySensor from 'react-visibility-sensor';
import CircleSvg from './CircleSvg';
import { randomNumber, randomSize } from '../utils';
import styles from './App.css';
import classNames from 'classnames';

// class CircleButton extends Component {}

class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainSection>
            <Header>
              <button onClick={context.togglePlay}>
                {context.state.isPlaying ? 'Pause' : 'Start'}
              </button>
              <p>{context.state.score}</p>
              <div>
                <input
                  defaultValue={context.state.speedPercent}
                  id="speedPercent"
                  max="100"
                  min="10"
                  name="speedPercent"
                  onChange={context.handleSpeedChange}
                  step="10"
                  type="range"
                />
                <label htmlFor="speedPercent">
                  {context.state.speedPercent}
                </label>
              </div>
            </Header>
            <CircleRenderer context={context} />
          </MainSection>
        )}
      </MyContext.Consumer>
    );
  }
}

class CircleRenderer extends Component {
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    render(
      <CircleButton context={this.props.context} />,
      document.getElementById('circle-section'),
    );
  }

  render() {
    const { ...props } = this.props;
    return <StyledCircleRenderer id="circle-section" {...props} />;
  }
}

class CircleButton extends Component {
  handleUnmount = () =>
    unmountComponentAtNode(document.getElementById('circle-section'));

  render() {
    return (
      <StyledCircleButton
        onClick={this.handleUnmount}
        className={styles.slideDown}
        onAnimationEnd={this.handleUnmount}
      >
        <CircleSvg size={100} fill="teal" />
      </StyledCircleButton>
    );
  }
}

const MainSection = styled.section`
  height: 100vh;
  overflow-y: hidden;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

const Header = styled.header`
  background: ${colors.greyDark};
  height: 100px;
  width: 100%;
  color: white;
`;

const StyledCircleRenderer = styled.section`
  display: inline-block;
  width: 100%;
  height: calc(100vh - 100px);
  background: #ccc;
`;

const StyledCircleButton = styled.button`
  position: absolute;
  top: 0;
`;

export default App;
