import React , { useEffect, useState }from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js'


const Graph = ({summaryResult}) => {
  
  
  let result = summaryResult() 
  console.log(result);
  return (
    <div>
      <div id="graph">
        <canvas id="myChart"></canvas>
        <button>test button</button>
      </div>
    </div>
  )
};

export default Graph;