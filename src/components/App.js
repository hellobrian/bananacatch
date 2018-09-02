import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';

import { MyContext } from './Context';
import Header from './Header';
import CircleButtonColumn from './CircleButtonColumn';
import CircleSection from './CircleSection';
import { randomNumber } from '../utils';

class App extends Component {
  render() {
    return (
      <MainSection>
        <Header />
        <CircleSection>
          <MyContext.Consumer>
            {context =>
              times(context.state.columnCount).map(index => (
                <CircleButtonColumn index={index} key={index} />
              ))
            }
          </MyContext.Consumer>
          {/* {times(context.state.columnCount).map(index => (
            <VisibilitySensor key={index} partialVisibility>
              {({ isVisible }) => (
                <CircleButtonColumn
                  animationDuration={context.state.animationDuration}
                  columnCount={context.state.columnCount}
                  index={index}
                  isPlaying={context.state.isPlaying}
                  isVisible={isVisible}
                />
              )}
            </VisibilitySensor>
          ))} */}
        </CircleSection>
      </MainSection>
    );
  }
}

const MainSection = styled.section`
  background: lightpink;
  height: 100vh;
  overflow-y: hidden;
`;

export default App;
