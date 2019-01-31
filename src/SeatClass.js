import React, { Component } from 'react';
import SeatRow from './SeatRow';
import SeatRowHeader from './SeatRowHeader';
import './SeatClass.css';

class SeatClass extends Component {
  constructor(props) {
    super(props);
    const { columns, rows } = props.seatClass;
    console.log("columns:", columns, props);
    this.cabinStyle = {
      display: 'grid',
      gridTemplateColumns: `repeat(${columns.length}, 30px)`,
      gridTemplateRows: `repeat(${rows.length}, 30px)`,

    }
  }
  render() {
    const { seatClass, handleSelected, selected } = this.props;
    const { columns } = seatClass;
//      <div className='cabin'>

    return (
      <div style={this.cabinStyle}>
        <SeatRowHeader columns={columns} />
      {seatClass.rows.map((r,i) => <SeatRow key={i} rowNum={i + seatClass.firstRow} seatsArray={r} handleSelected={handleSelected} selected={selected}/>)}
      </div>
    )
  }
}

export default SeatClass;