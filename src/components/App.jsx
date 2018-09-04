import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import { MyContext } from './Context';
import Header from './Header';
import CircleButtonColumn from './CircleButtonColumn';
import CircleSection from './CircleSection';
import { colors, linearGradients } from './colors';

const App = () => (
  <MyContext.Consumer>
    {context => (
      <MainSection isPlaying={context.state.isPlaying}>
        <Header />
        <CircleSection>
          {times(context.state.columnCount).map(index => (
            <CircleButtonColumn index={index} key={index} />
          ))}
        </CircleSection>
      </MainSection>
    )}
  </MyContext.Consumer>
);

const MainSection = styled.section`
  background: ${props => (props.isPlaying ? colors.grey : colors.greyDark)};
  height: 100vh;
  overflow-y: hidden;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
`;

export default App;
