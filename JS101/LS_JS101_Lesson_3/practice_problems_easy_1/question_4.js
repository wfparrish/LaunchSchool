/*

Using the following string, create a new string that contains
all lowercase letters except for the first character,
which should be capitalized. (See the example output.)

Understanding the problem
-input - a given string seperated by spaces
          with a mixture of lowercase and capital letters
-output - a string an uppercase letter in the first position
          followed by all lowercase letters
-rules/requirements
  -use the given string
  -the given string shall be in the form of a sentence
  -the given string shall have spaces between words
  -return a new string
  -the new string will have it's first letter capitalized

Examples / Test cases
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

munstersDescription = "tHe mUnsterS ArE CReePy anD SpoOky.";
// => The munsters are creepy and spooky.

Data Structures / Control Structures
-input - a string
-output - a string
-rules/ requirments
-arrays to manipulate the given string
-for loop to access data in each array index

Algorithm (plain english)
-declare lowerCaseSentence(sentence) {...} helper function
  -in the body declare an array named mutator
  -split the sentence on spaces into the mutator
  -for each index position in mutator
  -take all characters to lowercase
  -assign the value to a mutator[index]
-return mutator joined on spaces between words

-declare newSentence(sentence) {...} function
  -in the body call the lowerCaseSentence(sentence) function
  -assign the value to newSentence
-return newSentence

-declare upperCaseFirstWord(sentence) {...} function
  -in the body uppercase the first index position
-return the newSentence

Algorithm (pseudocode)
FUNCTION properGrammar(sentence) {
  SET mutator = Array.SPLIT(sentence);
  mutator.forEach((word) => {
    mutator[index] = word.toLowerCase();
  })
  return mutator.join(' ');
}


FUNCTION upperCaseFirstWord(sentenceLowered) {
  sentenceLowered[0] = sentenceLowered[0].toUpperCase();
  return sentenceLowered;
}

FUNCTION newSentence(sentence) {
  SET sentenceLowered = lowerCaseSentence(sentence);
  RETURN upperCaseFirstWord(sentenceLowered);
}

newSentence(munstersDescription);

*/

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let munstersDescriptionToo = "tHe mUnsterS ArE CReePy anD SpoOky.";
// => The munsters are creepy and spooky.

function lowerCaseSentence(sentence) {
  let mutator = sentence.split(' ');
  mutator.forEach((word, index) => {
    mutator[index] = word.toLowerCase();
  });
  return mutator.join(' ');
}

function upperCaseFirstWord(sentenceLowered) {
  return sentenceLowered.charAt(0).toUpperCase() + sentenceLowered.slice(1)
}

function newSentence(sentence) {
  let sentenceLowered = lowerCaseSentence(sentence);
  return upperCaseFirstWord(sentenceLowered);
}

console.log(newSentence(munstersDescription));
console.log(newSentence(munstersDescriptionToo));

//Launch School solution:
munstersDescription.charAt(0).toUpperCase() +
  munstersDescription.substring(1).toLowerCase();