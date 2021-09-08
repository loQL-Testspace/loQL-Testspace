import React, { useState, useEffect } from 'react';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql-cache/helpers/metrics.js';
import { query1, query2, query3, query4 } from '../queries';
import Graph from '../components/Graph.jsx';
import './Demo.scss';
import ReactJson from 'react-json-view';
import { get } from 'loql-cache/helpers/initializeIndexDb';

const URL = process.env.ENDPOINT;
const Demo = () => {
  const [lastQueryData, setLastQueryData] = useState(null);
  const [metrics, setMetrics] = useState(null);
  const [query1Metrics, setQuery1Metrics] = useState(null);
  const [query2Metrics, setQuery2Metrics] = useState(null);
  const [query3Metrics, setQuery3Metrics] = useState(null);
  const [query4Metrics, setQuery4Metrics] = useState(null);
  const [query1Data, setQuery1Data] = useState(null);
  const [query2Data, setQuery2Data] = useState(null);
  const [query3Data, setQuery3Data] = useState(null);
  const [query4Data, setQuery4Data] = useState(null);

  const hashedKeyLookup = {
    'query1': "f21b6ea98bc3144c499b59194c73a3ef",
    'query2': "f73c9324f415aeebe8c5e711fe74dc1a",
    'query3': "6f98006891d838f1c8b7c21119b7a12d",
    'query4': "bbfb37ba5726ce186cf324623d6a65e0"
  }
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
      case 3:
        query = query3;
        break;
      case 4:
        query = query4;
        break;
    }

    const response = await fetch(URL, query);
    const data = await response.json();
    setStateFromData({ data }, queryNumber);
  };

  
  // Sets state, metrics then passed into ChartJS for display Data is passed into ReactJSON for display.
  async function setStateFromData({ data }, queryNumber) {
    const metrics = await summary(false);
    setMetrics(metrics);
    setLastQueryData(data);
    // based on query number, get the hashedKey
    // with the hashedKey, get the results from metrics cachedSpeeds & uncachedSpeeds
    let hashedKey;
    let queryMetrics;
    switch (queryNumber) {
      case 1:
        hashedKey = hashedKeyLookup.query1;
        queryMetrics = await get('metrics', hashedKey);
        // queryMetrics=resultMetric;
        setQuery1Metrics(queryMetrics);
        setQuery1Data(data);
        break;
      case 2:
        hashedKey = hashedKeyLookup.query2;
        queryMetrics = await get('metrics', hashedKey)
        setQuery2Metrics(queryMetrics);
        setQuery2Data(data);
        break;
      case 3:
        hashedKey = hashedKeyLookup.query3;
        queryMetrics = await get('metrics', hashedKey);
        setQuery3Metrics(queryMetrics);
        setQuery3Data(data);
        break;
      case 4:
        hashedKey = hashedKeyLookup.query4;
        queryMetrics = await get('metrics', hashedKey);
        setQuery4Metrics(queryMetrics);
        setQuery4Data(data);
        break;
    }
  }

  return (
    <div className="demo-content">
      
      <div className="query1">
        <button className={'queries'} onClick={() => getDataFromAPI(1)}>
          Get Homeworld
        </button>
        <h2>Metrics</h2>
        {query1Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query1Metrics} />}
        <div className="queryData">
          <h2>Data</h2>
          {query1Data && (
            <ReactJson
              src={query1Data}
              enableClipboard={false}
              collapsed={3}
              displayDataTypes={false}
            />
          )}
        </div>
      </div>

      <div className="query2">
        <button className={'queries'} onClick={() => getDataFromAPI(2)}>
          Get Characters
        </button>
        <h2>Metrics</h2>
        {query2Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query2Metrics} />}
        <div className="queryData">
          <h2>Data</h2>
          {query2Data && (
            <ReactJson
              src={query2Data}
              enableClipboard={false}
              collapsed={3}
              displayDataTypes={false}
            />
          )}
        </div>
      </div>

      <div className="query3">
        <button className={'queries'} onClick={() => getDataFromAPI(3)}>
          Get Episodes
        </button>
        <h2>Metrics</h2>
        {query3Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query3Metrics} />}
        <div className="queryData">
          <h2>Data</h2>
          {query3Data && (
            <ReactJson
              src={query3Data}
              enableClipboard={false}
              collapsed={3}
              displayDataTypes={false}
            />
          )}
        </div>
      </div>

      <div className="query4">
        <button className={'queries'} onClick={() => getDataFromAPI(4)}>
          Get Location by ID
        </button>
        <h2>Metrics</h2>
        {query4Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query4Metrics} />}
        <div className="queryData">
          <h2>Data</h2>
          {query4Data && (
            <ReactJson
              src={query4Data}
              enableClipboard={false}
              collapsed={3}
              displayDataTypes={false}
            />
          )}
        </div>
      </div>

     {/*  <div className="button-list">
        <button className={'queries'} onClick={() => getDataFromAPI(2)}>
          Get Characters
        </button>
        <button className={'queries'} onClick={() => getDataFromAPI(3)}>
          Get Episodes
        </button>
        <button className={'queries'} onClick={() => getDataFromAPI(4)}>
          Get Location by ID
        </button>
      </div> */}
      <div className={'metrics'}>
        {/* {query1Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query1Metrics} />} */}

      </div>
      <div className={'data'}>
      </div>
    </div>
      //   <div className="demo-content">
      //   <div className="button-list">
      //     <button className={'queries'} onClick={() => getDataFromAPI(1)}>
      //       Get Homeworld
      //     </button>
      //     <button className={'queries'} onClick={() => getDataFromAPI(2)}>
      //       Get Characters
      //     </button>
      //     <button className={'queries'} onClick={() => getDataFromAPI(3)}>
      //       Get Episodes
      //     </button>
      //     <button className={'queries'} onClick={() => getDataFromAPI(4)}>
      //       Get Location by ID
      //     </button>
      //   </div>
      //   <div className={'metrics'}>
      //     <h2>Metrics</h2>
      //     {metrics && <Graph displayTitle="true" legendPosition="right" metricData={metrics} />}
      //     {/* {query1Metrics && <Graph displayTitle="true" legendPosition="right" metricData={query1Metrics} />} */}
  
      //   </div>
      //   <div className={'data'}>
      //     <h2>Data</h2>
      //     {lastQueryData && (
      //       <ReactJson
      //         src={lastQueryData}
      //         enableClipboard={false}
      //         collapsed={3}
      //         displayDataTypes={false}
      //       />
      //     )}
      //   </div>
      // </div>
  );
};

export default Demo;
