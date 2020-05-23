/*
Given a string, return a new string that replaces every occurrence 
of the word "important" with "urgent":

let advice = "Few things in life are as important as house training your pet dinosaur.";

Understanding the Problem
-input - a string that contains a specific word we wish to replace
-output - a new string with the replaced word
-rules/requirements
-return a new string
-replace each instance of the selected word

Examples / Test Cases
switchWord(advice)    //"Few... as urgent... pet dinosaur."

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
-methods of the String prototype

Algorithm (plain english)
-declare a function switchWord() that takes two arguments
-the first argument is a string named sentence
-the second argument is a string named word
-in the body of switchWord() declare a variable named newSentence
-replace the selected word with the value of word and 
instantiate newSentence with the returned value
-return newSentence
-call the function

Algorithm (pseudocode)
FUNCTION switchWord(sentence, word) {
  SET newSentence = "";
  newSentence = sentence.replace('important', word);
  return newSentence;
}

switchWord(advice, 'urgent');
*/

let advice = "Few things in life are as important as house training your pet dinosaur.";

function switchWord(sentence, word) {
  newSentence = sentence.replace('important', word);
  return newSentence;
}

console.log(switchWord(advice, 'urgent'));