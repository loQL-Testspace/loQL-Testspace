import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { register } from 'loql-cache';

//Bootstrap CSS needed for styling React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

register({
  gqlEndpoints: [process.env.ENDPOINT, 'https://rickandmortyapi.com/graphql'],
  cacheExpirationLimit: 20000,
  cacheMethod: 'cache-network',
});

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
