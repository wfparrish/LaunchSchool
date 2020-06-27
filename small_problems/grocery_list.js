/*
Write a function that takes a grocery list (a two-dimensional array)
with each element containing a fruit and a quantity, and returns
a one-dimensional array of fruits, in which each fruit appears a
number of times equal to its quantity.

Understanding the Problem
-input - a list as a two-dimensional array 
-output - a one dimensional array
-rules/requirements
  -use a function
  -flatten a 2D array into a 1D array
  -flatten the array into a redundant state
  -repeat each string as many times as it's associated quantity value

Example:

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"];

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -a looping structure to iterate over the input
  
Algorithm (plain english)
-declare a function named buyFruit that takes a 2D array as argument
-declare a variable named eachFruitStr
-declare a variable named eachFruitArr
-declare an array named redundantList
-declare an array named filteredList
-for each array element in the parent array
  -append a space to each array element string
  -repeat the string value quantity value times and store in eachFruitStr
  -split eachFruitStr into eachFruitArr on ' '
  -spread eachFruitArr into redundantList by pushing
  -filter out empty spaces in the array
-return filteredList array
-call the function

Algorithm (pseudocode)
FUNCTION buyFruit(groceryList) {
  SET eachFruitStr
  SET eachFruitArr
  SET redundantList
  FOR (SET idx = 0; idx <= groceryList.LENGTH - 1; idx++) {
     groceryList[idx][0] = groceryList[idx][0] + ' ';
     eachFruitStr = groceryList[idx][0].REPEAT(groceryList[idx][1]);
     eachFruitArr = eachFruitStr.SPLIT(" ");
     redundantList.PUSH(...eachFruitArr);
     filteredList = redundantList.FILTER((element) => {
       return element != '';
    });
  }
  RETURN redundantList;
}

*/

function buyFruit(groceryList) {
  let eachFruitStr 
  let eachFruitArr = [];
  let redundantList = [];
  let filteredList;
  for (let idx = 0; idx <= groceryList.length - 1; idx++) {
    groceryList[idx][0] = groceryList[idx][0] + ' ';
    eachFruitStr = groceryList[idx][0].repeat(groceryList[idx][1]);
    eachFruitArr = eachFruitStr.split(' ');
    redundantList.push(...eachFruitArr);
    filteredList = redundantList.filter((element) => {
      return element != '';
    });
  }
  return filteredList;
}

console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));

