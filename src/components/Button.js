import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

class Button extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  render() {
    const { children, ...other } = this.props;
    return <RootButton {...other}>{children}</RootButton>;
  }
}

const RootButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  color: white;
  font-size: 1rem;
  background-color: blue;
`;

export default Button;
