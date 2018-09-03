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
                <Button
                  onClick={context.togglePlay}
                  isPlaying={context.state.isPlaying}
                >
                  {context.state.isPlaying ? 'Pause' : 'Start'}
                </Button>
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
  background-color: rgba(45, 52, 54, 1);
  box-shadow: 0 12px 24px 0 rgba(45, 52, 54, 0.1);
  color: white;
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

const green = 'rgba(0, 184, 148, 1.0)';
const yellow = 'rgba(253, 203, 110, 1.0)';

const Button = styled.button`
  all: unset;
  background-color: ${props => (props.isPlaying ? green : 'transparent')};
  color: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 1.25rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 300;
  border: 2px solid white;
  height: 40px;
  width: 100px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => (props.isPlaying ? yellow : green)};
    transition: all 500ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }
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
