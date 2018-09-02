import React, { Component } from 'react';

export const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    speedPercent: 50,
    fastestAnimationDuration: 3500,
    columnCount: 6,
    isPlaying: false,
    score: 0,
  };

  componentDidUpdate(prevState) {
    console.log('prevState', prevState, 'state', this.state);
  }

  handleSpeedChange = event =>
    this.setState({ speedPercent: parseInt(event.target.value, 10) });

  togglePlay = () => this.setState({ isPlaying: !this.state.isPlaying });

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
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}

export default MyProvider;
