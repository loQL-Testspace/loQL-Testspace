import React, { useEffect, useState } from 'react';
import './QueryModal.scss';

const QueryModal = () => {

  const queryString = `
    query {
      characters {
        results {
          name
          species
        }
      }
    }
  `
  const splitted = queryString.valueOf().split('\n');

  return (
    <div className='modal'>
      <div className='queryText'>
        {queryString}
        {splitted}
      </div>
    </div>
  );
}


export default QueryModal;
