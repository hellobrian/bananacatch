import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import Button from "./Button";

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

class Header extends Component {
  render() {
    const { speed, onChange } = this.props;
    return (
      <Root>
        <TopSection>
          <Score>0</Score>
          <Button>Start</Button>
        </TopSection>
        <BottomSection>
          <input
            defaultValue={speed}
            id="speed"
            max="100"
            min="10"
            name="speed"
            onChange={onChange}
            step="1"
            type="range"
          />
          <label htmlFor="speed">Speed: {speed}%</label>
        </BottomSection>
      </Root>
    );
  }
}

export default Header;
