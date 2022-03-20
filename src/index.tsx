import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga4';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import './index.css';

ReactGA.initialize('G-L3V93PGRQH');
ReactGA.send("pageview");

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
