/*
Write a function that takes an Array as an argument,
and reverses its elements in place; that is, mutate the Array
passed into this method.

The return value should be the same Array object.

You may not use Array.prototype.reverse().

Understanding the Problem
-input - an array
-output - the same array as input
-rules/requirements
  -use a function
  -reverse an array's elements in place (i.e mutate the array)
  -the mutated array must be the argument passed
   to the function
  -do not use Array.prototype.reverse()

Examples:

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

Data Structures / Control Structures
-looping structure to iterate through the array

Algorithm (plain english)
-declare a method named reverse that takes an array named list as argument
-declare a variable named backwardCounter
  -instantiate it equal to the length of the list array minus one
-declare a variable named elements
  -copy the list array and assign the result to elements
-create a for loop with two indexes i and j
  -start i at 0
  -start j at backwardCounter
  -run the loop for as long as the index i is less than the length of the
  list array
  -increment i with each loop, and decrement j with each loop
  -with each iteration assign the value in the elements array at
   index position j to the list array at index position i
-return the list array
-call the function

Algorithm (pseudocode)
SET list = [1, 2, 3, 4];
FUNCTION reverse(arrayList) {
  SET backwardCounter = list.LENGTH -1;
  SET elements = list.SLICE();
  FOR (SET idx = 0, jdx = backwardCounter; idx < list.LENGTH; idx++, jdx--) {
    list[idx] = elements[jdx];
  }
  RETURN list;
}

PRINT(reverse(list));
*/

function reverse(arrayList) {
  let backwardCounter = arrayList.length - 1;
  let elements = arrayList.slice();
  for (let idx = 0, jdx = backwardCounter; idx < arrayList.length; idx++, jdx--) {
    arrayList[idx] = elements[jdx];
  }
  return arrayList;
}


let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true