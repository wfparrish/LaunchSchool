//Method calls can take expressions as arguments.
//Suppose we define a function called rps as follows,
//which follows the classic rules of the rock-paper-scissors game,
//but with a slight twist: in the event of a tie,
//it awards the win to the first of the two fists.

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
//What is the result of the following call?
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));

//---------------------------------------------------------------

/* My first answer:
The call should fail because the case of

if (fist1 === "rock") {
  return fist2 === "scissors" ? "scissors" : "rock"
}

is never addressed, and the remaining else if and else statement dont
cover the scenario either

//-----------------------------------------------------------------------

My second answer:
 1. the call goes to paper for fist1 on the left
 2. on the right side rock/scissors fist2 gets checked to see if it is "paper",
 an error in the code. Since it is false, fist2 is rock
 3. paper beats rock cascades through the code
 output ==> paper

*/
