import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import styled from 'styled-components';
import CircleButton from './CircleButton';
import VisibilitySensor from 'react-visibility-sensor';

const CircleButtonColumn = ({ index, isReset }) => (
  <Root>
    <Column>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <CircleButton index={index} isVisible={isVisible} isReset={isReset} />
        )}
      </VisibilitySensor>
    </Column>
    <Column>
      <VisibilitySensor partialVisibility>
        {({ isVisible }) => (
          <CircleButton
            index={`${index}-a`}
            isVisible={isVisible}
            isReset={isReset}
          />
        )}
      </VisibilitySensor>
    </Column>
  </Root>
);

CircleButtonColumn.propTypes = {
  index: PropTypes.number.isRequired,
  isVisible: PropTypes.bool,
};

const Root = styled.div`
  /* display: block; */
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* grid-template-columns: repeat(2, 1fr); */
  /* overflow: hidden; */
`;

const Column = styled.div`
  position: relative;
  top: -150px;
  display: flex;
  justify-content: center;
  height: 100vh;
`;

export default CircleButtonColumn;
