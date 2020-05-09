/*
Build a mortgage calculator (or car payment calculator -- it's the same thing).
You'll need three pieces of information:

-the loan amount
-the Annual Percentage Rate (APR)
-the loan duration

From the above, you'll need to calculate the following two things:

-monthly interest rate
-loan duration in months

You can use the following formula:
let m = p * (j / (1 - Math.pow((1 + j),(-n)))); where,
m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

Try to print the payment amount as a dollar and cents amount,
e.g., $123.45 or $371.00.

//--------------------------------------------------

Understanding the Problem
-input
 -the loan amount
 -the Annual Percentage Rate (APR)
 -the loan duration
-output
 -the monthly payment amount
-rules/requirements
 -the three pieces of information for the method will be given by the user
 -the loan duration will be entered in years
 -assume the APR is equal to the annual interest rate
 -format the output to use $ and . with 2 places

 Examples:

 paymentCalc(1,200, .1, 1)  //output $105.50
 paymentCalc(1,200, .1, 2)  //output $55.37

 DataStructures / Control Structures
 -input - number
 -output - number

 Algorithm (plain english)
 -declare three variables and read their values from the console
  -the loan amount
  -the annual percentage rate
  -the loan duration in years
 -multiply the apr by .01 and store the result in apr
 -declare a variable named months
 -multiply the duration by 12 and store the result in months
 -declare a variable for the monthly payment (paymentAmt)
 -declare a variable for the monthly interest (mnInterest)
 -divide apr by the months times the years of the loan
  and store the result in mInterest
 -use the given amortization formula to determine
  the value of the monthly payment
 -format the value of the monthly payment in US currency with two decimal places
 -return the monthly payment
 -call the function

 Algorithm (pseudocode)
SET loanAmt <-- read from console
 SET apr <-- read from console
 SET years <-- read from console
 FUNCTION paymentCalc() {
  apr = apr * .01;
  SET months = years * 12;
  SET result = 0;
  SET mnInterest = (apr / months) * years
  SET paymentAmt = 0;
  paymentAmt = loanAmt * (mnInterest /
    (1 - Math.pow((1 + mnInterest),(-duration))))
  RETURN paymentAmt = ${`'$'+'paymentAmt.toFixed(2)'`}
 }


*/


function getInput(prompt) {
  let readlineSync = require('readline-sync');
  let number = readlineSync.question(prompt);
  return number;
}

function validate(number) {
  while (Number.isNaN(Number(number)) ||
    number <= 0 ||
    number.trim() === '') {
    number = getInput('Enter a valid numeric value. ');
  }
  return Number(number);
}


function paymentCalc() {
  debugger;
  let loanAmt = 0;
  let apr = 0;
  let years = 0;
  let repeat = '';
  do {
    loanAmt = getInput('Enter a loan amount. Round to the nearest dollar. $');
    loanAmt = validate(loanAmt);
    apr = getInput('Enter an APR. No decimal numbers. ');
    apr = validate(apr);
    years = getInput('Enter the number of years of the loan. ');
    years = validate(years);
    apr *= .01;
    let months = years * 12;
    let paymentAmt = 0;
    let monthInterest = (apr / months) * years;
    paymentAmt = loanAmt * (monthInterest /
      (1 - Math.pow((1 + monthInterest),(-months))));
    console.log(`The monthly payment amount: $ ${paymentAmt.toFixed(2)}`);
    repeat = getInput('Would you like to perform another calculation? Enter \'y\' or \'n\' ');
    repeat = repeat.toLowerCase();
  } while (repeat === 'y');
}

console.log(paymentCalc());

