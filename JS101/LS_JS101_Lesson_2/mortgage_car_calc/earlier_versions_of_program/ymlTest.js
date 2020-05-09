
const yaml = require('js-yaml');
const fs = require('fs');

//imports mort_car_loan_calc.yaml data into the mortgage calculator
try {
  const config = yaml.safeLoad(fs.readFileSync('mort_car_loan_calc.yaml', 'utf8'));
  for (const MESSAGES of config.MESSAGES) {
    console.log(MESSAGES);
  }
} catch (e) {
  console.log(e);
}


//Srdan's suggested method for getting data from the user, validating it
function getUserInput(inputName, validationFunc) {
  prompt(MESSAGES[inputName]);
  let input = readline.question();

  while (validationFunc(input)) {
    prompt(MESSAGES[`invalid ${inputName}`]);
    input = readline.question();
  }
  return input;
}

let loanAmount = getUserInput("loanAmount", invalidLoanAmount);

/* Steps to implement Srdan's method

1. Add "loanAmount" string to getInput for loanAmt variable
2. Add validate() call to getInput() for loanAmt variable assignment
3. kill the 2nd loanAmt value assignment
4. inputName is a reference to the correct message. you need to assign a key to the 
	correct question in yaml (if that is possible)
5. call the message for the key
6. call an readline.question() that has no argument, 
   so it is just waiting for the response to the message in Step 5.
7. call the validate() function in the while loop you add to getInput()
	-if the data is invalid call the correct message to tell the user
	-use the readline.question(), no argument
8. call getInput() with the two arguments

*/