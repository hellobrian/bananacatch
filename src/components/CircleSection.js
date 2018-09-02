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
  grid-template-columns: ${props => `repeat(${props.columnCount}, 1fr)`};
  padding: 0 2%;
`;

export default CircleSection;
