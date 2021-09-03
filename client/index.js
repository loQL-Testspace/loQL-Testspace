import { BrowserRouter } from "react-router-dom";
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { register } from 'loql';

//Bootstrap CSS needed for styling React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import "./global.scss";

const cacheTime = 10000000;
register({ gqlEndpoints: ['http://localhost:8080/api/graphql', 'https://beta.pokeapi.co/graphql/v1beta'], cacheExpirationLimit: 20000, cacheMethod: "cache-network" }); // sw.js

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  , document.getElementById('root'));
