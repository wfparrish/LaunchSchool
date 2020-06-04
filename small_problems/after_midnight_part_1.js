/*
The time of day can be represented as the number of minutes before or
after midnight. If the number of minutes is positive, the time is after
midnight. If the number of minutes is negative, the time is before
midnight.

Write a function that takes a time using this minute-based format and
returns the time of day in 24 hour format (hh:mm). Your method should
work with any integer input.

You may not use javascript's Date class methods.

Understanding the Problem
-input - number (positive or negative)
-output - string
-rules/requirements
  -write a function
  -return the time of day in 24 hour format (hh:mm)
  -calculate the time by adding or subtracting minutes from midnight
  -do not use Date class methods
  -use military time 
  -the method should work with any integer, positive or negative


Examples / Test Cases

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");
The tests above should log true.

Data Structures / Control Structures
-input - number
-output - string
-rules/requirements
  -looping structure to sum amount of hours
  -conditional statements to check special cases 
    -less than 60 minutes?
    -more than 24 hours?
    -negative or positive?

Algorithm (plain english)
-declare a function named timeOfDay() that takes minutes as argument
-declare a variable named totalMinutes
-declare a const named START_OF_THE_DAY
-declare a const named END_OF_THE_DAY
-declare a variable named minutesToCalc
-declare a variable named clockHours
-declare a variable named clockMinutes
-declare a variable named clockDisplay

-check to see if minutes is greater than 1440  
  -while true, subtract 1440 from minutes

-check to see if minutes is less than -1440
  -while true, add 1440 to minutes   

-if minutes is less than -60,
  -increment the value by 60
  -add 60 to totalMinutes
  -subtract totalMinutes from END_OF_THE_DAY
  -add minutes to the result of (END_OF_THE_DAY - totalMinutes)
   and assign the value to minutesToCalc
    -divide minutesToCalc by 60 and floor to get the clockHours
    -MOD minutesToCalc by 60 and floor to get the clockMinutes

-else if minutes is greater than -60 and less than 0
  -add END_OF_THE_DAY to minutes and assign the value to minutesToCalc
    -divide by 60 and floor to get the clockHours
    -MOD by 60 to get the clockMinutes

-else if minutes is greater than 0 and minutes is less than 60
  -add START_OF_THE_DAY to minutes and
    -divide by 60 and floor the result to get the clockHours
    -MOD by 60 to get the clockMinutes

-else minutes is greater than 60,
  -decrement the value by -60
  -subtract 60 from totalMinutes
  -add totalMinutes to END_OF_THE_DAY
  -subtract minutes from the result of(END_OF_THE_DAY + totalMinutes)
   and assign the value to minutesToCalc
    -divide minutesToCalc by 60 and floor to get the clockHours
    -MOD minutesToCalc by 60 to get the clockMinutes

-declare a helper function named presentClock()
  -in the body of presentClock()
    -divide minutesToCalc by 60 and floor to get the clockHours
    -MOD minutesToCalc by 60 to get the clockMinutes
    -return template literal
      -format the return using clockHours and clockMinutes
  

-assign clockDisplay a value using presentClock() helper method
-call the function timeOfDay()

Algorithm (pseudocode)
FUNCTION timeOfDay(minutes) {
  CONSTANT START_OF_THE_DAY = 0;
  CONSTANT END_OF_THE_DAY = 1440;
  SET totalMinutes = 0;
  SET minutesToCalc = 0;
  SET clockHours;
  SET clockMinutes;
  SET clockDisplay:

  WHILE (minutes > 1440) {
    minutes -= 1440;
  }

  WHILE (minutes < -1440) {
    minutes += 1440;
  }

  WHILE (minutes < -60) {
    minutes += 60;
    totalMinutes += 60;
    minutesToCalc = ((END_OF_THE_DAY - totalMinutes) + minutes);
    RETURN clockDisplay = presentClock();
  }

  WHILE (minutes > -60 && minutes < 0) {
    minutesToCalc = END_OF_THE_DAY + minutes;
    RETURN clockDisplay = presentClock();
  }

  WHILE (minutes >= 0 && minutes <= 60) {
    minutesToCalc = START_OF_THE_DAY + minutes;
    RETURN clockDisplay = presentClock();
  }

  WHILE (minutes > 60) {
    minutes -= 60;
    totalMinutes -=60
    minutesToCalc = ((END_OF_THE_DAY + totalMinutes) - minutes);
    RETURN clockDisplay = presentClock();
  }

  function presentClock() {
    clockHours = Math.FLOOR(minutesToCalc / 60);
    clockMinutes = Math.FLOOR(minutesToCalc % 60);
    RETURN `${clockHours}:${clockMinutes}`;
  }
}

*/

function timeOfDay(minutes) {
  const START_OF_THE_DAY = 0;
  const END_OF_THE_DAY = 1440;
  let totalMinutes = 0;
  let minutesToCalc = 0;
  let clockHours;
  let clockMinutes;
  let clockDisplay;

  while (minutes > 1440) {
    minutes -= 1440;
  }

  while (minutes < -1440) {
    minutes += 1440;
  }

  while (minutes > -1440 && minutes <= -60 ) {
    minutes += 60;
    totalMinutes += 60;
    minutesToCalc = ((END_OF_THE_DAY - totalMinutes) + minutes);
    return clockDisplay = presentClock();
  }

  while (minutes > -60 && minutes < 0) {
    minutesToCalc = END_OF_THE_DAY + minutes;
    clockDisplay = presentClock();
    return clockDisplay;
  }

  while (minutes >= 0 && minutes <= 60) {
    minutesToCalc = START_OF_THE_DAY + minutes;
    clockDisplay = presentClock();
    return clockDisplay;
  }

  while (minutes > 60) {
    minutes -= 60;
    totalMinutes += 60
    minutesToCalc = ((START_OF_THE_DAY + totalMinutes) + minutes);
    return clockDisplay = presentClock();
  }

  function presentClock() {
    clockHours = String(Math.floor(minutesToCalc / 60));
    clockMinutes = String(Math.floor(minutesToCalc % 60));
    if (clockHours.length < 2) {
      clockHours = '0' + clockHours;
    }
    if (clockMinutes.length < 2) {
      clockMinutes = '0' + clockMinutes;
    }

    return `${clockHours}:${clockMinutes}`;
  }
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");