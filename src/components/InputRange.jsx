import React, { Fragment } from 'react';
import styled from 'styled-components';

const InputRange = ({ defaultValue, onChange, labelText }) => (
  <Root>
    <input
      defaultValue={defaultValue}
      id="speedPercent"
      max="100"
      min="10"
      name="speedPercent"
      onChange={onChange}
      step="10"
      type="range"
    />
    <label htmlFor="speedPercent">{labelText}</label>
  </Root>
);

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;

  input {
    margin-bottom: 1rem;
    width: 100%;
  }

  label {
    font-weight: 300;
  }
`;

export default InputRange;
