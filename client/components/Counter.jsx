import React, { useEffect, useState } from "react";

const Counter = ({ cacheTime, lastQueryData }) => {
  const [secondsRemaining, setSecondsRemaining] = useState(cacheTime / 1000);

  /* Count down from cacheTime
   * If the query data has a lastApiCall property...
   * Then set an interval to begin counting down from five.
   * If it does not have an api call property, the data was fetched from the server.
   */
  useEffect(() => {
    if(lastQueryData.lastApiCall) {
      const interval = setInterval(() => {
        setSecondsRemaining(counter => counter - 1 > 0 ? counter - 1 : 0)
      }, 1000);
      return () => {
        clearInterval(interval);
      }
    }
  }, [lastQueryData]);

  return (
    <>
      <div>Hello from the counter.</div>
        <p>{lastQueryData.lastApiCall ? `This query was fetched from cache. ${secondsRemaining ? `The cache will expire in ${secondsRemaining} seconds...` : "Cache expired!"}` : "This query was fetched from the server. The data in the cache did not exist, or was stale."}</p>
    </>
  )
}

export default Counter;
