import CryptoJS  from 'crypto-js';
import { get, set } from 'idb-keyval';

const sampleQuery = {
  query: `
    query GetHumanQuery($id: String!) {
        human(input: {id: $id }) {
          id
        }
      }
    `,
  variables: {
    id: 'jBWMVGjm50l5LGwepDoty'
  }
}
console.log('this is a test');

const hashQuery = (clientQuery) => {
  let hash = CryptoJS.MD5(JSON.stringify(clientQuery));
  return hash.toString(CryptoJS.enc.hex);
}


console.log();


set('hello', 'world')
  .then(() => console.log('It worked!'))
  .catch((err) => console.log('It failed!', err));