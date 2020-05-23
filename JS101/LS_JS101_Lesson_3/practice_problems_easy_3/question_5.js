//The following function unnecessarily uses two return statements
//to return boolean values. How can you eliminate the unnecessary duplication?

// function isColorValid(color) {
//   if (color === "blue" || color === "green") {
//     return true;
//   } else {
//     return false;
//   }
// }



// 1. Use a ternary expression

function isColorValid(color) {
  return color === 'blue' || color === 'green' ? true : false;
}

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('red'));

// 2. Use a variable

function isColorValid(color) {
    let outcome;
    if (color === "blue" || color === "green") {
      outcome = true;
    } else {
      outcome = false;
    }
    return outcome;
  }

console.log(isColorValid('blue'));
console.log(isColorValid('green'));
console.log(isColorValid('red'));