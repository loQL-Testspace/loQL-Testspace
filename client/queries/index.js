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
  }),
};

// Query that gets all characters and their names/worlds.
export const query3 = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  body: JSON.stringify({
    query: `
      query {
        episodes {
          results {
            name
            air_date
            characters {
              name
              species
              gender
              episode {
                name
              }    
            }
          }
        }
      }
    `,
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
      query {
        location(id: 13) {
          name
          type
          dimension
          residents {
            name
            species
            image
          }
        }
      }
    `,
  }),
};
