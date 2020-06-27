/*
Add up all of the ages from the Munster family object:

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};

Understanding the Problem
-input - an object with key/value pairs
-output - a number that is the sum of values in the object
-rules/requirements
  -sum the values for the properties in the object
  -return the sum

Examples
sumAges(ages)   //6174

Data Structures / Control Structures
-input - object
-output - number
-rules/requirements
  -a looping structure

Algorithm (plain english)
-declare a function named sumAges that takes an object ageHash as parameter
-declare a variable named sum and instantiate to 0
-convert the values of the object into an array of ages named agesArr
-for each element of agesArr, add the value to sum
-return sum
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

FUNCTION sumAges(ageHash) {
  SET sum = 0;
  SET agesArr = OBJECT.VALUES(ages);
  agesArr.FOREACH((age) => {
    sum += age;
  });
  RETURN sum;
}

PRINT(sumAges(ages))

*/

let ages = {
  Herman: 32,
  Lily: 30,
  Grandpa: 5843,
  Eddie: 10,
  Marilyn: 22,
  Spot: 237
};


function sumAges(ageHash) {
  let sum = 0;
  let agesArr = Object.values(ageHash);
  agesArr.forEach((age) => {
    sum += age;
  });
  return sum;
}

console.log(sumAges(ages));