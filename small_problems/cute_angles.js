/*
Write a function that takes a floating point number representing an
angle between 0 and 360 degrees, and returns a string representing
that angle in degrees, minutes, and seconds.

You should use a degree symbol (˚) to represent degrees, a single
quote (') to represent minutes, and a double quote (") to represent
seconds. There are 60 minutes in a degree, and 60 seconds in a minute.


Understanding the Problem
-input - a floating point number representing an angle between 0 and 360
-output - a string representing the angle in degrees, minutes, and seconds
-rules/requirements
  -use a degree symbol for degrees
  -use a single quote for minutes
  -use a double quote for seconds
  -there is an implicit conversion formula that you need to find

Examples / Test Cases
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

Data Structures / Control Structures
-input - number
-output - string
-rules/requirements

Algorithm (plain english)
-declare a function dms(angle) that takes a float as an argument
-declare variables named degree, minutes, and seconds
-declare an empty array named degMinSecArr
-declare an empty string named degMinSecStr
-declare an empty number named degMinSecNum
-check the angle to see if it is a whole number
  -if it has no decimal portion, append 00'00" and log to the console
-if the angle is a integer with a decimal portion
  -convert the angle to a string and assign to degMinSecStr
  -split the angle on the '.' into degMinSecArr
  -shift degMinSecArr on degree
  -unshift degMinSecArr with '.'
  -join degMinSecArr on '' to degMinSecStr
  -empty degMinSecArr
  -convert degMinSecStr to number, multiply by 60, assign to degMinSecNum
  -convert degMinSecNum to string and split on '.' to degMinSecArr
  -shift degMinSecArr on minutes
  -unshift degMinSecArr with '.'
  -join degMinSecArr on '' to degMinSecStr
  -empty degMinSecArr
  -convert degMinSecStr to number and multiply by 60, assign to degMinSecNum
  -convert degMinSecNum to string and split on '.' to degMinSecArr
  -shift degMinSecArr on seconds
-pass the values back to the console using Unicode for the degree symbol
-call the function

Algorithm (pseudocode)
FUNCTION dms(angle) {
  SET degree
  SET minutes
  SET seconds
  SET degMinSecArr
  SET degMinSecStr
  SET degMinSecNum
  SET positionInDegMinSec

  degMinSecStr = String(angle)
  degMinSecArr = degMinSecStr.SPLIT('.');
  degree = degMinSecArr.SHIFT();
  degMinSecArr.UNSHIFT('.');
  degMinSecStr = degMinSecArr.JOIN('');
  degMinSecArr = [];
  degMinSecNum = Number(degMinSecStr * 60);
  degMinSecArr = String(degMinSecNum).SPLIT('.')
  minutes = degMinSecArr.SHIFT();
  degMinSecArr.UNSHIFT('.');
  degMinSecStr = degMinSecArr.JOIN('');
  degMinSecArr = [];
  degMinSecNum = Number(degMinSecStr * 60);
  degMinSecArr = String(degMinSecNum).SPLIT('.')
  seconds = degMinSecArr.SHIFT();
  positionInDegMinSec = `${degrees}${'\u00B0'}${minutes + "'"}${seconds + '"'}`;
  PRINT positionInDegMinSec;
}

*/

function dms(angle) {
  let degrees;
  let minutes;
  let seconds;
  let degMinSecArr;
  let degMinSecStr;
  let degMinSecNum;
  let positionInDegMinSec;

  determineDegrees();
  determineMinutes();
  determineSeconds();

  function determineDegrees() {
    degMinSecStr = String(angle);
    degMinSecArr = degMinSecStr.split('.');
    degrees = degMinSecArr.shift();
  }

  function determineMinutes() {
    degMinSecArr.unshift('.');
    degMinSecStr = degMinSecArr.join('');
    degMinSecArr = [];
    degMinSecNum = Number(degMinSecStr * 60.0);
    degMinSecArr = String(degMinSecNum).split('.');
    minutes = degMinSecArr.shift();
    if (minutes === 'NaN') {
      minutes = '00';
    }
  }
  
  function determineSeconds() {
    degMinSecArr.unshift('.');
    degMinSecStr = degMinSecArr.join('');
    degMinSecArr = [];
    degMinSecNum = Number(degMinSecStr * 60.0);
    degMinSecArr = String(degMinSecNum).split('.');
    seconds = degMinSecArr.shift();
    if (seconds === 'NaN') {    //why 'NaN' and not NaN
      seconds = '00';
    }
  }

  positionInDegMinSec = `${degrees}${'\u00B0'}${minutes + "'"}${seconds + '"'}`;
  return positionInDegMinSec;
}

console.log(dms(7.15));
console.log(dms(287.91));

