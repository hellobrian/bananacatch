import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import VisibilitySensor from 'react-visibility-sensor';

import MyProvider, { MyContext } from './Context';
import Header from './Header';
import CircleButton from './CircleButton';
import CircleSection from './CircleSection';

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MainSection>
          <MyContext.Consumer>
            {context => (
              <Fragment>
                <Header />
                <CircleSection columnCount={context.state.columnCount}>
                  {times(context.state.columnCount).map(index => (
                    <VisibilitySensor key={index} partialVisibility>
                      {({ isVisible }) => (
                        <CircleButton
                          isPlaying={context.state.isPlaying}
                          isVisible={isVisible}
                          animationDuration={context.animationDuration}
                          style={{ animationDelay: `${index * 1000}ms` }}
                        />
                      )}
                    </VisibilitySensor>
                  ))}
                </CircleSection>
              </Fragment>
            )}
          </MyContext.Consumer>
        </MainSection>
      </MyProvider>
    );
  }
}

const MainSection = styled.section`
  display: block;
  height: 100vh;
  overflow-y: hidden;
`;

export default App;
