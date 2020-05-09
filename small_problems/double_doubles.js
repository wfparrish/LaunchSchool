/*A double number is an even-length number whose left-side
digits are exactly the same as its right-side digits.

For example, 44, 3333, 103103, and 7676 are all double numbers,
whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument
multiplied by two, unless the argument is a double number;
return double numbers as-is.

Understanding the Problem
-input - a number that may be even or odd length
-output - a number
-rules/requirements
  -if the number is a double number, output the argument as is
  -if the number is not a double number, output the argument * 2

Examples
twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

Data Structures/Control Structures
-input - number
-output - number
-rules/requirements
  -if statement to determine number's length
  -array to hold the number for manipulation purposes
  -for statement to compare the index positions of the array for equality

Algorithm(plain english)
-declare a function named twice() that takes one argument, a number
-create a copy of the argument and convert the copy to a string
-determine the length of the copy
  -if the length is odd, multiply the argument by 2 and return
  -if the length is even:
    -split the string into an array
    -slice the array into two parts
    -compare the two halves
      -if the two halves are equal at each index position
        -return the original argument
      -else
        -multiply the original argument by 2 and return the new value
-call the function

Algorithm(pseudocode)
SET myNum = READ('Enter a number');
FUNCTION twice(num) {
  SET holder = num.TOSTRING();
  IF(holder.length() % 2 !== 0) {
    RETURN num * 2;
  } ELSE {
    SET numArr = holder.split('');
    SET halfArr1 = numArr.slice(0, numArr[(numArr.length()/2) - 1])
    SET halfArr2 = numArr.slice(numArr[(numArr.length()/2)], numArr.length - 1)
  }

  SET testEquality = (currentValue, i) => currentValue === halfArr2[i];
  IF(halfArr1.EVERY(testEquality)) {
    RETURN num
  }
  ELSE {
    RETURN num * 2
  }
}

twice(12345);
*/


let halfArr1;
let halfArr2;

function twice(myNum) {
  let holder = myNum.toString();
  if (holder.length % 2 !== 0) {
    console.log(myNum * 2);
    return;
  } else {
    let numArr = holder.split('');
    halfArr1 = numArr.slice(0, numArr.length / 2);
    halfArr2 = numArr.slice(numArr.length / 2, numArr.length);
  }

  let testEquality = (currentValue, index) => currentValue === halfArr2[index];

  if (halfArr1.every(testEquality)) {
    console.log(myNum);
  } else {
    console.log(myNum * 2);
  }
}

twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676
