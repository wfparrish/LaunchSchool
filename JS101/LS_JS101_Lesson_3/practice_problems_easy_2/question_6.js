/*
Suppose we build an array like this:

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

This code will create a nested array that looks like this:

["Fred", "Wilma", ["Barney", "Betty"], ["Bambam", "Pebbles"]];

Create a new array that contains all of the above values, but in an un-nested format:

[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

Create three solutions:
  - Solution #1 - use flat() method
  - Solution #2 - use reduce() method

Understanding the Problem (Solution #1)
-input - a nested array
-output - an array with no nesting
-rules/requirements
  -use the flat() method

Examples / Test Cases
removeNesting(flintstones)      //[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -use the methods of the Array.prototype

Algorithm (plain english)
-declare a function removeNesting() that takes one argument
  -in the body of removeNesting() declare a variable flattenedArr
  -instantiate flattenedArr by assigning the value of the flattened argument array
  -return flattenedArr
-call the function removeNesting()

Algorithm (pseudocode)
FUNCTION removeNesting(arr) {
  SET flattenedArr = arr.flat();
  PRINT flattenedArr;
}

removeNesting(flintstones);

*/

//.flat() does not work in Node so far...

// let flintstones = ["Fred", "Wilma"];
// flintstones.push(["Barney", "Betty"]);
// flintstones.push(["Bambam", "Pebbles"]);

// function removeNesting(arr) {
//   let flattenedArr = arr.flat();
//   return flattenedArr;
// } 

// console.log(removeNesting(flintstones));

/* 

Understanding the Problem (Solution #2)
-input - a nested array
-output - an array with no nesting
-rules/requirements
  -use the reduce() method

Examples / Test Cases
removeNesting(flintstones)      //[ 'Fred', 'Wilma', 'Barney', 'Betty', 'Bambam', 'Pebbles' ]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -use the methods of the Array.prototype

Algorithm (plain english)
-declare function removeNesting(arr) that takes one argument
  -declare a variable named flattened
  -call .reduce() on arr and pass it an anonymous function and an empty array(optional)
    -in the anonymous function you have two parameters, accumulator and currentValue
      -return accumulator.concat(currentValue)
-instantiate flattened with the result of the .reduce() call on arr
-return flattened
-call the removeNesting() function

Algorithm (pseudocode)
FUNCTION removeNesting(arr) {
  SET flattened = arr.REDUCE((accumulator, currentValue) => {
                                PRINT accumulator.concat(currentValue);
  },[])
  PRINT flattened;
}

removeNesting(flintstones);

*/

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);

function removeNesting(arr) {
  let flattened = arr.reduce((accumulator, currentValue) => {
                            return accumulator.concat(currentValue);
  },[])
  return flattened;
}

console.log(removeNesting(flintstones));

//Launch School solution
// flintstones = [].concat(...flintstones);
