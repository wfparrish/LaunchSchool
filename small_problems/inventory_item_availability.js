/*
Building on the previous exercise, write a function that returns
true or false based on whether or not an inventory item is available.

As before, the function takes two arguments: an inventory item
and a list of transactions.

The function should return true only if the sum of the quantity
values of the item's transactions is greater than zero.

Notice that there is a movement property in each transaction object.
A movement value of 'out' will decrease the item's quantity.

Understanding the Problem
-input - a number and an array storing objects
-output - a boolean value
-rules/requirements
  -use a function
  -return true or false based on item availability
  -return true if the sum of the quantity values of the item's transactions
   is greater than zero
  -use movement property of the element objects to determine whether
   to add or subtract from the elements quantity

Examples / Test Cases

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
                  { id: 105, movement: 'in',  quantity: 10 },
                  { id: 102, movement: 'out', quantity: 17 },
                  { id: 101, movement: 'in',  quantity: 12 },
                  { id: 103, movement: 'out', quantity: 20 },
                  { id: 102, movement: 'out', quantity: 15 },
                  { id: 105, movement: 'in',  quantity: 25 },
                  { id: 101, movement: 'out', quantity: 18 },
                  { id: 102, movement: 'in',  quantity: 22 },
                  { id: 103, movement: 'out', quantity: 15 }, ];

isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true

Data Structures / Control Structures
-input - number, array
-output - boolean
-rules/requirements
  -some sort of looping structure
  -a conditional statement for adding or subtracting from total quantity

Algorithm (plain english)
-declare a function named isItemAvailable() that
 takes two arguments: a number and an array
 named numArg and arrArg
-declare a variable named totalQuantity and instantiate it to 0
-pass the values to the helper function
 transactionsFor and retrieve the results array
-for each element in the results array:
  -if the movement property's value is 'in'
   add the quantity property's value to totalQuantity
  -else subtract the quantity property's value from totalQuantity
-check the value of totalQuantity:
  -if totalQuantity is less than zero return false
  -else return true
-call the function

Algorithm (pseudocode)
FUNCTION isItemAvailable(numArg, arrArg) {
  SET totalQuantity = 0;
  SET results = transactionsFor(numArg, arrArg);
  FOR (SET idx = 0; idx <= results.LENGTH - 1; idx++) {
    IF (results[idx].movement === 'in') {
      totalQuantity += results[idx].quantity;
    } ELSE {
      totalQuantity -= results[idx].quantity;
    }
  }
  IF (totalQuantity < 0) {
    RETURN false
  }
  RETURN true;
}

PRINT(isItemAvailable(101, transactions));
PRINT(isItemAvailable(102, transactions));
PRINT(isItemAvailable(103, transactions));
PRINT(isItemAvailable(105, transactions));


*/

let transactions = [
  { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 },
];

function isItemAvailable(numArg, arrArg) {
  let totalQuantity = 0;
  let results = transactionsFor(numArg, arrArg);
  for (let idx = 0; idx <= results.length - 1; idx++) {
    if (results[idx].movement === 'in') {
      totalQuantity += results[idx].quantity;
    } else {
      totalQuantity -= results[idx].quantity;
    }
  }

  if (totalQuantity > 0) {
    return true;
  }
  return false;
}

function transactionsFor(idValue, transactionArr) {
  let results = transactionArr.filter(transaction => transaction.id === idValue);
  return results;
}

console.log(isItemAvailable(101, transactions));
console.log(isItemAvailable(103, transactions));
console.log(isItemAvailable(104, transactions));
console.log(isItemAvailable(105, transactions));
