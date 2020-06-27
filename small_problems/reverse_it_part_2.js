/*
Write a function that takes a string argument containing
one or more words, and returns a new string containing
the words from the string argument.

All five-or-more letter words should have their letters
in reverse order. The string argument will consist of only
letters and spaces. Words will be separated by a single space.


Understanding the Problem
-input - a string argument (one or more words)
-output - a new string
-rules/requirements
-use a function
-the string may contain one or more words
-the function returns a new string
-all five-or-more letter words should have their letters
in reversed order
-the string will contain only letters and spaces
-words will be seperated by a single space

Examples:
reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"

Data Structures / Control Structures
-input - string
-output - string
-rules/requirements
  -we will use arrays to manipulate the data
  -looping structures are implicit

Algorithm (plain english)
-declare a function named reverseWords() that takes stringArg
-declare an array named wrappingArr
-declare a variable named arrayArg
-declare a variable named funcOutput
-split stringArg into arrayArg
-for each element in arrayArg
  -if the element's length is >= 5
    -split the element into an array called mutator
    -reverse the mutator array
    -join and push the mutator array into wrappingArr
  -else
    -push arrayArg[idx] into wrappingArr
-join the flattend array into funcOutput
-return funcOutput
-call the function

FUNCTION reverseWords(stringArg) {
  SET wrappingArr = [];
  SET arrayArg;
  SET funcOutput;
  arrayArg = stringArg.SPLIT(' ');
  FOR (SET idx = 0; idx <= arrayArg.LENGTH - 1; idx++) {
    IF (arrayArg[i].LENGTH >= 5) {
      let mutator = [];
      mutator = arrayArg[i].SPLIT('').REVERSE();
      wrappingArr.PUSH(mutator.JOIN());
    } ELSE {
      wrappingArr.PUSH(arrayArg[idx])
    }
  }
  RETURN funcOutput = wrappingArr.JOIN(' ');
}


*/

function reverseWords(stringArg) {
  let wrappingArr = [];
  let arrayArg;
  let funcOutput;
  arrayArg = stringArg.split(' ');
  for (let idx = 0; idx <= arrayArg.length - 1; idx++) {
    if (arrayArg[idx].length >= 5) {
      let mutator = [];
      mutator = arrayArg[idx].split('').reverse();
      wrappingArr.push(mutator.join(''));
    } else {
      wrappingArr.push(arrayArg[idx]);
    }
  }
  return funcOutput = wrappingArr.join(' ');
}

console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"