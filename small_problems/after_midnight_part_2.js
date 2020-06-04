/*
As seen in the previous exercise, the time of day can be
represented as the number of minutes before or after midnight.
If the number of minutes is positive, the time is after
midnight. If the number of minutes is negative,
the time is before midnight.

Write two functions that each take a time of day in
24 hour format, and return the number of minutes before
and after midnight, respectively. Both functions should
return a value in the range 0..1439.

You may not use javascript's Date class methods.

Understanding the Problem
-input - a string in 24 hour format
-output - a number representing minutes before or after midnight
-rules/requirements
  -write two functions that each take a time of day(24 hour format)
  -each returns the number of minutes before/after midnight
  -the range of numbers returned will be between 0..1439
  -do not use JS Date class methods

Examples:

console.log(afterMidnight("00:00") === 0);    //true
console.log(beforeMidnight("00:00") === 0);   //true
console.log(afterMidnight("12:34") === 754);  //true
console.log(beforeMidnight("12:34") === 686); //true
console.log(afterMidnight("24:00") === 0);    //true
console.log(beforeMidnight("24:00") === 0);   //true

Data Structures / Control Structures
-input - string
-output - number
-rules/requirements
  -we will use methods of the string and array class
  -implicit looping
  -conditional statement will be used for edge case hours === 24

Algorithm1 (plain english)
-declare an function afterMidnight() that takes a string stringArg
-declare a variable called hoursAsMinutes
-declare a variable called minutes
-declare a variable named totalMinutes
-split stringArg into an array arrayArg on :
-for arrayArg[0]
  -convert the array[0] value into a number
  -if arrayArg[0] is equal to 24, default the program to return 0
  -else multiply arrayArg[0] by 60 and store the result in hoursAsMinutes
-for arrayArg[1]
  -convert the array[1] value into a number
  -store array[1] in minutes
-sum hoursAsMinutes and minutes and store the result in totalMinutes
-return totalMinutes
-call the function

Algorithm2 (plain english)
-declare a function beforeMidnight() that takes an stringArgToo
-declare a constant named NUM_MIN_DAY = 1440
-call afterMidnight() and pass it stringArgToo
-subtract totalMinutes from NUM_MIN_DAY
 and store result in beforeMidnightAsMinutes
-return beforeMidnightAsMinutes
-call the function

Algorithm1 (pseudocode)
FUNCTION afterMidnight(stringArg) {
  SET hoursAsMinutes;
  SET minutes;
  SET totalMinutes;
  SET arrayArg;
  arrayArg = stringArg.SPLIT(":");
  arrayArg[0] = NUMBER(arrayArg[0]);
  if (arrayArg[0] === 24) {
    hoursAsMinutes = 0;
  } else {
    hoursAsMinutes = arrayArg[0] * 60;
  }
  arrayArg[1] = Number(arrayArg[1]);
  minutes = arrayArg[1];
  totalMinutes = hoursAsMinutes and minutes;
  return totalMinutes;
}

PRINT(afterMidnight("00:00") === 0);    //true
PRINT(afterMidnight("12:34") === 754);  //true
PRINT(afterMidnight("24:00") === 0);    //true


Algorithm2 (pseudocode)
FUNCTION beforeMidnight(stringArgToo) {
  CONST NUM_MIN_DAY = 1440;
  SET totalMinutes;
  SET beforeMidnightAsMinutes;
  totalMinutes = afterMidnight(stringArgToo);
  beforeMidnightAsMinutes = NUM_MIN_DAY - totalMinutes;
  RETURN beforeMidnightAsMinutes;
}

PRINT(beforeMidnight("00:00") === 0);   //true
PRINT(beforeMidnight("12:34") === 686); //true
PRINT(beforeMidnight("24:00") === 0);   //true

*/

function afterMidnight(stringArg) {
  let hoursAsMinutes;
  let minutes;
  let totalMinutes;
  let arrayArg;
  arrayArg = stringArg.split(':');
  arrayArg[0] = Number(arrayArg[0]);
  if (arrayArg[0] === 24) {
    hoursAsMinutes = 0;
  } else {
    hoursAsMinutes = arrayArg[0] * 60;
  }
  arrayArg[1] = Number(arrayArg[1]);
  minutes = arrayArg[1];
  totalMinutes = hoursAsMinutes + minutes;
  return totalMinutes;
}

function beforeMidnight(stringArgToo) {
  const NUM_MIN_DAY = 1440;
  let totalMinutes;
  let beforeMidnightAsMinutes;
  if (stringArgToo === "00:00" || stringArgToo === "24:00" ) {
    beforeMidnightAsMinutes = 0;
    return beforeMidnightAsMinutes;
  } else {
    totalMinutes = afterMidnight(stringArgToo);
    beforeMidnightAsMinutes = NUM_MIN_DAY - totalMinutes;
    return beforeMidnightAsMinutes;
  }
}



console.log(afterMidnight("00:00") === 0);    //true
console.log(afterMidnight("12:34") === 754);  //true
console.log(afterMidnight("24:00") === 0);    //true
console.log(beforeMidnight("00:00") === 0);   //true
console.log(beforeMidnight("12:34") === 686); //true
console.log(beforeMidnight("24:00") === 0);   //true
