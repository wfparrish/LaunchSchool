/*
Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Understanding the Problem
-input - a sentence with upper and lower case letters
-output - a sentence that reverses the case of each letter in the input
-rules/requirements
  -swap upper for lower case
  -swap lower for upper case

Examples / Test Cases
let munstersDescription = "The Munsters are creepy and spooky.";
                          //`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Data Structures / Control Structures
-input - string
-output - string
-rules / requirements
  -a string with upper and lower case values for the entire alphabet

Algorithm (plain english)
-Define a function called inverter() that takes one argument called sentence
-Define a string with 52 letters (alphaUpperAndLower)
 alphaUpperAndLower = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
-define a variable called bizarroSentence
-define a variable called indexStore
-for each position of the sentence check for
  -spaces
  -punctuation
  -the index of the same letter in alphaUpperAndLower
-if sentence[idx] is a ' '
  -concat ' ' to bizarroSentence
-else if sentence is a '.'
  -concat '.' to bizarroSentence
-else if sentence[idx] is equal to a letter in alphaUpperAndLower
  -store the index of the letter from alphaUpperAndLower in indexStore
    -if indexStore is <= 25
    -concat the letter from alphaUpperAndLower at index + 26 to bizarroSentence
    -if the indexStore is > 25
    -return the letter from alphaUpperAndLower at index - 26 to bizarroSentence
    -return bizarroSentence

Algorithm (pseudocode)

FUNCTION inverter(sentence) {
  SET alphaUpperAndLower =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  SET bizarroSentence = '';
  FOR (SET idx = 0; idx < sentence.LENGTH; idx++) {
    IF (sentence[idx] === ' ' || sentence[idx] === '.') {
      bizarroSentence += sentence[idx];
      continue;

    SET indexStore = alphaUpperAndLower.INDEXOF(sentence[idx]);
    IF (indexStore <= 25) {
      bizarroSentence.CONCAT(alphaUpperAndLower[indexStore + 26]);
    } ELSE {
      bizarroSentence.CONCAT(alphaUpperAndLower[indexStore - 26]);
    }
  }
  return bizarroSentence;
}

*/

let munstersDescription = "The Munsters are creepy and spooky.";

function inverter(sentence) {
  let alphaUpperAndLower = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let bizarroSentence = '';
  for (let idx = 0; idx < sentence.length; idx++) {
    if (sentence[idx] === ' ' || sentence[idx] === '.') {
      bizarroSentence += sentence[idx];
      continue;
    }

    let indexStore = alphaUpperAndLower.indexOf(sentence[idx]);
    if (indexStore <= 25) {
      bizarroSentence += alphaUpperAndLower[indexStore + 26];
    } else if (indexStore > 25) {
      bizarroSentence += alphaUpperAndLower[indexStore - 26];
    }
  }
  return bizarroSentence;
}

console.log(inverter(munstersDescription));