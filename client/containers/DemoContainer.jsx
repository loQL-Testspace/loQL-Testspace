import React, { useState, useEffect } from 'react';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { query1, query2, query3, query4 } from '../queries';
import Graph from '../components/Graph.jsx';
import './Demo.scss';
import ReactJson from 'react-json-view';

const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState(null);
  const [metrics, setMetrics] = useState(null);

  // Performs either GQL Get or POST request.
  const performGQLQuery = (...args) => {
    fetch(...args).then(async (r) => {
      const cool = await r.json();
      setStateFromData({ data: cool });
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
        <button
          className={'queries'}
          onClick={() => performGQLQuery('/api/graphql', query1)}
        >
          Get Trainer
        </button>
        <button
          className={'queries'}
          onClick={() =>
            performGQLQuery(
              'http://localhost:8080/api/graphql?query=query{human(input:{id:"2"}){name}}'
            )
          }
        >
          Get Human Query{' '}
        </button>
        <button
          className={'queries'}
          onClick={() =>
            performGQLQuery('https://beta.pokeapi.co/graphql/v1beta', query3)
          }
        >
          Simple Pokemon Query{' '}
        </button>
        <button
          className={'queries'}
          onClick={() =>
            performGQLQuery('https://beta.pokeapi.co/graphql/v1beta', query4)
          }
        >
          Nested Pokemon Query{' '}
        </button>
      </div>
      <div className={'metrics'}>
        <h2>Metrics</h2>
        {metrics && (
          <Graph
            displayTitle="true"
            legendPosition="right"
            metricData={metrics}
          />
        )}
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
