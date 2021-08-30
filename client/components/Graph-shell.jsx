import React from 'react';
import './Graph-shell.scss';

const Graph = ({ metricData }) => {
  //hardcoded data for now

  //scenario 1 -- no data fetched yet
  metricData = { uncachedSpeed: null, cachedSpeed: null };

  //scenario 2 -- uncached data fetched
  metricData = { uncachedSpeed: 1200, cachedSpeed: null };

  //scenario 3 -- both cached and uncached data fetched
  metricData = { uncachedSpeed: 1200, cachedSpeed: 200 };

  const { uncachedSpeed, cachedSpeed } = metricData;
  //calculate time saving, in this example it's 83%
  const timeSaving = Math.round(
    ((uncachedSpeed - cachedSpeed) / uncachedSpeed) * 100
  );

  return (
    <div className={'chart-container'}>
      <div className={'charts'}>
        <div>Fetched from server</div>

        <div className={'bar-container'}>
          <div className={'bar1'}>&nbsp;</div>
          <div>{uncachedSpeed / 1000} sec</div>
        </div>

        <div className={'cache-title'}>Fetched from cache</div>

        <div className={'bar-container'}>
          <div className={'bar2'}>&nbsp;</div>
          <div>{cachedSpeed / 1000} sec</div>
        </div>
      </div>

      <div className={'time-savings'}>
        <div className={'query-stat'}>{timeSaving}%</div>
        <div className={'query-stat-text'}>time savings</div>
      </div>
    </div>
  );
};

export default Graph;
