/*
https://launchschool.com/lessons/60e10aa5/assignments/159da1eb    <---where the solution lives

Extracting to Functions
Most of the time, selecting or transforming a collection is a specific action, e.g., select all the odd numbers or turn all elements into strings. That naturally lends the specific action being extracted into convenience functions.

Say, for example, that we wanted to be able to select all of the vowels in a given string. We're going to use the helpful String.prototype.includes method here to help determine whether a character is a vowel:

if ('aeiouAEIOU'.includes(currentChar)) {
  selectedChars += currentChar;
}
Let's put it all together with a selectVowels function so we can call this function on any string:

function selectVowels(str) {
  let selectedChars = '';

  for (let counter = 0; counter < str.length; counter += 1) {
    let currentChar = str[counter];

    if ('aeiouAEIOU'.includes(currentChar)) {
      selectedChars += currentChar;
    }
  }

  return selectedChars;
}
*/

