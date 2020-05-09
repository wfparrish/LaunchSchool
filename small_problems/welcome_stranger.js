/* Create a function that takes 2 arguments, an array and an object.
The array will contain 2 or more elements that, when combined with
adjoining spaces, will produce a person's name. The object will contain
two keys, "title" and "occupation", and the appropriate values.

Your function should return a greeting that uses the person's full name,
and mentions the person's title.

Understanding the Problem
-inputs
  -array
  -object
-output
  -string
-rules/requirements
  -a function that takes two arguments
  -an array with two or more elements
  -an object with specified keys
  -return a greeting that uses
    -the full name of the person
    -the title of the person
    -the occupation of the person

Examples/Test Cases
console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);

// Hello, John Q Doe! Nice to have a Master Plumber around.

Data Structures / Control Structures
-input - array, object
-output - string


Algorithm(plain English)
-declare a function named greetings that takes
 two parameters for an array and an object
-print a statement that uses the values in the passed data structures
  -for the array, use the index positions as values in the statement
  -for the object, use key strings and the key values
-log the statement to the console
-call the function

Algorithm(psuedocode)
FUNCTION greetings(arr, obj) {
  PRINT('Hello, arr[0] + " " + arr[1] + " " + arr[2] + "! " +
        "Nice to have a " + obj[title] + " " + obj[occupation] + " around.")
}
*/

function greetings(arr, obj) {
  return `Hello, ${arr[0]} ${arr[1]} ${arr[2]}! Nice to have a ${obj['title']} ${obj['occupation']} around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);