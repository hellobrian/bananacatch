import PropTypes from 'prop-types';
import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';

class CircleSvg extends Component {
  static propTypes = {
    size: PropTypes.number,
    fill: PropTypes.string,
  };

  static defaultProps = {
    size: 100,
    fill: 'transparent',
  };

  render() {
    const { size, fill } = this.props;
    const radius = size / 2;
    const viewBox = `0 0 ${size} ${size}`;

    return (
      <svg width={size} height={size} viewBox={viewBox} fill={fill}>
        <circle cx={radius} cy={radius} r={radius} />
      </svg>
    );
  }
}

export default CircleSvg;
