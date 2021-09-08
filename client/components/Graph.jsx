import React, { useEffect, useState } from 'react';
import { register } from 'loql-cache';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql-cache/helpers/metrics.js';
import { Bar, Line } from 'react-chartjs-2';
import "chartjs-plugin-datalabels";

const Graph = ({ metricData }) => {
  // Comes from the summary function.
  const {
    cachedSpeeds,
    uncachedSpeeds
  } = metricData;

  const avgCachedSpeed = cachedSpeeds.reduce((a,b) => a+b) / cachedSpeeds.length;
  const avgUncachedSpeed = uncachedSpeeds.reduce((a,b) => a+b) / uncachedSpeeds.length;

  const timeSaving = Math.round((1 - (avgCachedSpeed / avgUncachedSpeed)) * 100)

  const uncachedBar = {
    chartData: {
      labels: ['Uncached Speed', 'Cached Speed'],
      datasets: [
        {
          type: 'bar',
          label: ['Uncached Speeds (ms)', 'Cached Speeds (ms)'],
          data: [avgUncachedSpeed, avgCachedSpeed],
          backgroundColor: ['rgba(171, 183, 183, 1)', 'rgba(75, 192, 192, 1)']
        }
      ],
    },
  };

  const barOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: 'black',
        align: 'end',
        anchor: 'end',
        font: { size: '14' }
      }
    },
    legend: {
      labels: {
          fontSize: 0
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        // gridLines: { display: false},
        display: false,
      },
    },
  };

  return (
    <div className="speedBar">
      <div className="graph">
        <Bar data={uncachedBar.chartData} options={barOptions} />
      </div>
      {avgCachedSpeed && 
        <div className="savings">
          <div id="metrics"> 
            <h3>{timeSaving}%</h3> 
            <h5>avg time savings</h5>
          </div>
        </div>
      }
    </div>
  );
};

export default Graph;
