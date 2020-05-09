
// Q. Eliminate the multiple randomNumberBetween calls

// function randomNumberBetween(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let tries = 1;
// while ((result = randomNumberBetween(1, 6)) <= 2) {
//   tries += 1;
// }

// console.log(
//   "It took " + String(tries) + " tries to get a number greater than 2"
// );

// If we perform the assignment of the variable in the 
// condition, and use the result to compare to the limiting 
// condition of 2, and we initialize the value of tries to 1, 
// then we can create the desired effect. this is different than the LaunchSchool 
// solution, which involves adding do to the while loop. I like my solution more, heh heh. 

// The problem here is obviously that the code is not clear. Why would the variable
// tries be initialized to 1 before the first roll of the "die"?

// What I didn't know was that both do and while can hold content
// in their bodies, and that a loop can return to the do portion
// to read and perform the stated code. 

//Here is the LaunchSchool solution:

function randomNumberBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  let tries = 0;
  let result;

  do {
    result = randomNumberBetween(1, 6);
    tries += 1;
  } while (result <= 2);

  console.log('It took ' + String(tries) + ' tries to get a number greater 2');


