import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    speedPercent: 50,
    fastestAnimationDuration: 4000,
    columnCount: 10,
    isPlaying: false,
    score: 0,
    isReset: false,
  };

  componentDidUpdate(prevState) {}

  handleSpeedChange = event =>
    this.setState({ speedPercent: parseInt(event.target.value, 10) });

  togglePlay = () =>
    this.setState({
      isPlaying: !this.state.isPlaying,
      isReset: false,
    });

  incrementScore = (size = 0) =>
    this.setState({ score: this.state.score + size });

  reset = () =>
    this.setState({
      isPlaying: false,
      score: 0,
      speedPercent: 50,
      isReset: !this.state.isReset,
    });

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
          reset: this.reset,
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
