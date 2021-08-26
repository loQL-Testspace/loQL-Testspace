import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

import "./global.scss";

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
