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
  
  const querySimplePokeButton = () => {
    fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
              query MyQuery($name: String){
                pokemon_v2_ability(where: {name: {_eq: $name}}){
                  name
                  id
                  generation_id
                }
              }
            `,
        variables: {
          "name": "rock-head"
        },
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log('Response from query:', data));
    console.log('You clicked the Simple Pokemon Post Query button.');
  }

  const queryNestedPokeButton = () => {
    fetch('https://beta.pokeapi.co/graphql/v1beta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `
              query MyQuery {
                pokemon_v2_location(where: {name: {_eq: "cianwood-city"}}) {
                  pokemon_v2_region {
                    pokemon_v2_pokedexes {
                      pokemon_v2_pokemondexnumbers(where: {pokemon_species_id: {_gte: 100}, _and: {pokemon_species_id: {_lte: 110}}}) {
                        pokemon_v2_pokemonspecy {
                          capture_rate
                          gender_rate
                          name
                          id
                        }
                      }
                    }
                  }
                }
              }
            `,
      }),
    })
      .then((r) => r.json())
      .then((data) => console.log('Response from query:', data));
    console.log('You clicked the Nested Pokemon Post Query button.');
  }

  return (
    <div>
      <button className="queries" id="query1" onClick={queryButton}>Get Human Query </button>
      <button className="queries" id="query2" onClick={queryGetButton} >Get Human Query </button>
      <button className="queries" id="query3" onClick={querySimplePokeButton}>Simple Pokemon Query </button>
      <button className="queries" id="query4" onClick={queryNestedPokeButton}> Nested Pokemon Query </button>
      <button className="mutations" id="mutation1" onClick={mutationButton}>Add Human Mutation </button>
    </div>
  )
};

export default Demo;