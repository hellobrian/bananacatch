import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';

import { MyContext } from './Context';
import Header from './Header';
import CircleButton from './CircleButton';
import CircleSection from './CircleSection';
import { randomNumber } from '../utils';

class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainSection>
            <Header />
            <CircleSection columnCount={context.state.columnCount}>
              {times(context.state.columnCount).map(index => (
                <VisibilitySensor key={index} partialVisibility>
                  {({ isVisible }) => (
                    <CircleButton
                      animationDuration={context.state.animationDuration}
                      columnCount={context.state.columnCount}
                      index={index}
                      isPlaying={context.state.isPlaying}
                      isVisible={isVisible}
                    />
                  )}
                </VisibilitySensor>
              ))}
            </CircleSection>
          </MainSection>
        )}
      </MyContext.Consumer>
    );
  }
}

const MainSection = styled.section`
  height: 100vh;
  overflow-y: hidden;
  /* background: linear-gradient(90deg, #d53369 0%, #daae51 100%); */
  /* background: linear-gradient(90deg, #333333, 0%, #5a5454); */
  background: lightpink;
`;

export default App;
