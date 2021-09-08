import React, { useEffect, useState } from 'react';
import { register } from 'loql-cache';
import { avgDiff, uncahedAvg, cachedAvg, summary } from 'loql-cache/helpers/metrics.js';
import { Bar, Line } from 'react-chartjs-2';

const Graph = ({ metricData }) => {
  // Comes from the summary function.
  const {
    cachedSpeeds,
    uncachedSpeeds
  } = metricData;

  const avgCachedSpeeds = cachedSpeeds.reduce((a,b) => a+b) / cachedSpeeds.length;

  const longer =
    cachedSpeeds.length > uncachedSpeeds.length
      ? cachedSpeeds
      : uncachedSpeeds;
  let avgUncached = longer;
  let avgCached = longer;

  // avgUncached = avgUncached.map((e) => uncachedAverageTime);
  // avgCached = avgCached.map((e) => cachedAverageTime);

  const uncachedBar = {
    chartData: {
      labels: longer.map((_, i) => `${i}`),
      datasets: [
        {
          type: 'bar',
          label: 'Uncached Speeds (ms)',
          data: uncachedSpeeds,
        },
        {
          type: 'bar',
          label: 'Cached Speeds (ms)',
          data: cachedSpeeds,
          backgroundColor: 'rgba(75, 192, 192, 1)',
        },
        // {
        //   type: 'line',
        //   label: 'Average Uncached Speeds (ms)',
        //   data: avgUncached,
        // },
        // {
        //   type: 'line',
        //   label: 'Average Cached Speeds (ms)',
        //   data: avgCached,
        //   backgroundColor: 'rgba(75, 192, 192, 1)',
        // },
      ],
    },
  };

  const barOptions = {
    title: {
      display: true,
      text: 'Time to retrieve from server vs. cache',
      fontSize: 25,
    },
    maintainAspectRatio: true,
    legend: { display: true, position: 'right' },
  };

  const uncachedBar2 = {
    chartData: {
      labels: [
        'Get Trainer Query',
        'Get Trainer 2',
        'Simple Pokemon Query',
        'Nested Pokemon Query',
      ],
      datasets: [
        {
          label: 'Uncached Speeds',
          data: uncachedSpeeds,
        },
        {
          label: 'Cached Speeds',
          data: cachedSpeeds,
          backgroundColor: 'rgba(75, 192, 192, 1)',
        },
      ],
    },
  };

  const barOptions2 = {
    title: {
      display: true,
      text: 'Time to retrieve from server vs. cache',
      fontSize: 25,
    },
    maintainAspectRatio: true,
    legend: { display: true, position: 'right' },
  };

  return (
    <div>
      <div id="speedBar">
        <Bar data={uncachedBar.chartData} options={barOptions} />
        {/* <Bar data={uncachedBar2.chartData} options={barOptions2} /> */}
      </div>
    </div>
  );
};

export default Graph;
