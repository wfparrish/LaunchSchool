/*
Write a function that determines the mean (average) of the three scores
passed to it, and returns the letter associated with that grade.

Numerical score letter grade list:

90 <= score <= 100: 'A'
80 <= score < 90: 'B'
70 <= score < 80: 'C'
60 <= score < 70: 'D'
0 <= score < 60: 'F'
Tested values are all between 0 and 100. There is no need to check
for negative values or values greater than 100.

Understanding the Problem
-input - three numbers
-output - a letter grade
-rules/requirements
  -the three numbers must be greater than or equal to 0
  -the three numbers must be greater than or less than 100
  -the average value must be determined
  -a letter grade associated with the value must be returned

Examples
getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

Data Structures/ Control Structures
-input - number
-output - string
-rules/requirements
  -use a switch to parse the grade(break statements)

Algorithm(plain english)
-declare a function that takes in three parameters,
  -score1
  -score2
  -score3
-declare the mean score and initialize it to
  score = score1 + score2 +score3;

-declare a switch statement to parse the grade
  switch (score) {
    case 90 <= score <= 100: 'A'
      console.log('A);
      break;
    case 80 <= score < 90: 'B'
      console.log('B');
      break;
    case 70 <= score < 80: 'C'
      console.log('C');
      break;
    case 60 <= score < 70: 'D'
      console.log('D');
      break;
    default 0 <= score < 60: 'F'
      console.log('F');
  return
  }

Algorithm in pseudocode
FUNCTION final_grade(scr1, scr2, scr3) {
  SET score = (scr1 + scr2 + scr3)/3;
  SWITCH (TRUE) {
    CASE 90 <= score <= 100: 'A'
      RETURN 'A';
      break;
    CASE 80 <= score < 90: 'B'
      RETURN 'B';
      break;
    CASE 70 <= score < 80: 'C'
      RETURN 'C'
      break;
    CASE 60 <= score < 70: 'D'
      RETURN 'D'
      break;
    DEFAULT 0 <= score < 60: 'F'
      RETURN 'F'
  }
}
*/

//This function does not return anything (undefined)
function getGrade(scr1, scr2, scr3) {
  let score = (scr1 + scr2 + scr3) / 3;
  switch (true) { //the switch does the evaluating, so put T or F here
    case (score < 60): //the case is WHAT the switch is evaluating
      console.log('F');
      break;
    case (score < 70):
      console.log('D');
      break;
    case (score < 80):
      console.log('C');
      break;
    case (score < 90):
      console.log('B');
      break;
    case (score >= 90):
      console.log('A');
      break;
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"
getGrade(72, 76, 79);    // "C"
getGrade(70, 70, 70);    // "C"
getGrade(23, 18, 45);    // "F"

//https://stackoverflow.com/questions/3463833/expression-inside-switch-case-statement