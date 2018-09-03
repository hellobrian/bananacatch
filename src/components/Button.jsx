import React from 'react';
import styled from 'styled-components';

const Button = ({ isPlaying, ...props }) => (
  <RootButton isPlaying={isPlaying} {...props} />
);

const green = 'rgba(0, 184, 148, 1.0)';
const yellow = 'rgba(253, 203, 110, 1.0)';

const RootButton = styled.button`
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

export default Button;
