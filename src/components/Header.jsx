import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { MyContext } from './Context';
import InputRange from './InputRange';

class Header extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <Root>
            <InputRangeColumn>
              <InputRange
                defaultValue={context.state.speedPercent}
                onChange={context.handleSpeedChange}
                labelText={`Speed: ${context.state.speedPercent}%`}
              />
            </InputRangeColumn>
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
            </ButtonColumn>
          </Root>
        )}
      </MyContext.Consumer>
    );
  }
}

const boxShadowPopOut = `box-shadow: 0 12px 24px 0 rgba(45, 52, 54, 0.1);`;
const greyDark = 'rgba(45, 52, 54, 1)';

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonColumn = styled(Column)`
  justify-content: flex-end;
`;

const InputRangeColumn = styled(Column)`
  justify-content: flex-start;
`;

const Root = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  background: ${greyDark};
  color: white;
  top: 0;
  width: 100%;
  padding: 2rem 1rem;
  position: relative;
  z-index: 3;
  ${boxShadowPopOut};
`;

const Score = styled.p`
  font-size: 2rem;
  padding: 0.5rem;
  text-align: center;
  width: 50%;
`;

export default Header;
