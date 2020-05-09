/* 
Write a function that computes the sum of all numbers between
1 and some other number, inclusive, that are multiples of 3 or 5.
For instance, if the supplied number is 20,
the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.

Understanding the Problem
-input - arbitrary number greater than 1
-output - number which is a sum of numbers
-rules/requirements
  -write the code as a function
  -sum composed of multiples of 3 and 5 and arbitrary number
  -the multiples of 3 and 5 are from a series of numbers
  -the number passed in is greater than 1

Examples Test Cases
multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

Data Structures/Control Structures
-input - number
-output - number
-rules
  -conditional statement
  -loop statement

Algorithm(plain english)
//Given an arbitrary number
-declare a counter variable
-declare a sum variable
-declare myNum
-while the counter is less than or equal to myNum
  -if counter MOD 3 === 0 OR counter MOD 5 === 0
    -increment sum by counter value
    -increment the counter by 1
-continue the loop
-at the end of looping condition increment sum by myNum
-call the function

ALGORITHM(psuedocode)

FUNCTION multiSum(myNum) {
  SET counter = 1
  SET sum = 0
  WHILE (counter <= myNum) {
    IF (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter
    }
    counter += 1
  }
  RETURN sum = sum + myNum
}

multisum(randomNumber)
*/ 

function multiSum(myNum) {
  let counter = 1;
  let sum = 0;
  while (counter < myNum) {
    if (counter % 3 === 0 || counter % 5 === 0) {
      sum += counter;
    }
    counter += 1;
  }
  return sum = sum + myNum;
}

console.log(multiSum(3));       // 3
console.log(multiSum(5));       // 8
console.log(multiSum(10));      // 33
console.log(multiSum(11));
