/*
Using the forEach method, write some code to output all
vowels from the strings in the arrays. Don't use a for or while loop.

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};

Understanding the Problem
-input - object with string keys and array values for each property
-output - the vowels from the strings in the arrays
-rules/requirements
  -use the array forEach method
  -output all vowels from the strings in the arrays
  -do not use a for or while loop

Examples / Test Cases

getTheVowels(obj);

//returns:
eui
oo
u
oeeao

Data Structures / Control Structures
-input - object that stores arrays
-output - string
-rules/requirements
  -a looping method of the array 

Algorithm (plain english)
-declare a variable named vowels, instantiate empty string
-get the values from the object and convert them to an array
-for each subarray in the array
  -join the subarray into a string
  -split the subarrray into an array of characters
    -for each character array made from a subarray
      -if the character at the current index is a vowel
        -concat the character to the vowels variable
-log the vowels variable to the console
-reassign vowels to an empty string

Algorithm (pseudocode)

SET vowels = '';

OBJECT.VALUES(obj).FOREACH((element) => {
  element.JOIN('').SPLIT('').FOREACH((char) => {
    IF(char.MATCH(/[aeiou]/)) {
      vowels += char;
    }
  })
})

*/



let vowels = '';

let obj = {
  first: ['the', 'quick'],
  second: ['brown', 'fox'],
  third: ['jumped'],
  fourth: ['over', 'the', 'lazy', 'dog'],
};


Object.values(obj).forEach((element) => {
  element.join('').split('').forEach((char) => {
    if(char.match(/[aeiou]/)) {
      vowels += char;
    }
  });
  console.log(vowels);
  vowels = '';
});

