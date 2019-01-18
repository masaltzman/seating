import React from 'react';
import './Seat.css';

function Seat(props) {
  const { seat, selected } = props;
  let classNames = 'seat ' + (seat.occupied === true ? 'occupied' : 'unoccupied');
  if (selected
    && seat.class === selected.class
    && seat.seat === selected.seat
    && seat.row === selected.row) {
      classNames += ' selected';
    }
  return (
    <span onClick={() => props.handleSelected(seat) } className={classNames} />
  );
}

export default Seat;