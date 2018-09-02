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
                  {context.state.isPlaying ? 'Pause' : 'Start'}
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
  align-items: center;
  background-color: salmon;
  box-shadow: 0 12px 24px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  height: 150px;
  justify-content: center;
  position: relative;
  width: 100%;
  z-index: 3;
`;

const TopSection = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  width: 50%;
`;

const Score = styled.p`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: right;
  width: 50%;
`;

const BottomSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 50%;
`;

export default Header;
