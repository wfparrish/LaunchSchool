/* Write a function that takes a string argument and returns a new string
that contains the value of the original string with all consecutive duplicate
characters collapsed into a single character.

Understanding the Problem
-input - string with consecutive duplicate characters
-output - string with collapsed duplicate characters
-rules/requirements
  -use a function
  -handle blank spaces
  -handle empty strings
  -handle single characters
  -each time the next char is different than the previous char
   add it to the new string
  -if the next char is the same as the previous char, you need to check

Examples / Test Cases

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

Data Structures / Control Structures
-input - string
-output - string
-if statement
-for loop

Algorithm (plain english)
-declare a function named crunch that takes one argument (str)
-declare an array named strHolder and instantiate to []
-declare a counter for the index of strHolder, k
-declare a string to return at the end (newStr)
-declare counter variables for the for loop (i = 0, j = 1)
  -for each char str[i] compare it to str[j] for str.length - 2
    -if str[i] === str[j] && str[j] != strHolder[k-1]
      -pass the value of str[j] to strHolder[k]
      -increment k
    -if str[i] === str[j] && str[j] === strHolder[k-1]
      -continue loop
    -if str[i] != str[j]
      -pass the value of str[j] to strHolder[k]
      -increment k
  -if there is no match the inner loop continues
-join strHolder on '' and pass value to newStr
-return newStr
-call the function crunch

Algorithm (pseudocode)
FUNCTION crunch(str) {
  SET strHolder = [];
  SET k = 0;
  SET newStr = '';
  FOR (i = 0; j = 1; i <= str.length -2; i++, j++) {
    IF (str[i] === str[j] && str[j] !== strHolder[k-1]) {
      strHolder[k] = str[j];
      k++;
    }
    IF (str[i] === str[j] && str[j] === strHolder[k-1]) {
      continue;
    }
    IF (str[i] !== str[j]) {
      strholder[k] = str[j];
      k++
    }
  }
  newStr = strHolder.join('');
}

crunch(str);
*/

function crunch(str) {
  let strHolder = [];
  let k = 0;
  let newStr = '';
  if(str.length === 0 || str.length === 1) {
    return str[0]
  }
  else {
    for (let i = 0, j = 1; i <= str.length - 2; i++, j++) {
      if (str[i] === str[j] && str[j] !== strHolder[k - 1]) {
        strHolder[k] = str[j];
        k++;
      }
      if (str[i] === str[j] && str[j] === strHolder[k - 1]) {
        continue;
      }
      if (str[i] !== str[j]) {
        strHolder[k] = str[j];
        k++;
      }
    }
    return newStr = strHolder.join('');
  }
}

console.log(crunch('ddaaiillyy ddoouubbllee'));    // "daily double"
console.log(crunch('4444abcabccba'));              // "4abcabcba"
console.log(crunch('ggggggggggggggg'));            // "g"
console.log(crunch('a'));                          // "a"
console.log(crunch(''));