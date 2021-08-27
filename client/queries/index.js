export const query1 = {
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
                  name
                }
              }
            `,
      variables: {
        id: '1',
      },
    }),
  };

export const query2 = {
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
                  name
                }
              }
            `,
      variables: {
        id: '2',
      },
    }),
  };

export const query3 = {
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
  };

export const query4 = {
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
  };

export const mutation1 = {
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
  };
