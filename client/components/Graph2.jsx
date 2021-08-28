import React , { useEffect, useState } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { Bar, Line } from 'react-chartjs-2'



const Graph = ({metricData}) => {
  
    //hardcode data here
    const uncachedSpeed = 1200;
    const cachedSpeed = 200;
    
    //calculate time saving, in this example it's 83%
    const timeSaving = Math.round((uncachedSpeed - cachedSpeed) / uncachedSpeed * 100);


  console.log('metricData in graph.jsx =', metricData);
  
  const { individualUncachedSpeeds, individualCachedSpeeds } = metricData;
  console.log( 'individualuncachedspeeds in graph =', individualUncachedSpeeds);

  const dummyIndividualUncachedSpeeds = [500, 600, 550, 570, 630, 700];
  const dummyIndividualCachedSpeeds = [5, 6, 6, 7, 4, 6];

  // bar chart setup
  const uncachedBar = {
      labels: [],
      chartData : { 
        labels: ['1st'],
        datasets: [
          {
            label: 'Uncached Speeds',
            // data: individualUncachedSpeeds
            data: dummyIndividualUncachedSpeeds
            // backgroundColor: 'rgba('
          },
          {
            label: 'Cached Speeds',
            // data: individualCachedSpeeds,
            data: dummyIndividualCachedSpeeds,
            backgroundColor : 'rgba(75, 192, 192, 1)'
          }
        ]
      }
    }
  
  const barOptions = {
    indexAxis: 'y',
    maintainAspectRatio: true
  }
  

  // pie chart setup
  const totalTimeServer = dummyIndividualUncachedSpeeds.reduce((a, b) => a+b);
  const totalTimeCache = dummyIndividualCachedSpeeds.reduce((a, b) => a+b);
  
 
  return (
    <div>
      <div id="speedBar">
        <Bar data={uncachedBar.chartData} options={barOptions}
        />
      </div>
    </div>
  )
};

export default Graph;