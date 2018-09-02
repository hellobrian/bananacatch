import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './index.css';
import MyProvider from './components/Context';

render(
  <MyProvider>
    <App />
  </MyProvider>,
  document.getElementById('app'),
);
