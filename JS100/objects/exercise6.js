//This is my solution to the question:

// No, they do not produce the same output

// Object.keys() creates an array

// for...in creates a loop. Here each time it goes through the 
// loop it prints one key's string representation to the console
// This is not the same as an array

//-----------------------------------------------------------

// My solution was incorrect. If the code for the question assigned
// the value from Object.keys() to a variable, I might have been
// on a little bit of the right track, but no. 

// The solution involves the difference between printing all properties
// of an object, including properties it inherits from it's prototype,
// and only printing the properties of the object's "own" properties

// the first statement only prints the "own properties"
// the second statement, using for...in prints all properties, including 
// including properties inherited from the object's prototype