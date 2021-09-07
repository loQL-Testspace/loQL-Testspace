import React, { useState, useEffect } from 'react';
import { query1, query2, query3, query4 } from '../queries';
import Graph from '../components/Graph.jsx';
import './Demo.scss';
import ReactJson from 'react-json-view';

const URL = process.env.ENDPOINT;
const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // Performs fetch to backend, which proxies the request to the R+M API.
  // We are sending post requests so they will get picked up by the express backend.
  const getDataFromAPI = async (queryNumber) => {
    let query;
    switch (queryNumber) {
      case 1:
        query = query1;
        break;
      case 2:
        query = query2;
        break;
    }

    const response = await fetch(URL, query);
    const data = await response.json();
    setStateFromData({ data });
  };

  // Sets state, metrics then passed into ChartJS for display Data is passed into ReactJSON for display.
  async function setStateFromData({ data }) {
    const metrics = await summary(false);
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
