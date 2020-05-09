/*
Write a function that takes a positive integer, n, as an argument,
and logs a right triangle whose sides each have n stars.
The hypotenuse of the triangle (the diagonal side in the images below)
should have one end at the lower-left of the triangle,
and the other end at the upper-right.

Understanding the Problem
-input - a positive integer (n)
-output - a right sided triangle with two sides of length n
-rules/requirements
-use a function
-create a right triangle
-the sides of the triangle each have n stars
-the hypotenuese should start at the top-right and end
at the lower-left
-each row of the triangle will be one star larger
than the one above it


Data Structures / Control Structures
-input - number
-output - string
-rules/requirements
  -for loop
    -used for creating the strings that make the triangle

Algorithm (plain english)
-declare a function named triangle that takes one parameter
-declare three variables to create the triangle
  -space - used to create the negative spaces
  -star - used to create the filled in triangle
  -row - the string concated by space and star
-declare a nested for loop:
  -outer loop
    -loop condition: i <= n
    -for the length of the loop
      -the value of i will increase with each loop
      -log row to the console for each iteration cycle
      -the number of spaces will be n - i
      -the number of stars will be i
-run the function

Algorithm (pseudocode)

FUNCTION triangle(n) {
  SET space = ' ';
  SET star = '*';
  SET row = '';
  FOR (i = 1; i <= n; i++) {
      row += Repeat_the_space_variable(n - i);
      row += Repeat_the_star_variable(i);
      console.log(row)
  }
}
*/

function triangle(n) {
  let space = ' ';
  let star = '*';
  let row = '';
  for (let i = 1; i <= n; i++) {
    row += space.repeat(n - i);
    row += star.repeat(i);
    console.log(row);
    row = '';
  }
}

console.log(triangle(5));
console.log(triangle(9));

