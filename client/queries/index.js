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
                }
              }
            `,
      variables: {
        id: '1',
      },
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