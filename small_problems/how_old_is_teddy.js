/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 120 (inclusive).

Understand the Problem
-input - N/A
-output - a randomly generated age
-rules/requirements
  -randomly generate an age value
  -log the generated age to the console
  -the age must be between 20 and 120 (inclusive)

Example
-Teddy is 69 years old!
-Teddy is 12 years old!
-Teddy is 101 years old!

Data Structures / Control Structures
-input - N/A
-output - string, number

Algorithm (plain english)
-declare a function named giveAge()
-declare a variable named age in the body of the function
-instantiate age to 20 + (Math.random() * 100)
-return the string "Teddy is {age} years old"
-call the function

Algorithm (pseudocode)
-FUNCTION giveAge() {
  SET AGE = 20 + (Math.random() * 100);
  RETURN "Teddy is {age} years old"
}
*/

function giveAge() {
  let age = Math.round(20 + (Math.random() * 100));
  return `Teddy is ${Math.floor(age)} years old`;
}

console.log(giveAge());
