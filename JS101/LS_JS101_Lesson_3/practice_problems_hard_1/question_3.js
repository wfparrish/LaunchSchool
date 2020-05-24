
/* Part 1

function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

Here the global scope is in charge:
["one"]
["two"]
["three"]  <====Incorrect

Although they are, in fact array objects, the console returns:
one is: one
two is: two
three is: three

*/


/*

*/

// function messWithVars(one, two, three) {
//   one = ["two"];
//   two = ["three"];
//   three = ["one"];
// }

// let one = ["one"];
// let two = ["two"];
// let three = ["three"];

// messWithVars(one, two, three);

// console.log(`one is: ${one}`);
// console.log(`two is: ${two}`);
// console.log(`three is: ${three}`);

/*
We still go to the global scope to get the values
one
two
three
*/


function messWithVars(one, two, three) {
  one.splice(0, 1, "two");
  two.splice(0, 1, "three");
  three.splice(0, 1, "one");
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

/*
one
two
three     //<====Incorrect

The reason the first two do not change the value of one, two, three is because
all they do is reassign the local variables, which shadow the global variables
anyway. But the third example mutates the global variables, not reassignment.

*/