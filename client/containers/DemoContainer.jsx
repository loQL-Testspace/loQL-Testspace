import React, { useState, useEffect } from 'react';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { query1, query2, query3, query4 } from '../queries';
import Graph from '../components/Graph.jsx';
import './Demo.scss';
import ReactJson from 'react-json-view';

const URL = 'http://localhost:3000/api/graphql';
const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // Performs fetch to backend, which proxies the request to the R+M API.
  // We are sending post requests so they will get picked up by the express backend.
  const getDataFromAPI = (queryNumber) => {
    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({ queryNumber }),
    }).then(async (r) => {
      const data = await r.json();
      setStateFromData({ data });
    });
  };

  // Sets state, metrics then passed into ChartJS for display
  // Data is passed into ReactJSON for display.
  async function setStateFromData({ data }) {
    const metrics = await summary();
    setMetrics(metrics);
    setLastQueryData(data);
  }

  return (
    <div className="demo-content">
      <div className="button-list">
        <button className={'queries'} onClick={() => getDataFromAPI(1)}>
          Get Homeworld
        </button>
        <button className={'queries'} onClick={() => getDataFromAPI(2)}>
          Get Characters
        </button>
      </div>
      <div className={'metrics'}>
        <h2>Metrics</h2>
        {metrics && <Graph displayTitle="true" legendPosition="right" metricData={metrics} />}
      </div>
      <div className={'data'}>
        <h2>Data</h2>
        {lastQueryData && (
          <ReactJson
            src={lastQueryData}
            enableClipboard={false}
            collapsed={3}
            displayDataTypes={false}
          />
        )}
      </div>
    </div>
  );
};

export default Demo;
// <button className={"queries"} onClick={() => performGQLQuery('http://localhost:4000/graphql?query=query{human(input:{id:"2"}){name}}')} >Get Trainer #2</button>
