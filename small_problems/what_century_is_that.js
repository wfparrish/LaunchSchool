/*
Write a function that takes a year as input and returns the century.
The return value should be a string that begins with the century number,
and ends with 'st', 'nd', 'rd', or 'th' as appropriate for that number.

New centuries begin in years that end with 01.
So, the years 1901 - 2000 comprise the 20th century.

Understanding the Problem
-input - a year as a base 10 number
-output - string that gives the century the input occurs in
-rules/requirements
  -the return value should begin with the century number
  -the return value should end with 'st', 'nd', 'rd', or 'th'
    as appropriate
-special cases
  -new centuries begin in years that end with 01
  -11, 12, and 13 for each century use 'th'

Examples
century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"

Data Structures/Control Structures
-input - number
-output - string
-rules/requirements
  -if statement to determine string to append to century number
  -object to hold key/values for the century string

Algorithm (plain english)
-create a hash table for the appendable string values
-declare a function century(), that takes one parameter
-if the value is <= 100, return 1st
-if the value is > 100,
  -perform MOD 100 on the argument
    -if the remainder is equal to 0
      -divide the number by 100
      -store the value of the operation as century_num
    -if the remainder is > 0
      -divide the number by 100
      -floor the result
      -add 1 to the result
      -store the value of the operation as century_num
-convert century_num to a string
-search the hash table for the value in the rightmost position
  in the string

  ex. "724" - search hash table for value associated with "4"
-append the value found to the century_num
-return century_num

Algorithm (pseudocode)
SET TABLE = {
  "1": "st",
  "2": "nd",
  "3": "rd",
  "4": "th",
  "5": "th",
  "6": "th",
  "7": "th",
  "8": "th",
  "9": "th",
  "0": "th"
}

FUNCTION century(year) {
  SET lastDigit = "";
  SET century_num = 0;
  IF (year <= 100) {
    century_num = '1st';
    RETURN century_num;
  }

  ELSE {
    SET remainder = 0;
    remainder = year MOD 100;
    IF (remainder === 0) {
      century_num = year / 100;
    }

    IF (remainder > 0) {
      century_num = NUMBER.FLOOR(year / 100) + 1;
    }
  }
  century_num = STRING(century_num);

  FOR (SET prop in table) {
    IF (table.HASPROPERTY(century_num[century_num.length - 1]) {
      century_num = century_num + prop;
    }
  }
  RETURN century_num;
}
*/

let table = {
  1: 'st',
  2: 'nd',
  3: 'rd',
  4: 'th',
  5: 'th',
  6: 'th',
  7: 'th',
  8: 'th',
  9: 'th',
  0: 'th',
  11: 'th',
  12: 'th',
  13: 'th'
};

function century(year) {
  let centuryNum = 0;
  let remainder = 0;
  if (year <= 100) {
    centuryNum = '1st';
    return centuryNum;
  } else {
    remainder = year % 100;

    if (remainder === 0) {
      centuryNum = year / 100;
    }
    if (remainder > 0) {
      centuryNum = Math.floor(year / 100) + 1;
    }
  }

  centuryNum = String(centuryNum);

    if (centuryNum.length <= 2) {
      if (centuryNum === '11') {
        return '11th';
      } if (centuryNum === '12') {
        return '12th';
      } if (centuryNum === '13') {
        return '13th';
      } else {
      for (let prop in table) {
        if (prop === centuryNum[centuryNum.length - 1]) {
          centuryNum += table[prop];
        }
      }
      return centuryNum;
    }
  }

  if (centuryNum.length > 2) {
    let arr1 = []
    arr1 = centuryNum.split('');
    let digitCheck = arr1.slice(arr1.length - 2, arr1.length);
    digitCheck = digitCheck.join('');
      if (digitCheck === '11') {
        return centuryNum + 'th';
      } if (digitCheck === '12') {
        return centuryNum + 'th';
      } if (digitCheck === '13') {
        return centuryNum + 'th';
      }
    for (let prop in table) {
      if (prop === centuryNum[centuryNum.length - 1]) {
        centuryNum += table[prop];
      }
    }
    return centuryNum
  }
  
}


console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"
console.log(century(14501));       // "146th"