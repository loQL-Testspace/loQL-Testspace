import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
