import React, { useEffect, useState } from 'react';
import './QueryModal.scss';

const QueryModal = ({ queryInfo }) => {

  return (
    <div className='modal'>
      <div className='preText'>
        GraphQL Query:
      </div>
      <div className='queryText'>
        {queryInfo}
      </div>
    </div>
  );
}


export default QueryModal;
