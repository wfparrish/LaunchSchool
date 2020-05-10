// Q. Will the code below raise an error?

// let numbers = [1, 2, 3];
// numbers[6] = 5;

// A. No, the array will be created with "empty spaces" in the array
//    for the missing array elements.

//---------------------------------------------------------

// Q. what will this line return? ====> numbers[4];


// A.
// let numbers = [1, 2, 3];
// numbers[6] = 5;

// console.log(numbers[4]);

// The numbers[4] returns undefined, but ACTUALLY the slot is empty.
// It doesn't have a value, not even undefined in spite of what the 
// line returns.

//------------------------------------------------------------

