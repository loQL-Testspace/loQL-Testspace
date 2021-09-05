// Query that gets a Gazorpazorp.
export const query1 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: `
      query MyQuery {
        locationsByIds(ids: ["30", "40"]){
          name
          id
        }
        characters {
          info {
            count
          }
        }
      }
    `,
    variables: {
      id: '1',
    },
  }),
};

// Query that gets all characters and their names/worlds.
export const query2 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: `
      query {
        characters {
          results {
            name
            species
          }
        }
      }
    `,
    variables: {
      id: '1',
    },
  }),
};
