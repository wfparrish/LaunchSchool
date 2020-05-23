/*
Consider the following object:

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

Create an array from this object that contains only two elements:
Barney's name and Barney's number:

[ 'Barney', 2 ]

Understanding the Problem
-input - a JS object with multiple key/value pairs
-output - an array that contains the requested key/value pair
-rules/requirements
  -the array must only contain the desired key/value pair, nothing else
  -the key is to be returned as a string
  -the value is to be returned as a number
  -assume that all the keys of the object are unique

Examples / Test Cases

getMemberInfo(flintstones)    // [ 'Barney', 2 ]

Data Structures / Control Structures
-input - object
-output - array
-rules/requirements
  -JS methods for manipulating arrays
  -JS methods for manipulation objects
  -JS methods for looping through arrays

Algorithm (plain english)

-declare a method named getMemberInfo() that takes an object as an argument
-in the body of the getMemberInfo() method declare memberInfo variable
-assign the entries of the argument object to the memberInfo array
  -memberInfo will become a nested array
  -each key/value pair of the argument object will be an array in the
   memberInfo array
-for each nested array in the memberInfo array:
  -if the first element of the inner array is equal to 'Barney'
    -return the inner array
-call the function

Algorithm (pseudocode)

FUNCTION getMemberInfo(memberObj) {
  SET memberInfo;
  memberInfo = memberObj.ENTRIES();
  memberInfo.FOREACH((arr, idx) => {
    if (arr[0] === 'Barney') {
      return memberInfo[idx];
    }
  })
}

getMemberInfo(flintstones)
*/

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

function getMemberInfo(memberObj) {
  let memberInfo;
  let selectedMember;
  memberInfo = Object.entries(memberObj);
  memberInfo.forEach((arr) => {
    if (arr[0] === 'Barney') {
      selectedMember = arr;
    }
  });
  return selectedMember;
}

console.log(getMemberInfo(flintstones));