//What do you think the following code will output?

let nanArray = [NaN];

console.log(nanArray[0] === NaN);

//My answer:
//false, since NaN is a numeric value (a number) in JavaScript

//Bonus: How can you reliably test if a value is NaN
//My answer: use Number.isNaN
console.log(Number.isNaN(nanArray[0]));