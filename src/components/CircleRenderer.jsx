import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import CircleButton from './CircleButton';
import { randomNumber } from '../utils';

class CircleRenderer extends Component {
  state = {
    renderInterval: this.props.index * 666 + 1234,
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.state.renderInterval);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    render(
      <CircleButton id={this.props.id} context={this.props.context} />,
      document.getElementById(this.props.id),
    );
  }

  render() {
    const { id, ...props } = this.props;
    return (
      <Fragment>
        <pre>{JSON.stringify(this.state, null, 2)}</pre>
        <StyledCircleRenderer id={id} {...props} />
      </Fragment>
    );
  }
}

const StyledCircleRenderer = styled.section`
  display: flex;
  justify-content: center;
  overflow: hidden;
  width: 100%;
`;

export default CircleRenderer;
