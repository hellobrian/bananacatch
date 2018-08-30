import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { MyContext } from './Context';

class Header extends Component {
  render() {
    return (
      <Root>
        <MyContext.Consumer>
          {context => (
            <Fragment>
              <TopSection>
                <Score>{context.state.score}</Score>
                <button onClick={context.togglePlay}>
                  {context.state.isPlaying ? 'running' : 'paused'}
                </button>
              </TopSection>
              <BottomSection>
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
                  Speed: {context.state.speedPercent}%
                </label>
              </BottomSection>
            </Fragment>
          )}
        </MyContext.Consumer>
      </Root>
    );
  }
}

const Root = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: salmon;
  position: relative;
  z-index: 1;
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  padding: 1rem;
`;

const Score = styled.p`
  font-size: 2rem;
  width: 50%;
  text-align: right;
  padding: 0.5rem;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 1rem;
`;

export default Header;
