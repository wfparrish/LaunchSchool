/*
Determine whether the name Dino appears in the strings below
(check each string separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";


Understanding the Problem
-input - a sentence to be checked and the word we are searching for
-output - true or false depending on if the string is found or not
-rules/requirements
-search for the desired word inside the given sentences
-each sentence must be checked seperately

Examples / Test Cases
findWord(str1, 'Dino');   //false
findWord(str2, 'Dino');   //true

Data Structures / Control Structures
-input - string
-output - boolean
-rules/requirements
  -array to manipulate the sentences

Algorithm (plain english)
-declare a function that takes two arguments
-the first argument is the sentence to search
-the second argument is the word to find
-in the body of the function declare an array named seperateWords
-trim anything that is not a letter from the sentence
-split the sentence into the array seperateWords
-check if eachWord includes word using the array's built in method
-return the boolean result
-call the function

Algorithm (pseudocode)
FUNCTION findWord(sentence, word) {
  sentence = sentence.REPLACE('.', '');
  SET seperateWords = sentence.SPLIT(' ');
  PRINT seperateWords.INCLUDES(word);
}

*/
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

function findWord(sentence, word) {
  sentence = sentence.replace('.', '');
  let seperateWords = sentence.split(' ');
  return seperateWords.includes(word);
}

console.log(findWord(str1, 'Dino'));
console.log(findWord(str2, 'Dino'));

