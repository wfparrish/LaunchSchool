/*
Back in the stone age (before CSS), we used spaces to align things
on the screen.

If we have a 40-character wide table of Flintstone family members,
how can we center the following title above the table with spaces?

let title = "Flintstone Family Members";

Understanding the Problem
-input - a title to a table composed of characters
-output - a title prepended by spaces
-rules/requirements
  -the spaces in front of the title should 'center' the title
   over the table
  -if the centering cannot be perfect because of an even/odd mismatch
   ignore the 'off-by-one' centering issue

Examples / Test Cases
--------------->Flintstone Family Members<---------------
where '-' represents spaces on the left and right of the table

Data Structures / Control Structures
input - string
output - string

Algorithm (plain english)
-declare a function makeCentered() that takes a title string as an argument
-given the width of the table as an integer
  -prepend spaces to the front of the title
    -the number of spaces will be equal to:
      -(table width minus title length) divided by 2
-return the title with prepended spaces
-call the function

Algorithm (pseudocode)
FUNCTION makeCentered(strTitle) {
  SET tableWidth = 40;
  RETURN strTitle = ' '.REPEAT((tableWidth - strTitle.LENGTH)/2)
                       .CONCAT(strTitle)
}

PRINT(makeCentered(title));
*/

let title = "Flintstone Family Members";


function makeCentered(strTitle) {
  let tableWidth = 40;
  strTitle = ' '.repeat((tableWidth - strTitle.length) / 2).concat(strTitle);
  return strTitle;
}

console.log(makeCentered(title));