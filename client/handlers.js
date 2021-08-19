const queryButton = document.getElementById("query1");
queryButton.addEventListener("click", (e) => {
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
                id: "1"
            }
        })
    })
  .then(r => r.json())
  .then(data => console.log('response from query:', data));
    console.log("You clicked the query button.")
});

const mutationButton = document.getElementById("mutation1");
mutationButton.addEventListener("click", (e) => {
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
    console.log("You clicked the query button.")
    console.log("This is the mutation button.")
});