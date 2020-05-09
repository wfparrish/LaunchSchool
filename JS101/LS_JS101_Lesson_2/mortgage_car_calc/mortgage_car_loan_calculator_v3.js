const yaml = require('js-yaml');
const fs = require('fs');

let config = '';
try {
  config = yaml.safeLoad(fs.readFileSync('mort_car_loan_calc.yaml', 'utf8'));
} catch (e) {
  console.log(e);
}

let loanAmt = 0;
let apr = 0;
let years = 0;
let repeat = '';


function getUserNumInput(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  number = validateNumber(number);
  return number;
}

function getRepeatStrInput(prompt) {
  let readlineSync = require('readline-sync');
  let letter = readlineSync.question(prompt);
  return letter;
}


function calculatePayment (loanAmt, apr, years) {
  apr *= .01;
  let months = years * 12;
  let paymentAmt = 0;
  let monthInterest = (apr / months) * years;
  paymentAmt = loanAmt * (monthInterest /
    (1 - Math.pow((1 + monthInterest),(-months))));
    return paymentAmt;
  }
  
  function displayPayment (paymentAmt) {
    console.log(`${config.monthly} ${paymentAmt.toFixed(2)}`);
  }

  function validateNumber(number) {
    while (Number.isNaN(Number(number)) || 
      (Number.isInteger(Number(number)) === false) ||
      number <= 0) {
      number = getUserNumInput(`${config.wholeNum} `);
    }
    return Number(number);
  }
  
  function validateRepeat(repeat) {
    repeat = String(repeat).toLowerCase();
    while (repeat) {
      if ((repeat === 'y') || (repeat === 'n')) {
        return repeat;
      } else {
        repeat = getRepeatStrInput(`${config.repeater} `);
      }
    }
  }
  
  function paymentCalc() {
  do {
    loanAmt = getUserNumInput(`${config.loanAmount} `);
    apr = getUserNumInput(`${config.aprate} `);
    years = getUserNumInput(`${config.yearsLoan} `);
    paymentAmt = calculatePayment(loanAmt, apr, years);
    displayPayment(paymentAmt);
    repeat = getRepeatStrInput(`${config.anotherCalc} ${config.repeater} `);
    repeat = validateRepeat(repeat);
      if (repeat === 'y') {
        continue;
      } if (repeat === 'n') {
        return `${config.goodbye}`;
      } else {
        return `${config.goodbye}`;
      }
   } while (repeat)
  }

  


console.log(paymentCalc());


//----------------------------------------------------------------------

/*  Additions requested by Srdan Coric(TA)
0. Define my error with more precise language
1. Add a check for whole numbers
2. Add tighter user validation
3. Simplify my functions, break them into other functions
4. Asked me to use the code I have in a new way.
5. Asked me to learn what a yml file is
*/

//----------------------------------------------------------------------

/*
1. Add a check for whole numbers

Understanding the problem

-input - number entered into the console
-output
  -the entered number, verified as a whole number, -or-
  -a error message with a request to enter a whole number
-rules/requirements
  -assume the user will perform the rounding of any decimal values

Example

loanAmt = validate(loanAmt);  //loanAmt is returned and thus a whole number
loanAmt = validate(loanAmt);  // 'Enter a valid numeric value greater than 0. '

Data Structures/Control Structures
-input - number
-output 
  -number
  -string
-rules/requirements
  -if statement
  -a loop structure

Algorithm(plain english)

1. Determining if a number is a whole number

-define a function that receives a number as an argument (num)
-create a looping condition
-do divide num by 2 until
  -if equal to 1
    -validation is complete, num is a whole number
  -else if equal to an odd prime number
    -validation is complete, num is a whole number
  -else
    -prompt the user to round the value to the nearest whole number

Supporting Algorithm
2. Determining if a number is odd prime: (brute force method)

-divide the number by a divisor in the whole number series, starting with 1
-loop while the divisor is less than or equal to num
  -if num MOD divisor === 0, it is not prime
  -if num/divisor not an integer, increment the divisor
-else the number is prime
-determine if the number is odd 
  -if num MOD 2 !== 1
    -the number is 2
  -else

*/

// The Number.isInteger() method determines whether the passed value is an integer.

/*

*/