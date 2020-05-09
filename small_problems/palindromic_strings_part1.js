/*
Write a function that returns true if the string passed as an
argument is a palindrome, or false otherwise.

A palindrome reads the same forwards and backwards.
For this problem, the case matters and all characters matter.

Understanding the Problem
-input - a string to be checked for palindrome status
-output - true or false
-rules/requirements
  -use a function
  -check for palindrome
    -case matters (upper and lower)
    -all characters matter (non-word characters)

Examples
isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

Data Structures / Control Structures
-input - string
-output - boolean
-rules/requirements
  -array - to manipulate the characters of the argument

Algorithm (plain english)
-declare a function named isPalindrome that takes one argument, val1
-put the argument string into an array
-reverse the array
-join the array back to a string and assign to a variable, val2
-compare val1 to val2
  -if equal return true
  -if not equal return false
-call the function

Algorithm (pseudocode)
FUNCTION isPalindrome(val1) {
  SET arrVal1 = val1.PUSH()
  arrVal1 = arrVal1.REVERSE().JOIN('')
  SET var2 = arrVal1;
  IF(val1 === val2) {
    return true
  } ELSE {
    return false
  }
}
*/

function isPalindrome(val1) {
  let arrVal1 = val1.split('');
  arrVal1 = arrVal1.reverse().join('');
  let val2 = arrVal1;
  if (val1 === val2) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome('madam'));               // true
console.log(isPalindrome('Madam'));               // false (case matters)
console.log(isPalindrome("madam i'm adam"));      // false (all characters matter)
console.log(isPalindrome('356653'));              // true
