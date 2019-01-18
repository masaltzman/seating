import React from 'react';
import './Aisle.css';

function Aisle(props) {
  const { rowNum } = props;
  return (
    <span className='aisle'>{rowNum}</span>
  );
}

export default Aisle;