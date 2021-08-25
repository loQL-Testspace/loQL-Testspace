import React , { useEffect, useState } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { Bar, Line } from 'react-chartjs-2'


const Graph = ({metricData, labelsArr}) => {
  
  // console.log('data state =', data)
  // let result = await summaryResult();
  // console.log('result in graph =', result());

  console.log('metricData in graph.jsx =', metricData);
  
  const { individualUncachedSpeeds, individualCachedSpeeds } = metricData;

  const uncachedBar = {
      labels: [],
      chartData : { 
        labels: labelsArr,
        datasets: [{
          label: 'Uncached Speeds',
          data: individualUncachedSpeeds, 
        }]
      }
    }
  
  const options = {
    maintainAspectRatio: false,
    legend: {display:true, position:'right'}
    }
  

  // const unCached = new Chart(config);

  return (
    <div>
      <div id="graph">
          <Bar data={uncachedBar} 
            options={options}/>
        <button>test button</button>
      </div>
    </div>
  )
};

export default Graph;