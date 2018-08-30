import React, { Component } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';

import Header from './Header';
import CircleButton from './CircleButton';
import CircleSection from './CircleSection';

class App extends Component {
  state = {
    speedPercent: 100,
    fastestAnimationDuration: 2000,
    count: 3,
    isPlaying: false,
  };

  handleChange = event => {
    const speedPercent = parseInt(event.target.value, 10);
    this.setState({ speedPercent });
  };

  handlePlayClick = () => this.setState({ isPlaying: !this.state.isPlaying });

  render() {
    const animationDuration =
      this.state.fastestAnimationDuration / (this.state.speedPercent / 100);

    return (
      <MainSection>
        <Header
          speedPercent={this.state.speedPercent}
          onChange={this.handleChange}
        >
          <button onClick={this.handlePlayClick}>
            {this.state.isPlaying ? 'Pause' : 'Start'}
          </button>
        </Header>
        <CircleSection columnCount={this.state.count}>
          {times(this.state.count).map(index => (
            <VisibilitySensor key={index} partialVisibility>
              {({ isVisible }) => (
                <CircleButton
                  isPlaying={this.state.isPlaying}
                  isVisible={isVisible}
                  animationDuration={animationDuration}
                  style={{ animationDelay: `${index * 1000}ms` }}
                />
              )}
            </VisibilitySensor>
          ))}
        </CircleSection>
      </MainSection>
    );
  }
}

const MainSection = styled.section`
  display: block;
  height: 100vh;
  overflow-y: hidden;
`;

export default App;
