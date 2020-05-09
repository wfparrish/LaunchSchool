/*
Understanding the Problem

Lizard Spock
This game is a variation on the Rock Paper Scissors game that
adds two more options - Lizard and Spock.

The goal of this bonus is to add Lizard and Spock to your game.

Understanding the Problem

-input - two new variables into the script
-output - two new potential winners of every round
-rules/ requirements
  -code for the additional logic must model:
  -scissors cuts paper
  -paper covers rock
  -rock crushes lizard
  -lizard poisons Spock
  -Spock smashes scissors
  -scissors decapitates lizard
  -lizard eats paper
  -paper disproves Spock
  -Spock vaporizes rock
  -rock crushes Scissors

Examples

  => Choose one: rock, paper, scissors
paper
=> You chose paper, computer chose rock
=> You win!
=> Do you want to play again (y/n)?

Data Structures/Control Structures
-input - an array to load the potential choices of the players
-output - a string
-rules/requirements
  - if statement to determine outcomes
  - while loop to parse user input

Algorithm (plain english)
-add 'spock' and 'lizard' to the VALID_CHOICES array
-add additional win scenarios for rock, paper, and scissors
  -rock crushes lizard
  -paper disproves Spock
  -scissors decapitates lizard
-add win scenarios for Spock
  -Spock smashes scissors
  -Spock vaporizes rock
-add loss scenarios for Spock
  -lizard poisons Spock
-add win scenarios for lizard
  -lizard eats paper
-add loss scenarios for lizard

Algorithm (pseudocode)
SET VALID_CHOICES = ['rock', 'paper', 'scissors', 'Spock', 'lizard];
IF((choice === 'rock' && computerChoice === 'scissors') ||
   (choice === 'rock' && computerChoice === 'lizard') ||
   (choice === 'paper' && computerChoice === 'rock') ||
   (choice === 'paper' && computerChoice === 'Spock') ||
   (choice === 'scissors' && computerChoice === 'paper') ||
   (choice === 'scissors' && computerChoice === 'lizard') ||
   (choice === 'Spock' && computerChoice === 'scissors') ||
   (choice === 'Spock' && computerChoice === 'rock') ||
   (choice === 'lizard' && computerChoice === 'Spock') ||
   (choice === 'lizard' && computerChoice === 'paper') {
      PROMPT('You win!');
   }
ELSE IF ((choice === 'rock' && computerChoice === 'paper') ||
         (choice === 'rock' && computerChoice === 'Spock') ||
         (choice === 'paper' && computerChoice === 'scissors') ||
         (choice === 'paper' && computerChoice === 'lizard') ||
         (choice === 'scissors' && computerChoice === 'rock') ||
         (choice === 'scissors' && computerChoice === 'Spock') ||
         (choice === 'Spock' && computerChoice === 'paper') ||
         (choice === 'Spock' && computerChoice === 'lizard') ||
         (choice === 'lizard' && computerChoice === 'scissors') ||
         (choice === 'lizard' && computerChoice === 'rock')) {
  PROMPT('Computer wins!');
} ELSE {
  PROMPT('It's a tie');
}


//-------------------------------------------------------------
Best of 5: 
Algorithm (plain english)
-in the global scope
  -declare and instantiate player = 0
  -declare and instantiate computer = 0
-while both player AND computer are < 5 run the code
  -if the player quits before 5, let them know they forfeit the match
-change the display winner function to RETURN string values
-store the RETURN values in a variable called outcome
-declare a function named checkOutcome() that takes outcome
 as it's argument
  -if outcome equals 'You win!'
    -increment player by 1
  -else if outcome equals 'Computer wins!'
    -increment computer by 1
  -else return nothing




*/


const readline = require('readline-sync');
const VALID_CHOICES = ['r', 'p', 's', 'S', 'l'];

function prompt(message) {
  console.log(`=> ${message}`);
}

function displayWinner (choice, computerChoice ) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'r' && computerChoice === 's') ||
   (choice === 'r' && computerChoice === 'l') ||
   (choice === 'p' && computerChoice === 'r') ||
   (choice === 'p' && computerChoice === 'S') ||
   (choice === 's' && computerChoice === 'p') ||
   (choice === 's' && computerChoice === 'l') ||
   (choice === 'S' && computerChoice === 's') ||
   (choice === 'S' && computerChoice === 'r') ||
   (choice === 'l' && computerChoice === 'S') ||
   (choice === 'l' && computerChoice === 'p')) {
    prompt('You win!');
  } else if ((choice === 'r' && computerChoice === 'p') ||
  (choice === 'r' && computerChoice === 'S') ||
  (choice === 'p' && computerChoice === 's') ||
  (choice === 'p' && computerChoice === 'l') ||
  (choice === 's' && computerChoice === 'r') ||
  (choice === 's' && computerChoice === 'S') ||
  (choice === 'S' && computerChoice === 'p') ||
  (choice === 'S' && computerChoice === 'l') ||
  (choice === 'l' && computerChoice === 's') ||
  (choice === 'l' && computerChoice === 'r')) {
    prompt('Computer win!');
  } else {
    prompt('It\'s a tie');
  }
}

while (true) {
  prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
  let choice = readline.question();

  while (!VALID_CHOICES.includes(choice)) {
    prompt('That\'s not a valid choice');
    choice = readline.question();
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter \'y\' or \'n\'.');
    answer = readline.question().toLowerCase();
  }

  if (answer[0] !== 'y') break;
}
