import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';
import { MyContext } from './Context';

class CircleSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    const { children } = this.props;
    return (
      <MyContext.Consumer>
        {context => (
          <Root columnCount={context.state.columnCount}>{children}</Root>
        )}
      </MyContext.Consumer>
    );
  }
}

const Root = styled.div`
  display: grid;
  padding: 0 2%;

  @media (min-width: 400px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media (min-width: 1400px) {
    grid-template-columns: repeat(6, 1fr);
  }

  @media (min-width: 1600px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media (min-width: 1800px) {
    grid-template-columns: repeat(8, 1fr);
  }

  @media (min-width: 2000px) {
    grid-template-columns: repeat(9, 1fr);
  }

  @media (min-width: 2200px) {
    grid-template-columns: repeat(10, 1fr);
  }
`;

export default CircleSection;
