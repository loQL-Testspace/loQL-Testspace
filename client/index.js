import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { register } from 'loql';

import "./global.scss";

const cacheTime = 10000000;
register({ cacheExpirationLimit: cacheTime, cacheMethod: "cache-first" }); // sw.js

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
