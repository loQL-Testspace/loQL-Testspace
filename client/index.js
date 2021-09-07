import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { render } from 'react-dom';
import App from './app.jsx';
import { register } from '@harrisoncramer/loql';

//Bootstrap CSS needed for styling React Bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import './global.scss';

register({
  gqlEndpoints: ['http://localhost:8080/api/graphql'],
  cacheExpirationLimit: 20000,
  cacheMethod: 'cache-network',
});

render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
