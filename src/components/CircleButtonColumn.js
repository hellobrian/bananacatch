import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import CircleButton from './CircleButton';
import VisibilitySensor from 'react-visibility-sensor';

const CircleButtonColumn = ({ index, context }) => (
  <Root>
    <VisibilitySensor partialVisibility>
      {({ isVisible }) => (
        <CircleButton index={index} context={context} isVisible={isVisible} />
      )}
    </VisibilitySensor>
  </Root>
);

CircleButtonColumn.propTypes = {
  index: PropTypes.number.isRequired,
  context: PropTypes.object,
  isVisible: PropTypes.bool,
};

const Root = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -150px;
`;

export default CircleButtonColumn;
