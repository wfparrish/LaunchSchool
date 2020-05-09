/*
Write a function that takes a string consisting of zero or more
space separated words, and returns an object that shows the
number of words of different sizes.

Words consist of any sequence of non-space characters.

Understanding the Problem
-input - a string of zero or more space seperated words
-output - an object with properties that track the length of words
-rules/requirements
  -use a function
  -store the results in an object
  -words are any sequence of non-space characters

Examples
wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}

Data Structures / Control Structures
-input - string
-output - object
-rules/requirements
  -an array to manipulate the argument
  -a looping structure

Algorithm (plain english)
-declare a function wordSizes that takes a variable str
-declare an array strArr; instantiate to [];
-declare an object named dictionary; instantiate to {}
-declare an object named strLength; instantiate to ""
-replace all non-alphanumeric characters with '' except for spaces
-split str into strArr on ' '
-for each element of strArr, starting at index = 0
  -determine the length of the value at str[index],
   and convert that length to a string
  -check the dictionary for a key value that matches the length string
    -if the dictionary does not have the length string as a key:
      -assign the length, as a string, to the dictionary as a key
      -assign a value of 1 to the value associated with the key
    -if the dictionary already has the length string as a key:
      -increment the value associated with the key by 1
-return the dictionary
-call the function

Algorithm (pseudocode)
FUNCTION wordSizes(str) {
  SET strArr = [];
  SET dictionary = {};
  SET strLength = "";
  strArr = str.split(' ');
  FOR(SET index = 0; index < strArr.length; index++) {
    strLength = String(strArr[index].length);
    IF(strLength in dictionary) {
      dictionary[strLength] += 1;
    } ELSE {
      dictionary[strLength] = 1;
    }
  }
  RETURN dictionary
}
*/

function wordSizes(str) {
  let strArr = [];
  let dictionary = {};
  let strLength = "";
  str = str.replace(/[^a-zA-Z\s]/g, '');
  strArr = str.split(' ');
  for (let index = 0; index < strArr.length; index++) {
    strLength = String(strArr[index].length);

    if (strLength === '0') {
      return dictionary;
    }

    if (strLength in dictionary) {
      dictionary[strLength] += 1;
    } else {
      dictionary[strLength] = 1;
    }
  }
  return dictionary;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "3": 1, "5": 1 }
console.log(wordSizes(''));                                            // {} 