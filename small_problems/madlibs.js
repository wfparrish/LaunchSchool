/*
Madlibs is a simple game where you create a story template with
"blanks" for words.

You, or another player, then construct a list of words and place them
into the story, creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb,
and an adjective, and injects them into a story that you create.


Understanding the Problem
-input - four strings (noun, verb, adverb, and adjective)
-output - strings that use the input as part of the output
-rules/requirements
  -the input should be strings
  -the programmer must create the story

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious!
The blue dog walks quickly over the lazy dog.
The dog quickly walks up blue Joe's turtle.

Data Structures/Control Structures
-input - string
-output - string
-rules/requirements - N/A

Algorithm
-prompt the user to enter four words into the console
-declare a method with four parameters
-in the method body write a story in strings
  -in the strings, use template literals
  -pass the parameters to the template literals
-log the template literals to the console
-call the method
*/

const readline = require('readline-sync');

console.log("Enter a noun: ")
let noun = readline.prompt();

console.log("Enter a verb: ")
let verb = readline.prompt();

console.log("Enter a adjective: ")
let adjective = readline.prompt();

console.log("Enter a adverb: ")
let adverb = readline.prompt();

function madlib(noun, verb, adjective, adverb) {
  console.log(`Your ${noun} is ${verb}ing in my ${adjective} ${adverb}`);
  console.log(`and I don't appreciate it. Take your ${noun} and get out of here!`);
}

madlib(noun, verb, adjective, adverb);