import React, { useState, useEffect } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'
import { query1, query3, query4 } from "../queries";
import "./Demo.scss";
import ReactJson from 'react-json-view'

register({ cacheExpirationLimit: 20000, cacheMethod: "cache-network" }); // sw.js

const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState({});
  const [metrics, setMetrics] = useState({});

  // Perform initial query at load on page.
  useEffect(() => {
    performGQLQuery("/api/graphql", query1);
  }, [])

  // Performs either GQL Get or POST request.
  const performGQLQuery = (...args) => {
    fetch(...args)
      .then((r) => r.json())
      .then(data => setStateFromData({ data }))
  };

  // Sets state, metrics then passed into ChartJS for display
  // Data is passed into ReactJSON for display.
  async function setStateFromData ({ data }) {
    const metrics = await summary();
    setMetrics(metrics);
    setLastQueryData(data);
  };
  
  return (
    <div className="demo-content">
      <div className="button-list">
        <button className={"queries"} onClick={() => performGQLQuery('/api/graphql', query1)}>Get Human Query </button>
        <button className={"queries"} onClick={() => performGQLQuery('http://localhost:4000/graphql?query=query{human(input:{id:"1"}){name}}')} >Get Human Query </button>
        <button className={"queries"} onClick={() => performGQLQuery('https://beta.pokeapi.co/graphql/v1beta', query3)}>Simple Pokemon Query </button>
        <button className={"queries"} onClick={() => performGQLQuery('https://beta.pokeapi.co/graphql/v1beta', query4)}>Nested Pokemon Query </button>
        <button className={"mutations"} onClick={() => performGQLQuery('/api/graphql', mutation1)}>Add Human Mutation </button>
      </div>
      <ReactJson src={lastQueryData} enableClipboard={false} collapsed={3} displayDataTypes={false}/>
    </div>
  )
};

export default Demo;
