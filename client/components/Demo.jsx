import React from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'

register({cacheExpirationLimit: 20000, cacheMethod: "cache-network"}); // sw.js

const Demo = () => {
  
  const queryButton = () => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
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
          id: '1',
        },
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log('Response from query:', data));
      console.log('You clicked the query button.');
  };

  const queryGetButton = () => {
    fetch(
      'http://localhost:4000/graphql?query=query{human(input:{id:"1"}){name}}'
    )
      .then((r) => r.json())
      .then((data) => console.log('Response from query:', data));
    console.log('You clicked the query button.');
  };

  const mutationButton = () => {
      fetch('/api/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          query: `
                mutation {
                    addHuman(input: {username: "lolcat" }) {
                        id
                    }
                  }
                `,
        }),
      })
        .then((r) => r.json())
        .then((data) => console.log('response from query:', data));
      console.log('You clicked the query button.');
      console.log('This is the mutation button.');
    };

  return (
    <div>
      <button className="queries" id="query1" onClick={queryButton}>Get Human Query </button>
      <button className="queries" id="query2" onClick={queryGetButton} >Get Human Query </button>
      <button className="mutations" id="mutation1" onClick={mutationButton}>Add Human Mutation </button>
    </div>
  )
};

export default Demo;