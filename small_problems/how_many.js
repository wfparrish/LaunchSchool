/*
Write a function that counts the number of occurrences of each element
in a given array. Once counted, log each element alongside the number of
occurrences. Consider the words case sensitive e.g. ("suv" !== "SUV").

Understanding the problem
input - an array with strings
output - the elements in the array with a tally of how many times they appeared
rules/requirements
  -use a function
  -count the number of occurrences of each element in the array
  -log the elements and their counts after all have been tallied
  -consider the words case sensitive

Example:

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurrences(vehicles);

// console output -- your output sequence may be different
car => 4
truck => 3
SUV => 1
motorcycle => 2

Data Structures / Control Structures
-input - array
-output - string
-rules/requirements
  -an object will be used to collect the tally
  -looping structures from array class methods
  -conditional statements to check for the elements in the object

Algorithm (plain english)
-declare a function named countOccurrences() that takes an array
-declare an object named hashTable
-declare an array named entries
-for each element in the vehicles array
  -check if there is a key in the hashTable with a name that matches the element
    -if there is a match, increment the key's value by 1
    -if there is not a match, assign 1 to the value for the key

-use a template to loop through the entries array,
 returning the elements to the console
-call the function

Algorithm (pseudocode)
FUNCTION countOccurrences(arr) {
  SET hashTable = {};
  SET entries;
  arr.FOREACH((element) => {
    IF (hashTable.HASOWNPROPERTY(element)) {
      hashTable[element] += 1;
    } ELSE {
      hashTable[element] = 1;
    }
  });
  entries = hashTable.ENTRIES();
  entries.FOREACH((vehicle) => {
    PRINT(`${vehicle[0]} => ${vehicle[1]}`);
  })
}

countOccurrences(vehicles);

*/

function countOccurrences(arr) {
  let hashTable = {};
  let entries;
  arr.forEach((element) => {
    if (hashTable.hasOwnProperty(element)) {
      hashTable[element] += 1;
    } else {
      hashTable[element] = 1;
    }
  });
  entries = Object.entries(hashTable);
  entries.forEach((vehicle) => {
    console.log(`${vehicle[0]} => ${vehicle[1]}`);
  });
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck', 'suv'];

countOccurrences(vehicles);