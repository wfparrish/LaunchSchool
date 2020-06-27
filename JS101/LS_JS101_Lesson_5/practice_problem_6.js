/*
One of the most frequently used real-world string
operations is that of "string substitution," where we take a hard-coded
string and modify it with various parameters from our program.

Given this previously seen family object, print the name, age,
and gender of each family member:

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};
Each output line should follow this pattern:

(Name) is a (age)-year-old (male or female).

Understanding the Problem
-input - an object with key value pairs whose values are objects
-output - a string that renders nested value data to the console
-rules/requirements
  -the output string should follow the given pattern:
    "(Name) is a (age)-year-old (male or female)."

Examples / Test Cases
munsterInfo(munsters)   // => 'Herman is a 32-year-old male'...

Data Structures / Control Structures
-input - object
-output - string
-rules/requirements
  -looping structure

Algorithm (plain english)
-declare a function named munsterInfo(munsterFamily) that
 takes an object argument
-declare a variable named munsterRollCall
-cast munsterFamily into an array named munsterArray
-for each subarray of munsterArray
  -access the subarray's string value
  -access the unique munster's age and gender values
  -pass the accessed values in a string literal
-return munsterRollCall
-call the function

Algorithm (pseudocode)
FUNCTION munsterInfo(munsterFamily) {
  SET munsterArray = Object.ENTRIES(munsterFamily);
  munsterArray.FOREACH((name) => {
    return `${name} is a ${age}-year-old ${gender}`;
  });
}

PRINT(munsterInfo(munsters));

*/

let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

function munsterInfo(munsterFamily) {
  let munsterArray = Object.entries(munsterFamily);
  console.log(munsterArray);
  munsterArray.forEach((_, idx) => {
    console.log(`${munsterArray[idx][0]} is a ${munsterArray[idx][1]['age']}-year-old ${munsterArray[idx][1]['gender']}`);
  });
}

munsterInfo(munsters);