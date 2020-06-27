/*

Write a function that takes two arguments, inventoryItem and transactions,
and returns an array containing only
the transactions for the specified inventoryItem.

Understanding the Problem
-input - a number and an array storing objects
-output - an array storing objects
-rules/requirements
  -use a function
  -return an array of objects
    -the objects will be selected by the inventoryItem argument
    -the objects in the array passed as output will all share the
     same inventoryItem value

Example

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

transactionsFor(101, transactions);

// returns
// [ { id: 101, movement: "in",  quantity:  5 },
//   { id: 101, movement: "in",  quantity: 12 },
//   { id: 101, movement: "out", quantity: 18 }, ]\

Data Structures / Control Structures
-input - number, array
-output - array
-rules/requirements
  -a looping structure
    -array methods with implicit looping

Algorithm (plain english)
-declare a function transactionsFor() that takes two arguments,
 idValue and transactionArr
-filter the array
  -return every element of the array that has an id value that matches
   the idValue's value

Algorithm (pseudocode)
FUNCTION transactionsFor(idValue, transactionArr) {
  let results = transactionArr.FILTER(transaction => transaction.id !== idValue);
  return results;
}

PRINT(transactionsFor(101, transactions));

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

function transactionsFor(idValue, transactionArr) {
  let results = transactionArr.filter(transaction => transaction.id === idValue);
  return results;
}

console.log(transactionsFor(101, transactions));
