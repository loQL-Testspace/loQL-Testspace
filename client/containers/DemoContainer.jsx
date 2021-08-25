import React , { useEffect, useState }from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import Graph from '../components/Graph.jsx';

register({cacheExpirationLimit: 20000, cacheMethod: "cache-network"}); // sw.js

const DemoContainer = () => {

  const [activateSummary, setActivateSummary] = useState(false);
  const [data , setData] = useState({});
  const [counter, setCounter] = useState (0);
  const [labels, setLabels] = useState([]);

  // logic to change activateSummary to true when buttons are pressed
  // const openSummary = 

  
  const queryButton = () => {
    fetch('/api/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        query: `query GetHumanQuery($id: String!) {
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

    const getSummary = async () => {
      // return await summary();
      let result = await summary();
      setData(result);
    }

    console.log('result in democontainer =', getSummary());


    useEffect(async () =>{
      let result = await summaryResult();
        setData(result);
    
    }, [])


    const incrementCounter = () => {
      setCounter(counter++);
    }

    console.log(counter);

    useEffect (() => {
      setLabels(labels.push(`Query #${counter}`));
    }, [counter])

    useEffect(() => {
      const script = document.createElement('script');
    
      script.src = "https://cdn.jsdelivr.net/npm/chart.js";
      script.async = true;
    
      document.body.appendChild(script);
    }, []);


  return (
    <div>
      <div className="demoButtons">
        <button className="queries" id="query1" onClick={queryButton, getSummary, incrementCounter}>Get Human Query </button>
        <button className="queries" id="query2" onClick={queryGetButton, getSummary, incrementCounter} >Get Human Query </button>
        <button className="mutations" id="mutation1" onClick={mutationButton, getSummary, incrementCounter}>Add Human Mutation </button>  
      </div>
      {/* {activateSummary && <Graph summaryResult={result} />} */}
      <Graph metricData={data} labelArr={labels} />
    </div>
  
  )
}

export default DemoContainer;