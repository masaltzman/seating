import React, { Component } from 'react';
import "./SeatRowHeader.css";

class SeatRowHeader extends Component {
  render() {
    const { columns } = this.props;
    const A = 'A'.charCodeAt(0);
    return (
    <div className='headerContainer'>
      {columns.map((seatOrAisle, index) => seatOrAisle === 'S' 
      ? <span className='header' key={index}>{String.fromCharCode(index + A)}</span>
      : <span className='header' key={index}> </span>)  }
    </div>
    );
  }
}

export default SeatRowHeader;