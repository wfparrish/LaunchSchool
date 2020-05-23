/*
Return a new version of this sentence that ends just before
the word house. Don't worry about spaces or punctuation: remove
everything starting from the beginning of house
to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";


Understanding the Problem
-input - the sentence under consideration
-output - a new version of the sentence that is a portion of the original
-rules/requirements
-the new sentence ends just before the selected word
-ignore spaces or punctuation


Examples / Test Cases
// Expected return value:
// => 'Few things in life are as important as '

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
-array for manipulating data

Algorithm (plain english)
-declare a function that has two parameters
-the first parameter is the sentence to slice
-the second parameter is the word we start to slice at
-declare an array called splitSentence
-declare a variable named indexOfWord
-declare a variable named shortSentence
-split the sentence and pass the new array to splitSentence
-check splitSentence for the second argument word
-pass the index of word to indexOfWord
-slice the array from beginning of array to indexOfWord, join the 
array, and pass the value to short sentence
-return shortSentence

Algorithm (pseudocode)
FUNCTION sliceSentence(sentence, word) {
  SET splitSentence = [];
  SET indexOfWord = 0;
  SET shortSentence = '';
  splitSentence = sentence.SPLIT(' ');
  indexOfWord = splitSentence.INDEXOF(word);
  PRINT shortSentence = splitSentence.SLICE(0, indexOfWord).JOIN(' ');
}

*/


let advice = "Few things in life are as important as house training your pet dinosaur.";

function sliceSentence(sentence, word) {
  let splitSentence = [];
  let indexOfWord = 0;
  let shortSentence = '';
  splitSentence = sentence.split(' ');
  indexOfWord = splitSentence.indexOf(word);
  return shortSentence = splitSentence.slice(0, indexOfWord).join(' ');
}

console.log(sliceSentence(advice, 'house'));


