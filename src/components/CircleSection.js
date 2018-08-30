import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled from 'styled-components';

class CircleSection extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    columnCount: PropTypes.number,
  };

  static defaultProps = {};
  render() {
    const { children, columnCount } = this.props;
    return <Root columnCount={columnCount}>{children}</Root>;
  }
}

const Root = styled.div`
  display: grid;
  grid-template-columns: ${props =>
    `repeat(${props.columnCount}, minmax(150px, 1fr))`};
`;

export default CircleSection;
