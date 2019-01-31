import React, { Component } from 'react';
import SeatClass from './SeatClass';
//import SelectedSeatDisplay from './SelectedSeatDisplay';

class SeatingChart extends Component {
  constructor(props) {
    const seatContentSize = 30;
    const classSpaceBetween = 30;
    super(props);
    this.state = { selected: null };

    const { seatClasses } = this.props;

    const rowHeights = Object.values(seatClasses).sort((sc1, sc2) => sc1.firstRow - sc2.firstRow)
      .map(sc => (sc.rows.length * seatContentSize + seatContentSize + classSpaceBetween) + "px");

    this.topStyle = {
      display: 'grid',
      gridTemplateRows: rowHeights.join(' '),

    }
    this.cabinStyle = {
      justifyItems: 'center',
      alignItems: 'center',
      display: 'grid'
    }
    console.log("topStyle:", this.topStyle);
  }

  handleSelected = (seat) => {
    this.setState({ selected: seat });
  }

  render() {
    const { seatClasses } = this.props;
    let { selected } = this.state;
    console.log("seatClasses:", seatClasses);
    return (
      <div>
        {/* <div><SelectedSeatDisplay style={{ float: 'left' }} selectedSeat={this.state.selected} /></div> */}
        <div style={this.topStyle}>
          {Object.keys(seatClasses).sort((sc1, sc2) => seatClasses[sc1].firstRow - seatClasses[sc2].firstRow).map(sc =>
            <div style={this.cabinStyle} key={sc}>
              <SeatClass maxWidth={seatClasses.maxWidth} seatClassName={sc} seatClass={seatClasses[sc]} handleSelected={this.handleSelected} selected={selected} /></div>)}
        </div>
      </div>
    );
  }
}

export default SeatingChart;