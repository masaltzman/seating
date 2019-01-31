import React, { Component, Fragment } from 'react';
import Seat from './Seat';
import Aisle from './Aisle';
import './SeatRow.css';

class SeatRow extends Component {

  render() {
    const { seatsArray, rowNum, handleSelected, selected } = this.props;
    return (
      <Fragment>
        {seatsArray.map((seat, index) => seat ? <Seat handleSelected={handleSelected} selected={selected} key={seat.class + '-' + seat.seat + '-' + seat.row} seat={seat} /> : <Aisle key={index + '-' + rowNum} rowNum={rowNum} />)}
      </Fragment>
    );
  }
}

export default SeatRow;