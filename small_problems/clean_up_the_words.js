/*
Given a string that consists of some words and an assortment of
non-alphabetic characters, write a function that returns that string
with all of the non-alphabetic characters replaced by spaces.
If one or more non-alphabetic characters occur in a row, you should
only have one space in the result (i.e., the result string should never
have consecutive spaces).

Understanding the Problem
-input - a string with words and non-alphabetic characters
-output - a string with all non-alphabetic characters replaced by spaces
-rules/requirements
  -write a function to process the string
  -the output should not have consecutive spaces

Examples
cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("doe---what's my +*& line?doe");    // " what s my line "
cleanUp(doe"doe---what's my +*& line?doe"doe);    // " what s my line "

Data Structures/ Control Structures
-input - string
-output - string
-rules/requirements
  -an array for data manipulation

Algorithm (plain english)
-declare a function with one parameter to take a collection of words
-in the function declare an array
-split the argument str with the Regex .split()
  -the split should occur on non-words
  -the split should match 1 or more non-word characters
-assign the result of the split to the array
-join the array on spaces
-return the value of the array
-run the function

Algorithm (pseudocode)
FUNCTION cleanUp(str) {
  SET holder = str.SPLIT(/W+/);
  RETURN holder.JOIN(' ');
}
*/


function cleanUp(str) {
  let holder = [];
  holder = str.split(/\W+/);
  console.log(holder.join(' '));
  return holder.join(' ');
}

cleanUp("---what's my +*& line?");    // " what s my line "
cleanUp("---doe ---what's my +*& line?doe");    // " what s my line "
cleanUp('doe"doe---what\'s my +*& line?doe"doe"');    // " what s my line "