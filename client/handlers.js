<<<<<<< HEAD
=======
// const queryButton = document.getElementById('query1');
// queryButton.addEventListener('click', (e) => {
//   fetch('/api/graphql', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       Accept: 'application/json',
//     },
//     body: JSON.stringify({
//       query: `
//             query GetHumanQuery($id: String!) {
//                 human(input: {id: $id }) {
//                   id
//                 }
//               }
//             `,
//       variables: {
//         id: '1',
//       },
//     }),
//   })
//     .then((r) => r.json())
//     .then((data) => console.log('Response from query:', data));
//   console.log('You clicked the query button.');
// });

// const queryGetButton = document.getElementById('query2');
// queryGetButton.addEventListener('click', (e) => {
//   fetch(
//     'http://localhost:4000/graphql?query=query{human(input:{id:"1"}){name}}'
//   )
//     .then((r) => r.json())
//     .then((data) => console.log('Response from query:', data));
//   console.log('You clicked the query button.');
// });

/* const mutationButton = document.getElementById('mutation1');
mutationButton.addEventListener('click', (e) => {
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
}); */
>>>>>>> 3b5dc8f4d8884aba1a5533fc8cf1a3c882802e3a
