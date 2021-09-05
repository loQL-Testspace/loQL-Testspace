import express from 'express';
import fetch from 'node-fetch';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { query1, query2 } from './queries.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(express.json());

const PORT = 3000;
const API = 'https://rickandmortyapi.com/graphql';

const performGQLQuery = async (query) => {
  const result = await fetch(API, query);
  const parsed = await result.json();
  return parsed;
};

app.post('/api/graphql', async (req, res) => {
  const { queryNumber } = req.body;
  const GQLResult = await performGQLQuery(query1);
  res.status(200).send(GQLResult);
});

app.use('/', express.static(path.resolve(__dirname, '..', 'build')));
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
