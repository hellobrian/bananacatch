import React from 'react';
import styled from 'styled-components';
import { times } from 'lodash';

import { MyContext } from './Context';
import Header from './Header';
import CircleButtonColumn from './CircleButtonColumn';
import CircleSection from './CircleSection';

const App = () => (
  <MainSection>
    <Header />
    <CircleSection>
      <MyContext.Consumer>
        {context =>
          times(context.state.columnCount).map(index => (
            <CircleButtonColumn context={context} index={index} key={index} />
          ))
        }
      </MyContext.Consumer>
    </CircleSection>
  </MainSection>
);

const MainSection = styled.section`
  background: rgba(250, 177, 160, 1);
  height: 100vh;
  overflow-y: hidden;
`;

export default App;
