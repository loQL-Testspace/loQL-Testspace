import React, { useEffect, useState } from 'react';
import { register } from 'loql-cache';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql-cache/helpers/metrics.js';
import { Bar, Line } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import './Graph.scss';

const Graph = ({ metricData }) => {
  // Comes from the summary function.
  const { cachedSpeeds, uncachedSpeeds } = metricData;

  const avgUncachedSpeed = Math.round(
    uncachedSpeeds.reduce((a, b) => a + b, 0) / uncachedSpeeds.length
  );
  const avgCachedSpeed = Math.round(cachedSpeeds.reduce((a, b) => a + b, 0) / cachedSpeeds.length);

  const countUncached = uncachedSpeeds.length;
  const countCached = cachedSpeeds.length;

  const timeSaving = Math.floor((1 - avgCachedSpeed / avgUncachedSpeed) * 100);

  const dataBar = {
    chartData: {
      labels: [`From Server (${countUncached})`, `From Cache (${countCached})`],
      datasets: [
        {
          type: 'bar',
          label: ['Uncached Speeds (ms)', 'Cached Speeds (ms)'],
          data: [avgUncachedSpeed, avgCachedSpeed],
          backgroundColor: ['#ffb9a7', 'rgba(75, 192, 192, 1)'],
          // backgroundColor: ['rgba(171, 183, 183, 1)', 'rgba(75, 192, 192, 1)'],
        },
      ],
    },
  };

  const barOptions = {
    plugins: {
      datalabels: {
        display: true,
        color: '#5f5857', // Color of the numbers
        align: 'right',
        offset: 10,
        anchor: 'start',
        font: { size: '18', fontFamily: 'Roboto' },
        formatter: function (value) {
          if (isNaN(value)) return '';
          return value.toLocaleString() + ' ms';
        },
      },
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: {
        display: false,
      },
      y: {
        ticks: {
          color: '#5f5857',
          font: { size: '15', fontFamily: 'Roboto' },
        },
      },
    },
  };

  return (
    <div className="speedBar">
      <div className="graph">
        <Bar data={dataBar.chartData} options={barOptions} />
      </div>
      <div className="savings">
        <div id="metrics">
          {avgCachedSpeed ? (
            <div id="percentage">{timeSaving}%</div>
          ) : (
            <div id="percentage">0%</div>
          )}
          <div id="savingsText">avg time savings</div>
        </div>
      </div>
    </div>
  );
};

export default Graph;
