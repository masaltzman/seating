import React, { Component, Fragment } from 'react';
import "./SeatRowHeader.css";

class SeatRowHeader extends Component {
  render() {
    const { columns } = this.props;
    const A = 'A'.charCodeAt(0);
    return (
    <Fragment>
      {columns.map((seatOrAisle, index) => seatOrAisle === 'S' 
      ? <span className='columnHeader' key={index}>{String.fromCharCode(index + A)}</span>
      : <span className='columnHeader' key={index}> </span>)  }
    </Fragment>
    );
  }
}

export default SeatRowHeader;