/* Write a function that will take a short line of text,
   and write it to the console log within a box.

Understanding the Problem
-input - a line of text
-output - a line of text in a box made of characters
-rules/requirements
  -use a function

Examples / Test Cases

logInBox('To boldly go where no one has gone before.');
will log on the console:

+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+

Data Structures / Control Structures
-input - string
-output - array, string
-rules/requirements
  -a for loop to determine the size of the box

Algorithm (plain english)
-declare an function named logInBox that has a str parameter
-declare ten variables and instantiate them to:
  -row1Head = `+-`;
  -row1Tail = `-+`;
  -row2Head = `| `;
  -row2Tail = ` |`;
  -row3Head = `| `;
  -row3Tail = ` |`;
  -row4Head = `| `;
  -row4Tail = ` |`;
  -row5Head = `+-`;
  -row5Tail = `-+`;
-create a for loop
  -for each iteration of the loop concat characters to the Head variables
-at the end concat the Tails to the Heads
-return the Heads variables
-call the function

Algorithm (pseudocode)
FUNCTION logInBox(str) {
  SET row1Head = `+-`;
  SET row1Tail = `-+`;
  SET row2Head = `| `;
  SET row2Tail = ` |`;
  SET row3Head = `| `;
  SET row3Tail = ` |`;
  SET row4Head = `| `;
  SET row4Tail = ` |`;
  SET row5Head = `+-`;
  SET row5Tail = `-+`;

  FOR (i = 0; i <= str.length; i++) {
    row1Head += '-';
    row2Head += ' ';
    row3Head += str[i];
    row4Head += ' ';
    row5Head += '-';
  }
  PRINT row1Head + row1Tail;
  PRINT row2Head + row2Tail;
  PRINT row3Head + row3Tail;
  PRINT row4Head + row4Tail;
  PRINT row5Head + row5Tail;
}
*/

function logInBox(str) {
  let row1Head = `+-`;
  let row1Tail = `-+`;
  let row2Head = `| `;
  let row2Tail = ` |`;
  let row3Head = `| `;
  let row3Tail = ` |`;
  let row4Head = `| `;
  let row4Tail = ` |`;
  let row5Head = `+-`;
  let row5Tail = `-+`;

  for (let i = 0; i <= str.length - 1; i++) {
    row1Head += '-';
    row2Head += ' ';
    row3Head += str[i];
    row4Head += ' ';
    row5Head += '-';
  }

  console.log(row1Head + row1Tail);
  console.log(row2Head + row2Tail);
  console.log(row3Head + row3Tail);
  console.log(row4Head + row4Tail);
  console.log(row5Head + row5Tail);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');