// Q. Does the following code produce an error? Why or why not? What output does this code send to the console?

for (let i = 0; i < 5; ) {
  console.log((i += 1));
}

// A. It does not produce an error. 
// I assume the option to increment in a for loop is 
// not mandatory, as long as the incrementation takes 
// place somewhere in the body of the loop. 
// It produces the numbers 1, 2, 3, 4, 5.