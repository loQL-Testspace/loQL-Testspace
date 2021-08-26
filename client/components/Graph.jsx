import React , { useEffect, useState } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { Bar, Line } from 'react-chartjs-2'



const Graph = ({metricData}) => {
  
  console.log('metricData in graph.jsx =', metricData);
  
  const { individualUncachedSpeeds, individualCachedSpeeds } = metricData;
  console.log( 'individualuncachedspeeds in graph =', individualUncachedSpeeds);

  const dummyIndividualUncachedSpeeds = [500, 600, 550, 570, 630, 700];
  const dummyIndividualCachedSpeeds = [5, 6, 6, 7, 4, 6];

  // bar chart setup
  const uncachedBar = {
      labels: [],
      chartData : { 
        labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th', '8th', '9th', '10th'],
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
    title: {
      display: true,
      text: 'Time to retrieve from server vs. cache',
      fontSize: 25
    },
    maintainAspectRatio: true,
    legend: {display:true, position:'right'}
  }
  

  // pie chart setup
  const totalTimeServer = dummyIndividualUncachedSpeeds.reduce((a, b) => a+b);
  const totalTimeCache = dummyIndividualCachedSpeeds.reduce((a, b) => a+b);
  const speedPie = {
    labels: [],
    chartData : {
      labels: ['Time spent retrieving from server', 'Time spent retrieving from cache'],
      datasets: [
        totalTimeServer, totalTimeCache
      ],
      backgroundColor: [
        'rgba(220, 220, 220, 1)',
        'rgba(75, 192, 192, 1)'
      ]
    }
  }

  const doughnutOptions = {
    cutoutPercentage: 780,
    animation: {
      animateScale: true
    }
  }

  
  return (
    <div>
      <div id="speedBar">
        <Bar data={uncachedBar.chartData} options={barOptions}
        />
        {/* <button>test button</button> */}
      </div>
      {/* <div id="speedPie">
        <Doughnut data={speedPie.chartData} options={doughnutOptions}/>
      </div> */}
    </div>
  )
};

export default Graph;