import React, { useState } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'
import { query1 } from "../queries";

register({ cacheExpirationLimit: 20000, cacheMethod: "cache-network" }); // sw.js

const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState({});
  const [metrics, setMetrics] = useState({});

  // Performs either GQL Get or POST request.
  const performGQLQuery = (...args) => {
    fetch(...args)
      .then((r) => r.json())
      .then(data => setStateFromData({ data }))
  };

  async function setStateFromData ({ data }) {
    const metrics = await summary();
    setMetrics(metrics);
    setLastQueryData(data);
  };
  
  return (
    <div>
      <button className="queries" id="query1" onClick={() => performGQLQuery('/api/graphql', query1)}>Get Human Query </button>
      <button className="queries" id="query2" onClick={() => performGQLQuery('http://localhost:4000/graphql?query=query{human(input:{id:"1"}){name}}')} >Get Human Query </button>
      <button className="mutations" id="mutation1" onClick={() => performGQLQuery('/api/graphql', mutation1)}>Add Human Mutation </button>
      <p>{JSON.stringify(lastQueryData)}</p>
    </div>
  )
};

export default Demo;