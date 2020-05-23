/*
Write four different ways to remove
all of the elements from the following array:

let numbers = [1, 2, 3, 4];

Understanding the Problem
-input - an array with numeric values
-output - an empty array
-rules/requirements
  -must create four unique ways to empty the array
  -use the methods of the language

Examples / Test Cases

emptyArraySplice(numbers)   //expected output: []
emptyArrayFilter(numbers)   //expected output: []

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -implicit loops


Algorithm 1 (plain english)
-Declare a method named emptyArraySplice() that takes an array
  -Splice out the values in the array from first item to last
-return the empty array
-call the function

Algorithm 1 (pseudocode)
FUNCTION emptyArraySplice(numbersArr) {
  numbersArr.SPLICE(0, numbersArr.LENGTH)
  return numbersArr;
}

Algorithm 2 (plain english)
-Declare a method named emptyArrayFilter() that takes an array (numbersArr)
  -for each of the values in the array
    -if the element is not equal to null, assign the value to null
    -continue until the array is empty
-return the empty array
-call the function

Algorithm 2 (pseudocode)
FUNCTION emptyArrayFilter(numbersArr) {
  let newArray = [];
  newArray = numbersArr.FILTER((elements) => {
    element === null || undefined;
  })
  return newArray;
}

Algorithm 3 (plain english)
-Declare a method named emptyArrayByLengthProp()
 that takes an array (numbersArr)
-for each of the values in the array
  -assign the current position numbersArr.length
-return the array

Algorithm 3 (pseudocode)
FUNCTION emptyArrayByLengthProp(numbersArr) {
  for (SET idx = 0; idx <= numbersArr.length - 1; idx++) {
    numbersArr[idx] = numbersArr[numbersArr.length];
  }
  return numbersArr;
}

Algorithm 4 (plain english)
-Declare a method called emptyArrayByNull()
 that takes an array (numbersArr)
-for each of the values in the array
  -assign the current position the null value
-return the array

Algorithm 4 (psuedocode)
FUNCTION emptyArrayByNull(numbersArr) {
  for (SET idx = 0; idx <= numbersArr.length - 1; idx++) {
    numbersArr[idx] = null;
  }
  return numbersArr;
}
*/

let numbers = [1, 2, 3, 4];

function emptyArraySplice(numbersArr) {
  numbersArr.splice(0, numbersArr.length);
  return numbersArr;
}

console.log(emptyArraySplice(numbers));

function emptyArrayFilter(numbersArr) {
  let newArray = [];
  newArray = numbersArr.filter((element) => {
    return element === null || undefined;
  });
  return newArray;
}

console.log(emptyArrayFilter(numbers));

function emptyArrayByLengthProp(numbersArr) {
  for (let idx = 0; idx <= numbersArr.length - 1; idx++) {
    numbersArr[idx] = numbersArr[numbersArr.length];
  }
  return numbersArr;
}

console.log(emptyArrayByLengthProp(numbers));

function emptyArrayByNull(numbersArr) {
  for (let idx = 0; idx <= numbersArr.length - 1; idx++) {
    numbersArr[idx] = null;
  }
  return numbersArr;
}

console.log(emptyArrayByNull(numbers));

//Launch School Solutions:

//1. numbers = [];
//2. numbers.length = 0;
//3. numbers.splice(0, numbers.length);
//4. while (numbers.length) {
//   numbers.pop();
// }
