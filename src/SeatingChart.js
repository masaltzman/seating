import React, { Component } from 'react';
import SeatClass from './SeatClass';
import './SeatingChart.css';

class SeatingChart extends Component {
  constructor(props) {
    super(props);
    this.state = {selected: null};
  }

  handleSelected = (seat) => {
    this.setState({selected: seat});
  }

  render() {
    const { seatClasses } = this.props;
    let { selected } = this.state;
    console.log(seatClasses);
    return (
      <div className='top'>
      {Object.keys(seatClasses).sort((sc1, sc2) => seatClasses[sc1].firstRow - seatClasses[sc2].firstRow).map(sc => 
      <div key={sc}>
      <SeatClass maxWidth={seatClasses.maxWidth} seatClassName={sc} seatClass={seatClasses[sc]} handleSelected={this.handleSelected} selected={selected}/></div>)}
      </div>
    );
  }
}

export default SeatingChart;