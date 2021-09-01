import React, { useState, useEffect } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'
import { query1, query3, query4 } from "../queries";
import Graph from "../components/Graph2.jsx"
import GraphShell from "../components/Graph-shell.jsx"

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
      <>




<hr />
<div className={"demo-container"}>

    <div className={"demo-box"}>
      <div className={"query"}>
        <div className={"query-top"}>
          <span className={"query-title"}>Query #1</span>
          <span
            className={"rollover1"}
            data-tooltip="query MyQuery($name: String){
            pokemon_v2_ability(where: {name: {_eq: $name}}){
               name
               id
               generation_id
             }
           }"
          >
            <i className={"fas fa-info-circle icon-rollover"}></i>
          </span>
        </div>

        <button className={"query-button"} onClick={() => performGQLQuery('/api/graphql', query1)}>Fetch</button>
        
      </div>
      <div className={"query-chart"}>

      <GraphShell />

      
      </div>

    </div>

    <div className={"returned-data"}>
      <div className={"data"}>
      <div className={"returned-data-title"}>Returned data</div>

      <ReactJson src={lastQueryData} theme={"grayscale:inverted"} enableClipboard={false} displayDataTypes={false} />      </div>
    </div>
</div>
<hr />


    </>
  )
};

export default Demo;
