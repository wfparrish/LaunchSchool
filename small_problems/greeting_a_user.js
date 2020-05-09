/*Write a program that will ask for user's name.
The program will then greet the user.
If the user writes "name!" then the computer yells back to the user.

Understanding the Problem
-input - a value for user's name
-output -a greeting
-rules/requirements
  -the console prompts for a string
  -the console responds in two ways
    -if the user's string is just their name, use greeting style 1
    -if the user's string includes an exclamation , use greeting style 2

Examples/Test Cases

What is your name? Bob
Hello Bob.

What is your name? Bob!
HELLO BOB. WHY ARE WE SCREAMING?

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -if statement
  -array for processing the input

Algorithm(plain English)
//Given a function to read input from the console
-declare a function that gets a user's name
-store the user's name in a variable
-declare an array that will be used to process the user's name
-split the variable into the array
-determine if the array includes a ! character
  -if ! is in the array, print a greeting in all caps
  -else print the normal greeting
-call the function

Algorithm(psuedocode)

FUNCTION greeting(name) {
  SET arr = split_string(name)
  if (arr.includes(!)) {
    arr = arr.slice_out_name
    name = arr.join_array_back_to_string
    PRINT HELLO name.uppercase + "." WHY ARE WE SCREAMING?
  }

  else {
    PRINT Hello name.
  }
}
*/

let rlsync = require('readline-sync');
let name = rlsync.question('What is your name? ');

function greeting() {
  let arr = name.split('');
  if (arr.includes("!")) {
    arr = arr.slice(0, arr.length - 1);
    name = arr.join('');
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?`);
  } else {
    console.log(`Hello ${name}.`);
  }
}

greeting();