import React, { useState, useEffect } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'
import { query1, query3, query4 } from "../queries";
import Graph from "../components/Graph.jsx"
import "./Demo.scss";
import ReactJson from 'react-json-view'

const cacheTime = 5000;
register({ cacheExpirationLimit: cacheTime, cacheMethod: "cache-network" }); // sw.js

const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState({ lastApiCall: true }); 
  const [metrics, setMetrics] = useState({});
  const [secondsRemaining, setSecondsRemaining] = useState(cacheTime / 1000);

  // Perform initial query at load on page.
  useEffect(() => {
    performGQLQuery("/api/graphql", query1);
  }, [query1]);

  const [time, setTime] = useState(Date.now());

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSecondsRemaining(counter => counter - 1 > 0 ? counter - 1 : 0)
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   }
  // }, []);

  // Performs either GQL Get or POST request.
  const performGQLQuery = (...args) => {
    fetch(...args)
      .then((r) => r.json())
      .then(data => {
        setStateFromData({ data })
        if(data.lastApiCall) setSecondsRemaining(cacheTime / 1000)
      });
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
      <div className={"metrics"}>
        <h2>Metrics</h2>
        <Graph  displayTitle='true' legendPosition='right' metricData={metrics}/>
      </div>
      <div className={"data"}>
        <h2>Data</h2>
        <p>{lastQueryData.lastApiCall ? `This query was fetched from cache. ${secondsRemaining ? `The cache will expire in ${secondsRemaining} seconds...` : "Cache expired!"}` : "This query was fetched from the server. The data in the cache did not exist, or was stale."}</p>
        <ReactJson src={lastQueryData} enableClipboard={false} collapsed={3} displayDataTypes={false}/>
      </div>
    </div>
  )
};

export default Demo;
