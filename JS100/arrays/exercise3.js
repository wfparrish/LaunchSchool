let myArray = [
    [1, 3, 6, 11],
    [4, 2, 4],
    [9, 17, 16, 0],
];

// My solution:

// for( let i = 0; i <= myArray.length - 1; i++){
//     for( let j = 0; j <= myArray[i].length - 1; j++) {
//         if (myArray[i][j] % 2 === 0 && myArray[i][j] !== 0) {
//             console.log(myArray[i][j]);
//         }
//     }
// }

//The LaunchSchool version

myArray.forEach(function(nestedArray) {
    nestedArray.forEach(function(value) {
      if (value % 2 === 0) {
        console.log(value); // => 6, 4, 2, 4, 16, 0
      }
    });
  });

// This works because the forEach method, like all methods in JS, can accept
// primitives, objects, arrays, etc... you can pass anything as an argument
// except for undefined (I think?) So the outer loop takes each one of the 
// nested arrays and passes it into a variable. That variable now holds an
// array that can be called by name, and the methods of that array can be 
// directly called, including forEach();

