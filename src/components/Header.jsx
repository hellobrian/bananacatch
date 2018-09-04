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
  grid-column: span 2;
`;

const Root = styled.header`
  display: grid;
  grid-gap: 3rem;
  grid-template-columns: 100px 1fr;
  grid-template-rows: repeat(2, 1fr);
  align-items: center;
  background: ${colors.greyDark};
  color: white;
  top: 0;
  width: 100%;
  padding: 2rem;
  position: relative;
  z-index: 3;
  ${boxShadow.popOut};

  @media (max-width: 400px) {
    padding: 5px;
    grid-template-columns: 1fr;
  }
`;

const Score = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 2rem;
  padding: 0.5rem;
  justify-content: center;
  width: 100%;
  background-color: ${colors.white_10};
`;

export default Header;
