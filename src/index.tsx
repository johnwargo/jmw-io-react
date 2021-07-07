import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';

ReactGA.initialize('G-L3V93PGRQH');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
