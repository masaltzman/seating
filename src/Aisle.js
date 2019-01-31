import React from 'react';
import './Aisle.css';

function Aisle(props) {
  const { rowNum } = props;
  return (
    <span className='aisle'>{rowNum+1}</span>
  );
}

export default Aisle;