// What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1)

/*
My answer: "hello there", because a string is a primitive and 
            the value of the string gets passed, not a reference
            to a memory location
*/