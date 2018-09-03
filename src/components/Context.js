import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    speedPercent: 50,
    fastestAnimationDuration: 4500,
    columnCount: 6,
    isPlaying: false,
    score: 0,
  };

  handleSpeedChange = event =>
    this.setState({ speedPercent: parseInt(event.target.value, 10) });

  togglePlay = () => this.setState({ isPlaying: !this.state.isPlaying });

  incrementScore = (size = 0) =>
    this.setState({ score: this.state.score + size });

  render() {
    return (
      <MyContext.Provider
        value={{
          state: {
            ...this.state,
            animationDuration:
              this.state.fastestAnimationDuration /
              (this.state.speedPercent / 100),
          },
          handleSpeedChange: this.handleSpeedChange,
          togglePlay: this.togglePlay,
          incrementScore: this.incrementScore,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
