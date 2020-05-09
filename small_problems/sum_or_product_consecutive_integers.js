let rlsync = require('readline-sync');
let userNum = rlsync.question('Please enter an integer greater than 0: ');
let operation = rlsync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

let storeSum = 0;
let storeProduct = 1;

for (let index = 1; index <= userNum; index++) {
  if (operation === 's') {
    storeSum += index;
  } else if (operation === 'p') {
    storeProduct *= index;
  }
}

let operSelected;

if (operation === 's') {
  operSelected = 'sum';
  console.log(`The ${operSelected} of the integers between 1 and ${userNum} is ${storeSum}`);
} else if (operation === 'p') {
  operSelected = 'product';
  console.log(`The ${operSelected} of the integers between 1 and ${userNum} is ${storeProduct}`);
}