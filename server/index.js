import express from 'express';
import fetch from 'node-fetch';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

const PORT = 3000;
const API = 'https://rickandmortyapi.com/graphql';

// Configure CORS in production?
if (process.env.NODE_ENV === 'production') {
  app.use(cors());
}

const performGQLQuery = async (body) => {
  const query = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(body),
  };
  const result = await fetch(API, query);
  const parsed = await result.json();
  return parsed;
};

app.post('/api/graphql', async (req, res) => {
  const body = req.body;
  const GQLResult = await performGQLQuery(body);
  res.status(200).send(GQLResult);
});

/* Only serve static files in production.
 * If in development, then we are using webpack-dev-server for this.
 */
if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static(path.resolve(__dirname, '..', 'build')));
  app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
