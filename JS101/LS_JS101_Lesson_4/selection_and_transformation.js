
/*

//How would you implement this function?

let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

Understanding the Problem
-input - an object that holds fruit and vegetable key/value pairs
-output - an object that holds fruit key/value pairs
-rules/requirements
  -use a function
  -select the key/value pairs where the value is 'Fruit'


Examples
selectFruit(produce); // => { apple: 'Fruit', pear: 'Fruit' }

Data Structures / Control Structures
-input - object
-output - object
-rules/requirements
  -a looping structure
  -conditional statements

Algorithm (plain english)
-declare a function named selectFruit() that takes an
 object named produce as argument
-declare a object named onlyFruit
-for the object produce:
  -create an array of it's keys named produceKeys using Object.keys
  -create an array of it's values named produceValues using Object.values
-for each element in produceValues
  -if the value is equal to 'Fruit'
    -add a property to onlyFruit and use the current
     index position from produceKeys as the
     property name
    -store the value in the matching index position
     in produceValues in the newly created
     property on onlyFruit
-return onlyFruit
-call the function

Algorithm (pseudocode)
FUNCTION selectFruit(arg) {
  SET onlyFruit
  SET produceKeys = Object.keys(arg);
  SET produceValues = Object.values(arg);

  FOR (SET idx = 0; idx <= produceValues.length - 1; idx++) {
    IF (produceValues[idx] === 'Fruit') {
      onlyFruit[produceKeys[idx]] = produceValues[idx];
    }
    RETURN onlyFruit;
  }
}

PRINT selectFruit(produce)
*/

// let produce = {
//   apple: 'Fruit',
//   carrot: 'Vegetable',
//   pear: 'Fruit',
//   broccoli: 'Vegetable'
// };

// function selectFruit(arg) {
//   let onlyFruit = {};
//   let produceKeys = Object.keys(arg);
//   let produceValues = Object.values(arg);

//   for (let idx = 0; idx <= produceValues.length - 1; idx++) {
//     if (produceValues[idx] === 'Fruit') {
//       onlyFruit[produceKeys[idx]] = produceValues[idx];
//     }
//   }
//   return onlyFruit;
// }

// console.log(selectFruit(produce));

//==============================================================

//Can you implement a doubleNumbers function that mutates its argument?

// function doubleNumbers(numbers) {
//   let counter = 0;

//   while (counter < numbers.length) {
//     let currentNum = numbers[counter];
//     numbers[counter] = currentNum * 2;

//     counter += 1;
//   }

//   return numbers;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleNumbers(myNumbers)); // => [2, 8, 6, 14, 4, 12]
// console.log(myNumbers);                // => [2, 8, 6, 14, 4, 12]

//=============================================================

//Try coding a solution that doubles the numbers that have odd indices:



// function doubleOddNumbers(numbers) {
//   let doubledNums = [];

//   for (let counter = 0; counter < numbers.length; counter += 1) {
//     let currentNumber = numbers[counter];

//     if (counter % 2 === 1) {
//       doubledNums.push(currentNumber * 2);
//     } else {
//       doubledNums.push(currentNumber);
//     }
//   }

//   return doubledNums;
// }

// let myNumbers = [1, 4, 3, 7, 2, 6];
// console.log(doubleOddNumbers(myNumbers));  // => [2, 4, 6, 14, 2, 6]

// // not mutated
// console.log(myNumbers);                    // => [1, 4, 3, 7, 2, 6]

//==========================================================================

//Try coding a function that lets you multiply every array item by a specified value:

function multiply(numbers, multiplier) {
  let multipliedNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];
    multipliedNums.push(currentNumber * multiplier);
  }

  return multipliedNums;
}