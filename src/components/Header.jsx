import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import ResetButton from './ResetButton';
import { MyContext } from './Context';
import InputRange from './InputRange';
import { colors, boxShadow } from './colors';

class Header extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Root>
            <Column />
            <Column>
              <Score>{context.state.score}</Score>
            </Column>
            <ButtonColumn>
              <Button
                onClick={context.togglePlay}
                isPlaying={context.state.isPlaying}
              >
                {context.state.isPlaying ? 'Pause' : 'Start'}
              </Button>
              <ResetButton
                disabled={!context.state.isPlaying}
                onClick={context.reset}
              >
                Reset
              </ResetButton>
            </ButtonColumn>
            <InputRangeRow>
              <InputRange
                defaultValue={context.state.speedPercent}
                onChange={context.handleSpeedChange}
                labelText={`Speed: ${context.state.speedPercent}%`}
              />
            </InputRangeRow>
          </Root>
        )}
      </MyContext.Consumer>
    );
  }
}

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonColumn = styled(Column)`
  justify-content: flex-end;
`;

const InputRangeRow = styled.div`
  grid-column: span 3;
`;

const Root = styled.header`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  background: ${colors.greyDark};
  color: white;
  top: 0;
  width: 100%;
  padding: 2rem 10%;
  position: relative;
  z-index: 3;
  ${boxShadow.popOut};
`;

const Score = styled.p`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  width: 50%;
`;

export default Header;
