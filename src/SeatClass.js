import React, { Component } from 'react';
import SeatRow from './SeatRow';
import SeatRowHeader from './SeatRowHeader';
import './SeatClass.css';

class SeatClass extends Component {
  render() {
    const { seatClass, handleSelected, selected } = this.props;
    const { columns } = seatClass;
    return (
      <div className='cabin'>
        <SeatRowHeader columns={columns} />
      {seatClass.rows.map((r,i) => <SeatRow key={i} rowNum={i} seatsArray={r} handleSelected={handleSelected} selected={selected}/>)}
      </div>
    )
  }
}

export default SeatClass;