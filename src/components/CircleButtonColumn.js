import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CircleButton from './CircleButton';
import VisibilitySensor from 'react-visibility-sensor';

const CircleButtonColumn = ({ index }) => (
  <Root>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <CircleButton index={index} isVisible={isVisible} />
      )}
    </VisibilitySensor>
  </Root>
);

CircleButtonColumn.propTypes = {
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -150px;
`;

export default CircleButtonColumn;
