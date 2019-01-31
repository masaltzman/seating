//const seats = require('./seats.json);
import seats from './seats.json';
console.log('number of seats:', seats.length);

const seatClasses = {};

seats.forEach((seat) => {
  // convert seat column letters to array indexes
  seat.seat = seat.seat.charCodeAt(0)- 'A'.charCodeAt(0);
  // convert rows to zero-based
  seat.row--;

  let seatClass = seatClasses[seat.class];
  if (!seatClass) {
    // create new seatClass if not already created
    seatClass = {rows: [], firstRow: 9999999, rowWidth: 0, columns: []};
    seatClasses[seat.class] = seatClass; 
  }

  // add seat to seatClass
  const rows = seatClass.rows;
  if (!rows[seat.row]) {
    rows[seat.row] = [];
  }

  rows[seat.row][seat.seat] = seat;

  // mark the column as a 'S'eat as opposed to an 'A'isle
  seatClass.columns[seat.seat] = 'S';


  // find the first row
  if (seat.row < seatClass.firstRow) {
    seatClass.firstRow = seat.row;
  }

  // find the width
  const width = Object.keys(seatClass.columns).length;
  if (width > seatClass.rowWidth) {
    seatClass.rowWidth = width;
  }
  if (width > seatClasses.maxWidth) {
    seatClasses.maxWidth = width;
  }
});


console.log('seatClasses:', Object.keys(seatClasses));
// post process the input 
Object.keys(seatClasses).forEach(scn => {
  console.log(scn, seatClasses[scn]);
  // mark the 'A'isles
  let {rows, columns, firstRow} = seatClasses[scn];
  rows.splice(0, firstRow);
  rows.forEach(row => {
    for (let i = 0; i < row.length; i++) {
      if (row[i] === undefined) {
        row[i] = null;
      }
    }
  })
  for (let i = 0; i < columns.length; i++) {
    if (!columns[i]) {
      columns[i] = 'A';
    }
  }
  console.log("columns for ", scn, columns);
});

export { seatClasses };
