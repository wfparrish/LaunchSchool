let rlSync = require('readline-sync');

let length = rlSync.question("Enter the length of the room in meters. => ");
let width = rlSync.question("Enter the width of the room in meters. => ");
const SQRFEETCONST = 10.7639;

function calcRoomArea(len, wid) {
  let sqrMeters = len * wid;
  let sqrFeet = len * wid * SQRFEETCONST;
  console.log(`The area of the room is ${sqrMeters} square meters ${"(" + sqrFeet.toFixed(2) + " square feet)."}`);
}

calcRoomArea(length, width);