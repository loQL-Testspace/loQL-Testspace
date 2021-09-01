import React, { useEffect, useState } from 'react';
import { register } from 'loql';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql/Metrics.js';
import { Bar, Line } from 'react-chartjs-2';

const Graph = ({ metricData }) => {
  //hardcode data here
  const uncachedSpeed = 1200;
  const cachedSpeed = 200;

  //calculate time saving, in this example it's 83%
  const timeSaving = Math.round(
    ((uncachedSpeed - cachedSpeed) / uncachedSpeed) * 100
  );

  console.log('metricData in graph.jsx =', metricData);

  const { individualUncachedSpeeds, individualCachedSpeeds } = metricData;
  console.log('individualuncachedspeeds in graph =', individualUncachedSpeeds);

  const dummyIndividualUncachedSpeeds = [500, 500, 550, 570, 630, 700];
  const dummyIndividualCachedSpeeds = [5, 6, 6, 7, 4, 6];

  // bar chart setup
  const uncachedBar = {
    chartData: {
      labels: ['uncached'],
      datasets: [
        {
          label: 'Uncached Speeds',
          display: false,
          // data: individualUncachedSpeeds
          data: dummyIndividualUncachedSpeeds,
          backgroundColor: '#ff6361',
        },
      ],
    },
  };

  const barOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
      },
      x: {
        display: true,
        max: 1400,
      },
    },
     indexAxis: 'y',
  };

  // pie chart setup
  const totalTimeServer = dummyIndividualUncachedSpeeds.reduce((a, b) => a + b);
  const totalTimeCache = dummyIndividualCachedSpeeds.reduce((a, b) => a + b);

  return (
    <div>
      <div id="speedBar" style={{border: '1px black solid'}} >
        <Bar data={uncachedBar.chartData} options={barOptions} />
        <Bar data={uncachedBar.chartData} options={barOptions} />

      </div>
    </div>
  );
};

export default Graph;
