import PropTypes from "prop-types";
import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import CircleButton from "./CircleButton";

class CircleButtonEnhanced extends Component {
  render() {
    const { ...props } = this.props;
    return (
      <VisibilitySensor intervalDelay={300}>
        {({ isVisible }) => <CircleButton isVisible={isVisible} {...props} />}
      </VisibilitySensor>
    );
  }
}

export default CircleButtonEnhanced;
