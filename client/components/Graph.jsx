import React, { useEffect, useState } from 'react';
import { register } from 'loql-cache';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql-cache/helpers/metrics.js';
import { Bar, Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const Graph = ({ metricData }) => {
  console.log(metricData);
  const { cachedSpeeds, uncachedSpeeds } = metricData;
  const avgCachedSpeed = cachedSpeeds.reduce((a, b) => a + b, 0) / cachedSpeeds.length;
  const avgUncachedSpeed = uncachedSpeeds.reduce((a, b) => a + b, 0) / uncachedSpeeds.length;
  const timeSaving = Math.round((1 - avgCachedSpeed / avgUncachedSpeed) * 100);

  const uncachedBar = {
    chartData: {
      labels: ['Uncached Speed', 'Cached Speed'],
      datasets: [
        {
          type: 'bar',
          label: ['Uncached Speeds (ms)', 'Cached Speeds (ms)'],
          data: [avgUncachedSpeed, avgCachedSpeed],
          backgroundColor: ['rgba(171, 183, 183, 1)', 'rgba(75, 192, 192, 1)'],
        },
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
        font: { size: '14' },
      },
    },
    legend: {
      labels: {
        fontSize: 0,
      },
    },
    responsive: true,
    maintainAspectRatio: true,
    indexAxis: 'y',
    scales: {
      x: {
        display: false,
      },
    },
  };

  return (
    <div className="speedBar">
      <div className="graph">
        <Bar data={uncachedBar.chartData} options={barOptions} />
      </div>
      {avgCachedSpeed && (
        <div className="savings">
          <div id="metrics">
            <h4>{timeSaving}%</h4>
            <h4>time savings</h4>
          </div>
        </div>
      )}
    </div>
  );
};

export default Graph;
