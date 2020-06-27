/*
Pick out the minimum age from our current Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Understanding the Problem
-input - an object with key/value pairs of names and ages
-output - the lowest value age
-rules/requirements
  -select the lowest age from the collection of ages

Examples

findLowestAge(ages)   // 10

Data Structures / Control Structures
-input - object
-output - number
-rules/requirements
  -looping structures

Algorithm (plain english)
-declare function that takes an object agesObj as a parameter
-convert the values in agesObj into an array named agesArr
-sort the array and return the first index
-call the function

Algorithm (pseudocode)

SET ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

FUNCTION findLowestAge(agesObj) {
  SET lowestAge;
  SET agesArr;
  agesArr = Object.VALUES(ageObj);
  agesArr.SORT((a, b) => {return a - b});
  return agesArr[0];
}

PRINT(findLowestAge(ages));
*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

function findLowestAge(agesObj) {
  let agesArr;
  agesArr = Object.values(agesObj);
  agesArr.sort((a, b) => {
    return a - b;
  });
  return agesArr[0];
}


console.log(findLowestAge(ages));

