/*
Let's do some "ASCII Art": a stone-age form of nerd artwork
from back in the days before computers had video screens.

For this practice problem, write a program that creates the
following output 10 times, with each line indented 1 space to the right
of the line above it:

The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!

Understanding the Problem
-input - a sentence
-output - 10 repetitions of the sentence,
          with growing spaces prepended to the sentence
-rules/requirements
  -prepend an additional space with each line of output
  -the output should stop at 10 lines
  -the first line should have a space of 0

Examples / Test Cases
The Flintstones Rock!
 The Flintstones Rock!
  The Flintstones Rock!

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -looping structure for the printing iterations

Algorithm (plain english)
-declare a function that takes one argument, a sentence (string)
-print the sentence to the console
-create a for loop (starting at 1) that will iterate 9 times
-for each iteration of the loop:
  -prepend spaces in front of the sentence 'index of the loop' times
  -print the sentence to the console
-call the function

Algorithm (pseudocode)
FUNCTION addSpaces(sentence) {
  LOG(sentence);
  FOR (SET idx = 1; idx <= 9; idx++) {
    LOG(' '.repeat(idx) + sentence);
  }
}

addSpaces('The Flintstones Rock!')
*/

function addSpaces(sentence) {
  for (let idx = 1; idx <= 10; idx++) {
    console.log(' '.repeat(idx) + sentence);
  }
}

addSpaces('The FlintStones Rock!');