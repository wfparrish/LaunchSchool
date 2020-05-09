/*
Write a function that returns true if the string passed as an
argument is a palindrome, or false otherwise.

A palindrome reads the same forwards and backwards.
For this problem, the case does not matter and
you should ignore all non-alphanumeric characters.

Understanding the Problem
-input - a string to be checked for palindrome status
-output - true or false
-rules/requirements
  -use a function
  -check for palindrome
    -case does not matter
    -ignore all non-alphanumeric characters

Examples
isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

Data Structures / Control Structures
-input - string
-output - boolean
-rules/requirements
  -array - to manipulate the characters of the argument

Algorithm (plain english)
-declare a function named isRealPalindrome that takes one argument, val1
-clean up the string passed to val1
  -replace all non-alphanumeric characters using regex
  -put the string to all upper or lower case letters
-put the argument string into an array
-reverse the array
-join the array back to a string and assign to a variable, val2
-compare val1 to val2
  -if equal return true
  -if not equal return false
-call the function

Algorithm (pseudocode)
FUNCTION isRealPalindrome(val1) {
  val1 = val1.REPLACE(/[^a-zA-Z], ''/)
  val1 = val1.TOLOWERCASE;
  SET arrVal1 = val1.SPLIT()
  arrVal1 = arrVal1.REVERSE().JOIN('')
  SET var2 = arrVal1;
  IF(val1 === val2) {
    return true
  } ELSE {
    return false
  }
}
*/

function isRealPalindrome(val1) {
  val1 = val1.replace(/[^a-zA-Z]/g, '');
  val1 = val1.toLowerCase();
  let arrVal1 = val1.split('');
  arrVal1 = arrVal1.reverse().join('');
  let val2 = arrVal1;
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false