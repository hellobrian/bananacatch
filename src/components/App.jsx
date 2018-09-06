import React, { Component, Fragment } from 'react';
import styled from 'styled-components';
import { times } from 'lodash';
import Header from './Header';
import CircleRenderer from './CircleRenderer';
import { MyContext } from './Context';
import CircleButton from './CircleButton';

class App extends Component {
  render() {
    return (
      <MyContext.Consumer>
        {context => (
          <MainSection>
            <Header />
            <Grid>
              <CircleButton context={context} id="some-id" />
              {times(4).map(index => (
                <Column key={index}>
                  <CircleRenderer
                    context={context}
                    index={index}
                    id={`circle-section-${index}`}
                  />
                </Column>
              ))}
            </Grid>
          </MainSection>
        )}
      </MyContext.Consumer>
    );
  }
}

const MainSection = styled.section`
  display: block;
  overflow: hidden;
  transition: all 1000ms cubic-bezier(0.075, 0.82, 0.165, 1);
  width: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  overflow: hidden;
`;

const Column = styled.div`
  display: inline-block;
  background-color: palegoldenrod;
`;

export default App;
