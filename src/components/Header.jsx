import React, { Component } from 'react';
import styled from 'styled-components';
import { MyContext } from './Context';
import { colors } from './colors';

class Header extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <StyledHeader>
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
              <label htmlFor="speedPercent">{context.state.speedPercent}</label>
            </div>
          </StyledHeader>
        )}
      </MyContext.Consumer>
    );
  }
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: flex-end;
  background: ${colors.greyDark};
  height: 120px;
  width: 100%;
  color: white;
  position: relative;
  z-index: 3;
`;

export default Header;
