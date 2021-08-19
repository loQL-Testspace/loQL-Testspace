import CryptoJS  from 'crypto-js';
import { get, set } from 'idb-keyval';
const queryButton = document.getElementById('query1');

//sampleQuery
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
//hash function
const hashQuery = (clientQuery) => {
  const hash = CryptoJS.MD5(JSON.stringify(clientQuery));
  return hash.toString(CryptoJS.enc.hex);
}

queryButton.addEventListener('click', (e) => {

    //hash the query
    // check the IndexedDB for the cache

  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
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
    })
  })
    .then(r => r.json())
    .then(data => {
        console.log('response from query:', data);
        set(hashQuery(sampleQuery), JSON.stringify(data))
            .then(() => console.log('It worked!'))
            .catch((err) => console.log('It failed!', err));
    })

    

  console.log('You clicked the query button.')
});

const mutationButton = document.getElementById('mutation1');
mutationButton.addEventListener('click', (e) => {
  fetch('/api/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query: `
            mutation {
                addHuman(input: {username: "lolcat" }) {
                    id
                }
              }
            `,
    })
  })
    .then(r => r.json())
    .then(data => console.log('response from query:', data));
  console.log('You clicked the query button.')
  console.log('This is the mutation button.')
});