import React from 'react';
import './Graph-shell.scss';
import { Bar } from 'react-chartjs-2';

const Graph = ({ metricData }) => {
  //hardcoded data for now
  //scenario 1 -- no data fetched yet
  metricData = { uncachedSpeed: null, cachedSpeed: null };
  //scenario 2 -- uncached data fetched
  metricData = { uncachedSpeed: 1200, cachedSpeed: null };
  //scenario 3 -- both cached and uncached data fetched
  metricData = { uncachedSpeed: 1200, cachedSpeed: 200 };

  const { uncachedSpeed, cachedSpeed } = metricData;
  let timeSaving = null;
  

  //calculate time saving, in this example it's 83%
  if(cachedSpeed!==null){
   timeSaving = Math.round(
    ((uncachedSpeed - cachedSpeed) / uncachedSpeed) * 100
  );}

  // bar chart setup
  const uncachedBar = {
    chartData: {
      labels: ['uncached'],
      datasets: [
        {
          barThickness: 20,
          display: true,
          data: [uncachedSpeed],
          backgroundColor: '#c56464',
        },
      ],
    },
  };

  const cachedBar = {
    chartData: {
      labels: ['uncached'],
      datasets: [
        {
          display: true,
          barThickness: 20,
          data: [cachedSpeed],
          backgroundColor: '#71a582',
        },
      ],
    },
  };


  const barOptions = {
    layout: { padding: 0},
    plugins: {
      legend: {
        display: false,
      },
       tooltip: { enabled: false },
    },
    scales: {
      y: {
        display: false,
      },
      x: {
        display: false,
        max: 2000,
      },
    },
     indexAxis: 'y',
     maintainAspectRatio: false,

  };



  return (
    <div className={'chart-container'}>
      <div className={'charts'}>


      {uncachedSpeed
        ? 

 <><div>Fetched from server</div>
        <div className={'bar-container'}>
         <div className={'bar'}> <Bar data={uncachedBar.chartData} options={barOptions}  /></div>

          <div>&nbsp;{uncachedSpeed / 1000} sec</div>
        </div></>
        : <></>
      }


        {cachedSpeed
        ?        <><div className={'cache-title'}>Fetched from cache</div>
        <div className={'bar-container'}>
        <div className={'bar'}> <Bar data={cachedBar.chartData} options={barOptions}  /></div>

          <div>&nbsp;{cachedSpeed / 1000} sec</div>
        </div></>
        : <></>
      }

 
      </div>

      {timeSaving
        ?
        <>
      <div className={'time-savings'}>
        <div className={'query-stat'}>{timeSaving}%</div>
        <div className={'query-stat-text'}>time savings</div>
      </div></>
      : <></>
}

    </div>
  );
};

export default Graph;
