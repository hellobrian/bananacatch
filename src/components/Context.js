import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    speedPercent: 100,
    fastestAnimationDuration: 2000,
    columnCount: 4,
    isPlaying: false,
    score: 0,
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          animationDuration:
            this.state.fastestAnimationDuration /
            (this.state.speedPercent / 100),
          handleSpeedChange: event =>
            this.setState({ speedPercent: parseInt(event.target.value, 10) }),
          togglePlay: () => this.setState({ isPlaying: !this.state.isPlaying }),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
