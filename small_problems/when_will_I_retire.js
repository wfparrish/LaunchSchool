/*
Build a program that logs when the user will retire and how
many more years the user has to work until retirement.

Understanding the Problem
-input
  -the current age of the user
  -the age the user would like to retire
-output
  -the current year
  -the year the user will retire
  -the amount of time in years the user must wait
-rules/requirements
  -the program will log to the console:
    -when the user will retire
    -how long the user must wait until retirement

Examples
What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

Data Structures / Control Structures
-input - number
-output - string
-rules/requirements

Algorithm (plain english)
-Declare a function howLong
-declare a variable named workYrs
-declare a variable named retireYear
-declare a variable named currYear
-declare an array named arrYear
-declare a variable named date
-use the Date object to create an instance of the current date
-split the date string into an array
-retrieve the year from the array and convert it to a number
  -assign the value to currYear
-subtract currAge from retireAge and assign value to workYrs
-sum currYears and workYrs and assign value to retireYear
-create the return statement string with variables currYear, retireYear
 and workYrs:
  -return currYear
  -return retireYear
  -return workYrs
-call the function

Algorithm (pseudocode)
SET readline = REQUIRE('readlinesync')
currAge = readline.question('What is your age?)
retireAge = readline.question('At what age would you like to retire?)
FUNCTION howLong() {
  SET workYrs = 0;
  SET retireYear = 0;
  SET currYear = '';
  SET arrYear = [];
  SET date = new Date();
  SET arrYear = date.SPLIT(' ');
  currYear = NUMBER(arrYear[3]);
  workYrs = retireAge - currAge
  retireYear = currYears + workYrs
  RETURN ` It's {currYear}. You will retire in {retireYear} \n
          You have only {workYrs} years of work to go!`;
}
howLong();

*/
let readline = require('readline-sync');
let currAge = readline.question('What is your age? ');
let retireAge = readline.question('At what age would you like to retire? ');

function howLong() {
  let workYrs = 0;
  let retireYear = 0;
  let currYear = '';
  let arrYear = [];
  let date = new Date();
  arrYear = String(date).split(' ');
  currYear = Number(arrYear[3]);
  workYrs = retireAge - currAge;
  retireYear = Number(currYear) + workYrs;
  return `It's ${currYear}. You will retire in ${retireYear} \nYou have only ${workYrs} years of work to go!`;
}

console.log(howLong());


// const moonLanding = new Date('July 20, 69 00:20:18');

// console.log(moonLanding.getFullYear());
// expected output: 1969

// https://tecadmin.net/get-current-date-time-javascript/