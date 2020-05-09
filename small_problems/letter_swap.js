/*
Given a string of words separated by spaces, write a function
that swaps the first and last letters of every word.

You may assume that every word contains at least one letter,
and that the string will always contain at least one word.
You may also assume that each string contains nothing but words
and spaces, and that there are no leading, trailing, or repeated spaces.

Understanding the Problem
-input - a string of words
-output - a string of words
-rules/requirements
  -use a function
  -swap the first and last letter of each word in the string
  -assume every word contains at least one letter
  -assume the string always contains at least one word
  -assume the string only contains words and spaces
  -assume there are no leading, trailing, or repeated spaces

Examples
swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

Data Structure / Control Structures
-input - string
-output - string
-rules/requirements
  -array for manipulating the string
  -loop structure for manipulating the string

Algorithm (plain english)
-declare a function named swap that takes a string (str)
-declare a array named strAsArr; instantiate to []
-declare an array named swapper; instantiate to []
-declare a variable named holder; instantiate to ""
-declare a variable named front; instantiate to ""
-declare a variable named back; instantiate to ""
-split the str into strAsArr
-for each element in strAsArr, starting at index = 0
  -assign the value to holder
  -split holder on '' and assign value to swapper
  -shift swapper and assign to front
  -pop swapper and assign to back
  -unshift back to swapper
  -push front to swapper
  -join swapper and assign to holder
  -assign holder to strAsArr[index]
-join strAsArr on ' ' and assign to str
-return str
-call the function

Algorithm (pseudocode)
FUNCTION swap(str) {
  SET strAsArr = [];
  SET swapper = [];
  SET holder = '';
  SET front = '';
  SET back = '';
  strAsArr = str.split(' ');
  FOR (SET idx = 0; idx < strAsArr.length; idx++) {
    holder = strAsArr[idx];
    swapper = holder.split('');
    front = swapper[0].shift();
    back = swapper.pop();
    swapper.unshift(back);
    swapper.push(front);
    holder = swapper.join('');
    strAsArr[idx] = holder;
    str = strAsArr.join(' ');
  }
  return str;
}
*/

function swap(str) {
  let strAsArr = [];
  let swapper = [];
  let holder = '';
  let front = '';
  let back = '';
  strAsArr = str.split(' ');
  for (let idx = 0; idx < strAsArr.length; idx++) {
    holder = strAsArr[idx];
    swapper = holder.split('');
    front = swapper.shift();
    back = swapper.pop();
    swapper.unshift(back);
    swapper.push(front);
    holder = swapper.join('');
    strAsArr[idx] = holder;
  }
  return str = strAsArr.join(' ');;
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"