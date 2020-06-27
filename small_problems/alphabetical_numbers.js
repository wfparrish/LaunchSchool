/*
Write a function that takes an array of integers between 0 and 19,
and returns an array of those integers sorted based on the English
word for each number:

zero, one, two, three, four, five, six, seven, eight, nine,
ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen,
seventeen, eighteen, nineteen

Understanding the Problem
-input - an array of integers
-output - a sorted array
-rules/requirements
  -use a function
  -the array shall be sorted alphabetically
  -the returned array shall be numerical, and represent the same
   value in it's position in a list as the alphabetically sorted word
   for the value


Example:

1 has a relationship to "one"
In a list of alphabetically sorted numbers, "one" would not be the first
word in the list, and 1 will not be the first number in the returned array

"eight" would be the first number in an alphabetically sorted list, so
8 will be the first number in the returned array

alphabeticNumberSort(
   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

Data Structure / Control Structures
-input - array
-output - array
-rules/requirements
  -an array to connect the number value to the word value for each value
    between 0 and 19
  -an object to connect the word value to the number value for each value
    between zero and nineteen
  -an array to use it's sorting method for the word values

Algorithm (plain english)
-declare an array named numbersToWords that has each number word from zero to nineteen
 in the matching index position for the number
-declare an object named wordsToNumbers that has each number word from zero to nineteen
 as key properties with matching numerical values
-declare a function named alphabeticNumberSort that takes an array argArr
-declare an array named words
-declare an array named numbers
-for each element in argArr
  -find the index in numbersToWords that matches the element
  -push the element from numbersToWords into the words array
-sort the words array
-for each element in words
  -find the property in wordsToNumbers object that matches the element's value
  -push the property's value into the numbers array
-return the numbers array
-call the function

Algorithm (pseudocode)
CONST numbersToWords = ['zero','one','two','three','four',
                        'five','six','seven','eight','nine',
                        'ten','eleven','twelve','thirteen',
                        'fourteen','fifteen','sixteen',
                        'seventeen','eighteen','nineteen'];

CONST wordsToNumbers = {
  'zero': 0
  'one': 1
  'two': 2
  'three': 3
  'four': 4
  'five': 5
  'six': 6
  'seven': 7
  'eight': 8
  'nine': 9
  'ten': 10
  'eleven': 11
  'twelve': 12
  'thirteen': 13
  'fourteen': 14
  'fifteen': 15
  'sixteen': 16
  'seventeen': 17
  'eigthteen': 18
  'nineteen': 19
}

FUNCTION alphabeticNumberSort(argArr) {
  SET words = [];
  SET numbers = []
  argArr.FOREACH((key) => {
    IF (numbersToWords.HASOWNPROPERTY(key)) {
      words.PUSH(numbersToWords[key]);
    }
  });
  words.SORT();
  words.FOREACH((key) => {
    IF (wordsToNumbers.HASOWNPROPERTY(key)) {
      numbers.PUSH(wordsToNumbers[key]);
    }
  });
  RETURN words;
}

*/

let wordsToNumbers = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19
}

let numbersToWords = ['zero','one','two','three','four',
                        'five','six','seven','eight','nine',
                        'ten','eleven','twelve','thirteen',
                        'fourteen','fifteen','sixteen',
                        'seventeen','eighteen','nineteen'];

function alphabeticNumberSort(argArr) {
  let words = [];
  let numbers = [];
  argArr.forEach((key) => {
    if (numbersToWords.hasOwnProperty(key)) {
      words.push(numbersToWords[key]);
    }
  })
  words.sort();
  words.forEach((key) => {
    if (wordsToNumbers.hasOwnProperty(key)) {
      numbers.push(wordsToNumbers[key]);
    }
  })
  return numbers;
}

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));

