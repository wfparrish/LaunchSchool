/*

Write a function that returns a list of all palindromic substrings of a string.
That is, each substring must consist of a sequence of characters that reads
the same forward and backward. The substrings in the returned list should be
sorted by their order of appearance in the input string.
Duplicate substrings should be included multiple times.

You may (and should) use the substrings function
you wrote in the previous exercise.

For the purpose of this exercise, you should consider all characters and
pay attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and
'Abc-bA' are not. In addition, assume that
single characters are not palindromes.

Understanding the Problem
-input - a string
-output - an array of palindromic substrings
-rules/requirements
  -use a function
  -return a list of all palindromic substrings of a string
  -the returned list should be sorted by order of appearance
  -duplicate substrings should be included multiple times
  -the function should only return matching case palindromes
  -single characters are not palindromes

Examples:

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

Data Structures / Control Structures
-input - string
-output - array
-rules/requirements
  -a looping structure
  -conditional statements
  -methods of the array class

Algorithm (plain english)
-declare a function named palindromes() that takes a string argument
-declare an array named mutator
-declare an array named subStrArr
-declare an array named palindromeArr
-declare a variable named reversedStr
-pass the string to a helper method substrings()
  -return the outcome to subStrArr
-for each element of subStrArr:
  -check the length of the element
    -if the element's length is equal to one, continue
  -else split the value of the element into the mutator array
  -reverse the mutator array
  -join the mutator array and pass the string into reversedStr
  -if reversedStr is equal to subStrArr[index]
    -push subStrArr[index] into palindromeArr
-return palindromeArr
-call the function

Algorithm (pseudocode)
FUNCTION palindromes(str) {
  SET mutator;
  SET subStrArr;
  SET palindromeArr;
  SET reversedStr;
  subStrArr = substrings(str);
  FOR (SET idx = 0; idx <= subStrArr.LENGTH - 1; idx++) {
    IF (subStrArr[idx].LENGTH === 1) {
      continue;
    } ELSE {
      mutator = subStrArr[idx].SPLIT('');
      reversedStr = mutator.REVERSE().JOIN('');
    }

    IF (reversedStr === subStrArr[idx]) {
      palindromeArr.PUSH(reversedStr);
    }
  }
  RETURN palindromeArr;
}

PRINT(palindromes('Hello World'));
PRINT(palindromes('madam'));
PRINT(palindromes('maam'));

*/


function substrings(str) {
  let start;
  let end;
  let subStrArr = [];
  for (let idx = 0; idx <= str.length - 1; idx++) {
    start = idx;
    for (let jdx = idx; jdx <= str.length - 1; jdx++) {
      end = jdx;
      subStrArr.push(str.slice(start, end + 1));
    }
  }
  return subStrArr;
}

function palindromes(str) {
  let mutator;
  let subStrArr;
  let palindromeArr = [];
  let reversedStr;
  subStrArr = substrings(str);
  for (let idx = 0; idx <= subStrArr.length - 1; idx++) {
    if (subStrArr[idx].length === 1) {
      continue;
    } else {
      mutator = subStrArr[idx].split('');
      reversedStr = mutator.reverse().join('');
    }

    if (reversedStr === subStrArr[idx]) {
      palindromeArr.push(reversedStr);
    }
  }
  return palindromeArr;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));

