/*
In the modern era under the Gregorian Calendar,
leap years occur in every year that is evenly divisible by 4,
unless the year is also divisible by 100.

If the year is evenly divisible by 100, then it is not a leap year,
unless the year is also evenly divisible by 400.

Assume this rule is valid for any year greater than year 0.
Write a function that takes any year greater than 0 as input,
and returns true if the year is a leap year, or false if it is not a leap year.

//-------------------------------------------------------------

The British Empire adopted the Gregorian Calendar in 1752,
which was a leap year.

Prior to 1752, they used the Julian Calendar. Under the Julian Calendar,
leap years occur in any year that is evenly divisible by 4.

Using this information, update the function from the previous exercise
to determine leap years both before and after 1752.

//-----------------------------------------------------------------

Understanding the Problem:
-input - number greater than zero
-output - boolean value
-rules/requirements
  -if a year is evenly divisible by 4,
   the year should be checked for other leap year properties
  -if a year evenly divisible by 4 is also evenly divisible by 100,
   it is not a leap year
  -if a year evenly divisible by 4 is also divisible by both 100 AND 400,
   it is a leap year
  -if a year is less than 1752 AND divisible by 4, it is a leap year

Examples/Test Cases:
isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true

Data Structures
-input - number
-output - boolean
rules/requirements
  -if statement logic
  -modulo operation rules
    -if divisor is larger than dividend the dividend is returned
    -if divisor is smaller than dividend the remainder is returned
    -divisor MOD 1 is always 0
    -divisor MOD 0 is undefined

Algorithm
-Declare a function that takes on argument
-if year is < 1752 AND MOD 4 equals 0 return true
- else if the year MOD 400 equals 0 return true
  -else if the year MOD 400 > 0
    -if the year MOD 100 equals 0 return false
    -else if the year MOD 100 > 0
      -if the year MOD 4 equals 0 return true
      -else return false

Formal Psuedocode

FUNCTION isLeapYear(year)
  IF year < 1752 AND MOD 4 === 0
    return true
  ELSE IF year MOD 400 === 0
    return true
  ELSE IF year MOD 400 > 0
    IF year MOD 100 === 0
      return false
    ELSE IF year MOD 100 > 0
      IF year MOD 4 === 0
        return true
      ELSE return false
*/

function isLeapYear(year) {
  if (year < 1752 && year % 4 === 0) {
    return true;
  } else if (year % 400 === 0) {
    return true;
  } else if (year % 400 > 0) {
    if (year % 100 === 0) {
      return false;
    } else if (year % 100 > 0) {
      if (year % 4 === 0) {
        return true;
      }
    }
  }
  return false;
}

console.log(isLeapYear(2016));      // true
console.log(isLeapYear(2015));      // false
console.log(isLeapYear(2100));      // false
console.log(isLeapYear(2400));      // true
console.log(isLeapYear(240000));    // true
console.log(isLeapYear(240001));    // false
console.log(isLeapYear(2000));      // true
console.log(isLeapYear(1900));      // false
console.log(isLeapYear(1752));      // true
console.log(isLeapYear(1700));      // true
console.log(isLeapYear(1));         // false
console.log(isLeapYear(100));       // true
console.log(isLeapYear(400));       // true