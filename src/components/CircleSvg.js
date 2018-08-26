import PropTypes from "prop-types";
import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`;

const Root = styled.div`
  animation-name: ${fadeIn};
  animation-duration: 500ms;

  svg {
    transition: all 500ms cubic-bezier(0.5, 0, 0.1, 1);
  }
`;

class CircleSvg extends Component {
  static propTypes = {
    size: PropTypes.number,
    fill: PropTypes.string
  };

  static defaultProps = {
    size: 100,
    fill: "red"
  };

  render() {
    const { size, fill } = this.props;
    const radius = size / 2;
    const viewBox = `0 0 ${size} ${size}`;

    return (
      <Root>
        <svg width={size} height={size} viewBox={viewBox} fill={fill}>
          <circle cx={radius} cy={radius} r={radius} />
        </svg>
      </Root>
    );
  }
}

export default CircleSvg;
