//2. Lowercase----------------------------------------

// //First version
// console.log('Aloha, World!'.toLowerCase());

// //Second version with mutation comparison
// let string = 'Aloha, World!';
// console.log(string.toLowerCase())
// console.log(string)  //.toLowerCase() does not mutate the caller

//4. Array Element Access-----------------------------

// let myArray = ['fish', 'and', 'chips'];
// let holder = myArray[1];
// console.log(holder);

//5. Out of Bounds -----------------------------------

// let myArray = ['fish', 'and', 'chips'];
// let holder = myArray[10];
// console.log(myArray.length)
// myArray[10] = 'please!';
// console.log(myArray.length)
// console.log(holder);

//6. Property vs Method

// let trees = ['birch', 'pine', 'sequoia', 'palm tree'];
// console.log(trees[trees.length - 1]);
// console.log(trees.pop());
// console.log(trees[trees.length - 1]);

//7. Type of Primitive

// console.log(typeof 23.5);                //number
// console.log(typeof 'Call me Ishmael.');  //string
// console.log(typeof false);               //boolean
// console.log(typeof 0);                   //number
// console.log(typeof null);                //null
// console.log(typeof undefined);           //undefined

//8. Return Values

// let tweet = "I'm learning to program! Woooot :-) #javascript #launchschool";
// let words = tweet.split(' ');
// let isValid = tweet.length < 140;

// console.log(typeof tweet);      //string
// console.log(typeof words);      //object
// console.log(typeof isValid);    //boolean

//9. Method Chaining

// let tweet = 'Starting to get the hang of it... #javascript #launchschool';

// //What will the following statements evaluate to?
// tweet.split(' ');                       //object
// tweet.split(' ').reverse()              //object
// tweet.split(' ').reverse().join(' ');   //string

//10. Equality

// '8' == 8;           //true
// '8' === 8;          //false


//Reading Documentation 2-----------------------------

//11. Style Guide

// let ice_cream_taste = 'chocolate'
// let ice_cream_density = 10

// while(ice_cream_density > 0)
// {
//     console.log('Drip...');
//     ice_cream_density -= 1;
// }

// console.log('The '+ ice_cream_taste +' ice cream melted.');

//a. the constants are not ALL CAPS
//b. the constants are declared with let, not const
//c. the curly brace for the while loop should start on the same line as while condition
//d. the plusses after and before the quotes should have a space between
//   themselves and the adjacent characters
//e. there should be a space between the while keyword and the while condition

//12. Data Types

//Can you name all the data types in JavaScript?
//1. number
//2. string
//3. boolean
//4. null
//5. undefined
//6. symbol

//13. Largest Number

//What is the largest numeric value that can be represented in JavaScript?

// The MAX_VALUE property has a value of approximately 
//1.79E+308, or 21024. Values larger than MAX_VALUE are
// represented as Infinity.

// Because MAX_VALUE is a static property of Number, 
// you always use it as Number.MAX_VALUE, rather than as
// a property of a Number object you created. 

// console.log(Number.MAX_VALUE);

//14. Arithmetic Operator Precedence

//Q. What does 4 * 5 + 3 ** 2 / 10 evaluate to?
//A. 20.9

// console.log(4 * 5 + 3 ** 2 / 10)
// JS turns 9/10 into .9

//15. Date

//Q. Find out what Date.now() returns
// console.log("The number of milliseconds since 1/1/1970 is: " + Date.now());

//16. Which year is this?

// Q. What is the difference between .getYear() and .getFullYear()
// A. the number of digits used to represent the year in question
//    the documentation tells you to use getFullYear();

//17. Argument Signatures

//Q. How many arguments does the Array.prototype.join() method expect? What happens if you call it with less or more arguments?
//A. .join() expects one argument, a separator placed between each element.
//   the default separator if no argument is passed is a comma
//   if more than one argument is passed the second argument is ignored
// var a = ['Wind', 'Water', 'Fire'];
// console.log(a.join());      // 'Wind,Water,Fire'
// console.log(a.join(', ', '+ '));  // 'Wind, Water, Fire'

//18. String Concatenation

//Q. How can we join two or more strings together?

// A.
// console.log('dgdgd' + 'djfkdlskdfj');            //using the + sign
// console.log('dgdgd'.concat('djfkdlskdfj'));      //using .concat()
// console.log(['dgdgd','djfkdlskdfj'].join(''));   //using .join() on an array of strings

//19. Syntax Error

// let speedLimit = 60;
// let currentSpeed = 80;

// if ((currentSpeed > speedLimit) && ((currentSpeed - speedLimit) > 5)) {
//     console.log('"People are so bad at driving cars ' +
//     'that computers don\'t have to be that good to be much better." ' +
//     '-- Marc Andreessen');
// } 

//20. TypeError

// let tweet = 'Woohoo! :-)';
// let string = 'Uknowthatsright! :-)';

// if (tweet.length() > 140) {
//     console.log('Tweet is too long!');
// }

//Removing the () takes away the error. length is a property not a function

//21. Loop and Log

//I expect 0 2 4 6 8 10

// let i;
// for (i = 0; i <= 10; i += 2) {
//     console.log(i);
// };

//22. Countdown

// let i; 

// for (i = 10; i >= 0; i -= 1) {
//     if(i >= 1) {
//         console.log(i);
//     } else {
//         console.log('Launch!')
//     }
// };

//23. Triple Greeting

// let greeting = 'Aloha!';

// for (i = 0; i <= 2; i++) {
//     console.log(greeting);
// };

//24. Take Two

// for (i = 1; i <= 100; i++) {
//     console.log(i * 2);
// };

//25. Looping over Array Elements

// let array = [1, 2, 3, 4];
// let index = 0;

// while (index < 4) {
//     console.log(array[index])
//     index++;
// }

//26. Continue

// let cities = ['Istanbul', 'Los Angelos', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];

// for(let i = 0; i < cities.length; ++i) {
//     if(cities[i] === null) {
//         continue;
//     } else {
//         console.log(cities[i].length)
//     }
// }

//27. And on and on and on

// let i;

// for (i = 0; i < 1; i+= 1){
//     console.log("and on")
// }

//The loop continues infinitely because there is no terminating condition

//28. That's Odd

// let number = 1;

// while (number < 41) {
//     if (number % 2 === 1) {
//         console.log(number);
//     }
//     number++;
// }

//29. Finding Nemo

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];

// for (let i = 0; i < fish.length; i++) {
//     if (fish[i] === 'Nemo') {
//         break;
//     } else {
//         console.log(fish[i])
//     }
// }

//30. Do...While

// let counter1 = 0;

// while (counter1 > 0) {
//   console.log('Woooot!');
//   counter1 -= 1;
// }

// let counter2 = 0;

// do {
//   console.log('I am counter2: Woooot!');
//   counter2 -= 1;
// } while (counter2 > 0);

//The second counter performs the conditional statement 
//at least once because of the 'do' portion

//31. Truthy vs Falsy

//null
//undefined
//''
//false
//0
//I forgot ---> NaN

//32. Yes? No? Part 1

// let randomNumber = Math.round(Math.random());

// if (randomNumber === 1) {
//     console.log('Yes');
//     } else {
//     console.log('No');
// }

//33. Yes? No? Part 2(ternary operator)

// let randomNumber = Math.round(Math.random());

// console.log(randomNumber === 1 ? "Yes" : "No");

//34. Check the Weather, Part 1

// let weather = "sunny";

// if (weather === "sunny") {
//     console.log("It's a beautiful day!!!");
// } else if (weather === "rainy") {
//     console.log("Grab your umbrella!!!");
// } else {
//     console.log("Let's stay inside!!!")
// }

//35. Switch

//neigh should print to the console

// let animal = 'horse';

// switch (animal) {
//   case 'duck':
//     console.log('quack');
//   case 'squirrel':
//     console.log('nook nook');
//   case 'horse':
//     console.log('neigh');
//   case 'bird':
//     console.log('tweet tweet');
//   default:
//     console.log('*cricket*');
// }

//I was incorrect because I forgot to account for the 
//missing break statements.

//36. Check the Weather, Part 2

// let weather = 'sunny';

// switch(weather) {
//     case 'sunny':
//     console.log("It's a beauuuutiful day!");
//     break;
//     case 'rainy':
//     console.log("Bring your umbrella!");
//     break;
//     default:
//     console.log("Let's stay in.");
//     break;
// }

//37. Logical Conditions 1

// if (false || true ) {
//     console.log('Yes!');
// } else {
//     console.log('No...');
// }

//Yes, as either value satisfies the condtion, T or F

//38. Logical Conditions 2

// if (false && true) {
//     console.log('Yes!');
// } else {
//     console.log('No...');
// }

//No, as the && requires both condition values be true
//to resolve to true

//39. Logical Conditions 3

// let sale = true;
// let admissionPrice = !sale ? 5.25 : 3.99;

// console.log('$' + admissionPrice);

//3.99, as !sale will resolve to false

//40. Are we moving?

// let speed = 0;
// let acceleration = 24;
// let brakingForce = 19;

// let isMoving = brakingForce < acceleration && (speed > 0 || acceleration > 0);

// console.log(isMoving);

//Yes we are moving, and yes we need the parenthesis to make the logic work
//Surprised that the statement returns a boolean, but that makes since doesn't it?

//41. Sum

// function sum(num1, num2) {
//     console.log(num1 + num2);
//     return num1 + num2
// }

// sum(22, 10);

//42. Log Quote

// function brendanEichQuote() {
//     console.log('Always bet on JavaScript.')
// }

// brendanEichQuote();

//The return value is not null, but undefined

//43. Cite the Author

// let author = 'Brendan Eich';
// let quote = 'Always bet on JavaScript.';

// function cite(author, quote) {
//     console.log(`${author}` + ` said: ` + `${quote}`);
// }

// cite(author, quote);

//44. Squared Number

// function squaredNumber(num) {
//     console.log(num ** 2)
//     return num ** 2;
// }

// squaredNumber(10);

//45. Display division

// function multiplesOfThree() {
//     let divisor = 1;
//     let dividend;
  
//     for (dividend = 3; dividend <= 30; dividend += 3) {
//       console.log(dividend + ' / ' + divisor + ' = 3');
//       divisor += 1;
//     }
//   }
  
// multiplesOfThree;

//console.log(multiplesOfThree);
 //[Function: multiples of three]

 //46. Three-way comparison

//  function compareByLength(str1, str2) {
//      if (str1.length < str2.length) {
//          console.log(-1);
//          return -1;
//      } else if (str1.length > str2.length) {
//          console.log(1);
//         return 1;
//      } else {
//          console.log(0);
//         return 0;
//      } 
//  }

// compareByLength('patience', 'perseverance'); // -1
// compareByLength('strength', 'dignity');      //  1
// compareByLength('humor', 'grace');           //  0

//47. Transformation

// let string1 = 'Captain Ruby';
// let string2 = string1.replace('Ruby', 'JavaScript');
// console.log(string2);

//48. Internationalization 1

// function greet(langCode) {
//     switch(langCode) {
//         case 'en': 
//         console.log('Hi!');
//         break;
//         case 'fr': 
//         console.log('Salut!');
//         break;
//         case 'pt': 
//         console.log('Ola!');
//         break;
//         case 'de': 
//         console.log('Hallo!');
//         break;
//         case 'sv': 
//         console.log('Hej!');
//         break;
//         case 'af': 
//         console.log('Haai!');
//         break;
//     }
// }

// greet('af');

//49. Locale Part 1


// let regex = /[a-z]/g;
// function extractLanguage(locale) {
//     let found = locale.match(regex);
//     console.log(found.join(""));
//     return found;
// }

// extractRegion('en_US.UTF-8');  // 'en'
// extractRegion('en_GB.UTF-8');  // 'en'
// extractRegion('ko_KR.UTF-16'); // 'ko'

//50. Locale Part2

//My solution depends on the consistency of the region statements. They must
//be of the same form, where each country is defined by just 2 letters

// function extractRegion(locale) {
//     let found = locale.substring(3, 5);
//     console.log(found);
//     return found;
// }

// extractRegion('en_US.UTF-8');  
// extractRegion('en_GB.UTF-8');  
// extractRegion('ko_KR.UTF-16'); 

//The LaunchSchool solution uses implicit return statements to chain functions


// function extractRegion(locale) {
//     return locale.split('.')[0].split('_')[1];
    //There are 2 implicit return statements from the .split() calls,
    //and 1 explicit return that belongs to the function
// }
  
//   console.log(extractRegion('en_US.UTF-8'));
//   console.log(extractRegion('en_GB.UTF-8'));
//   console.log(extractRegion('ko_KR.UTF-16'));
  
//51. Internationalization 2

// function localGreet(locale) {
//     let language = extractLanguage(locale);
//     let region = extractRegion(locale);

//     switch (region) {
//         case 'US': 
//         console.log('Hey')
//         return 'Hey!';
//         case 'GB': 
//         console.log('Hello')
//         return 'Hello!';
//         case 'AU': 
//         console.log('Howdy')
//         return 'Howdy!';
//         default: return greet(language);
//     }
// }

// console.log(localGreet('en_US.UTF-8'));
// console.log(localGreet('en_GB.UTF-8'));
// console.log(localGreet('ko_KR.UTF-16'));


//52. What's my value?

// console.log(greeting);
// var greeting = "Hello world!";

//My 1st answer:
//It will log "Hello world!" to the screen because of hoisting in JS

//Correction answer:
//The declaration will hoist but the assignment of value
//will not. Therefore the greeting variable has a value of undefined

//53. What's my value? (Part 2)

// console.log(greeting);
// var greeting = "Hello world!";

//My 1st answer:
//It will log undefined because of the hoisting rules of JS

//Correction answer:
//a. You typed var greeting, not let greeting. Pay attention, difference is scope is big
//b. the let keyword does not allow variables that use it to hoist their declaration
//A ReferenceError will be thrown because greeting is not defined

//54. What's my value? (Part 3)

// if (true) {
//     let myValue = 20;
// }

// console.log(myValue);

//My answer: The scope of the myValue variable is block, so the console.log statement
//does not have access to the variable. The value is undefined.

//The correct answer: The compiler throws:
// ReferenceError: myValue is not defined

//55. What's my value? (Part 4)

// function myFunction() {
//     let a = 1;

//     if (true) {
//         console.log(a);
//     }
// }

// myFunction();

//My answer: This function will log to the console. The a variable is in a closure 
//with the console.log() method and is accessible to the console.log statement

//56. What's my value? (Part 5)

// function myFunction() {
//     let a = 1;

//     if (true) {
//         console.log(a);
//         let a = 2;
//         console.log(a);
//     }
// }

// myFunction();

//My answer: The console will print 1, then 2

//Correct answer: The use of the a variable depends on context. If the let a = 2 statement
// is removed from the code, there will be no error. The compiler will see a closure for
// the two console.log(a) statements. But you put in the let a = 2; in the block and the 
// rules of JS syntax require the compiler to look for let variables in the place they
// are declared (no hoisting). The let keywords change the lexical environment. For instance,
// if I use the var keyword the console.log(a) statments will print to the console as intended

// function myFunction() {
//     var a = 1;

//     if (true) {
//         console.log(a);
//         var a = 2;
//         console.log(a);
//     }
// }

// myFunction();

//57. What's my value (Part 6)

// let a = 5;
// let b = false;

// if (a > 4) {
//   let b = true;
// }

// console.log(b);

//My answer: b will log false, as let b == true is in block scope

//58. What's my value (Part 7)

// let a = 1;

// function myFunction() {
//   console.log(a);
// }

// myFunction(b);


//My answer is console.log() does have access to the variables in the lexical environment
// of myFunction(). Therefore the value of the variable a will be logged to the console.

//59. What's my value (Part 8)

//My answer: Here I am passing a reference by calling the function on b. a now holds a pointer
//to the memory location that b is assigned to. So the console will log 2

//60. What's my value (Part 9)
// const a = 1;

// function myFunction() {
//     a = 2;
// }

// myFunction(a);

//My answer: the function doesn't have parameters, does it take the argument? No.
// Also the function doesn't call console.log() and it doesn't have a return statement
// so I won't log anything.

//Correct answer: My answer + the compiler throws:
//TypeError: Assignment to constant variable

//61. What's my value? (Part 10) 

// const a = {
//     firstName: 'John',
//     lastName: 'Doe'
//   };
  
//   function myFunction() {
//     a.firstName = 'Jane';
//   }
  
//   myFunction();
  
//   console.log(a);

//My answer: the programmer may think const will keep the state of the object immutable.
// This is incorrect. (Object.freeze() will do the trick I believe, not sure how though)
// console.log(a) will show a.firstName as 'Jane' 

//62. Length

// let string = "These aren't the droids you're looking for."
// console.log(string.length);

//63. All CAPS

// let string = 'confetti floating everywhere';
// console.log(string.toUpperCase());

//64. Repeat

// let store = [];
// function repeat(times, string) {
//     for (i = 0; i < times; i++) {
//         store[i] = string;
//     }
//     console.log(store.join(""));
// }

// repeat(7, 'ha');

//65. Multiline String

// let string = "A pirate I was meant to be!\nTrim the sails and roam the sea!"
// console.log(string);

//My answer: user the \n operator

//66. Case-insensitive Equality

//My solution: bring them all to uppercase (or lowercase) and compare them

// let string1 = 'Polar Bear';
// let string2 = 'Polar bear';
// let string3 = 'Penguin';

// function checkEquality(string1, string2, string3) {
//     let str1 = string1.toUpperCase();
//     let str2 = string2.toUpperCase();
//     let str3 = string3.toUpperCase();

//     switch (str1) {
//         case str2:
//             console.log("String 1 is equal to String 2");
//             break;
//         case str3:
//             console.log("String 1 is equal to String 3");
//             break;
//     }

//     switch (str2) {
//         case str1:
//             console.log("String 2 is equal to String 1");
//             break;
//         case str3: 
//             console.log("String 2 is equal to String 3");
//             break;
//     }

//     switch (str3) {
//         case str2:
//             console.log("String 3 is equal to String 2");
//             break;
//         case str1: 
//             console.log("String 3 is equal to String 1");
//             break;
//     }
// }

// checkEquality(string1, string2, string3);

// LaunchSchool solution: Does not ask if string2 === string3. Mine does, which is
//one of the reasons my solution has redundant output. There is a way to fix it, but
//it would eat up too much time. No use in solving a problem they did not ask you to solve

//string1.toLowerCase() === string2.toLowerCase(); // true
//string1.toLowerCase() === string3.toLowerCase(); // false

//67. Contains Character

//  let byteSequence = 'TXkgaG92ZXJjcmFmdCBpcyBmdWxsIG9mIGVlbHMu';

// if (byteSequence.indexOf('X') >= 0) {
//     console.log("Found it!!!");
// } else {
//     console.log("Not here!!!")
// }

//68. Blank? Version 1

// function isBlank(val) {
//     if (val.length === 0) {
//         console.log(true);
//     } else {
//         console.log(false);
//     }
// }

// isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

//69. Blank? Version 2

// function isBlank(val) {
//     let outcome;
//     for (let i = 0; i < val.length; i++) {

//         if (val[i] !== ' ') {
//             outcome = false;
//             break;
//         } else {
//             outcome = true;
//             continue;
//         }
//     }
//     console.log(outcome);
// }

// isBlank('  c '); // false
// isBlank('   c'); // false
// isBlank('c   '); // false
// isBlank('  ');   // false
// isBlank('       ');     // true

//70. Capitalize Words

// let myString = 'launch school tech & talk';
// let myArray = [];
// let holder = '';
// myArray = myString.split(' ');
// for(let i = 0; i < myArray.length; i++) {
//     for(let j = 0; j < myArray[i].length; j++) {
//         //if the element in the first position in the string is a letter
//         if(myArray[i].charAt(j).match(/[a-z]/i)){
//             myArray[i] = myArray[i].charAt(j).toUpperCase() + myArray[i].slice(1);
//             myString = myArray.join(' ');
//             break;
//         } else {
//             continue;
//         }
//     }
// }

// console.log(myString);

//71. First Element

// function first(myArray) {
//     return arguments[0][0]
// }

// first(['Earth', 'Moon', 'Mars']);

//72. Last Element

// function last(myArray) {
//     console.log(myArray[myArray.length - 1])
//     return myArray[myArray.length - 1];
// }

// last(['Earth', 'Moon', 'Mars'])

//73. Add + Delete

// let energy = ['fossil', 'solar', 'wind', 'tidal', 'fusion'];
// energy.shift();
// energy.push('geothermal');
// console.log(energy);

//74. Alphabet

// let alphabet = 'abcdefghijklmnopqrstuvwxyz';
// alphabet = alphabet.split('')
// console.log(alphabet);

//75. Filter

// let scores = [96, 47, 113, 89, 100, 102];

// let count = scores.filter((score) => {
//     let counter = 0;
//     if(score >= 100) {
//         counter++;
//     }
//     return counter;
// })

// console.log(count.length);

//76. Vocabulary

// let vocabulary = [
//     ['happy', 'cheerful', 'merry', 'glad'],
//     ['tired', 'sleepy', 'fatigued', 'drained'],
//     ['excited', 'eager', 'enthused', 'animated']
//   ];

// for(let i = 0; i < vocabulary.length; i++) {
//     for(let j = 0; j < vocabulary[i].length; j++) {
//         console.log(vocabulary[i][j]);
//     }
// }

//77. Equality
/* It expect to see false, as the === operator will be comparing two objects.
    Object comparison in JS will be performed by reference to their memory locations,
    which are not the same. These are two seperate arrays in two locations in memory
*/

// let array1 = [2, 6, 4];
// let array2 = [2, 6, 4];

// console.log(array1 === array2);

//78. Type

// let input1 = [];
// let input2 ='dfghjk';

// function filter(input) {
//     //Is the input an array?
//     return Array.isArray(input);
// }

// console.log(filter(input1));
// console.log(filter(input2));

//79. Travel

// let destinations = ['Prague', 'London', 'Sydney', 'Belfast', 'Rome',
//   'Aruba', 'Paris', 'Bora Bora', 'Barcelona', 'Rio de Janeiro',
//   'Marrakesh', 'New York City'];

// function contains(str, arr) {
//     for (i = 0; i < arr.length; i++){
//         if(arr[i] === str) {
//             return console.log(true);
//         } 
//     }
//     return console.log(false);
// }

// contains('Barcelona', destinations); // true
// contains('Nashville', destinations); //false
// contains('New York City', destinations); //true

//80. Passcode

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
// console.log(passcode.join('-'));

//81. Checking items off the grocery list

// let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
// for(let i = groceryList.length; i > 0; i--) {
//     console.log(groceryList.shift());
// }

//82. Greet 1

// function greet(greeting = 'Hello') {
//     console.log(greeting + ', world!');
//   }
  
//   greet('Salutations'); // logs: Salutations, world!
  
//   greet();              // logs: undefined, world!
//                         // should log: Hello, world!

//83. Greet 2

// function greet(greeting = 'Hello', recipient = 'World') {
//     console.log(greeting + ', ' + recipient);
//   }

//     greet();                                // logs: Hello, world!
//     greet('Salutations');                   // logs: Salutations, world!
//     greet('Good morning', 'Launch School'); // logs: Good morning, Launch School!

//84. Greet 3

    // function greeting() {
    //     console.log('Good morning');
    //     return 'Good morning';
    // }
  
    // function recipient() {
    //     console.log('Launch School');
    //     return 'Launch School';
    // }

    // function greet() {
    //     greeting();
    //     recipient();
    // }

    // greet();

//85. Rest parameters

    // function sum(...values) {
    //     return values.reduce(function(a, b) {
    //     console.log(a+b)
    //     return a + b;
    //     });
    // }
  
    // sum(1, 4, 5, 6); // 16

//86. Spread operator

        // function formatName(firstName, middleName, lastName) {
        //     return `${lastName}, ${firstName} ${middleName[0]}.`;
        // }
  
        // fullName = ['James', 'Tiberius', 'Kirk'];
  
        // console.log(formatName(...fullName));

//87. Calculate BMI

// function calculateBMI(weightInKilograms, heightInCentimeters ) {
//     heightInMeters = heightInCentimeters / 100
//     let bmi = weightInKilograms / heightInMeters**2;
//     console.log(bmi.toFixed(2));
//     return bmi
// }

//88. Calculate Cat Age

// function catAge(humanYears) {
//     let catYears = 0;
//     if(humanYears == 1) {
//         catYears = 15;
//     }
//     else if(humanYears == 2) {
//         catYears = 24;
//     }
//     else if(humanYears > 2) {
//         catYears = (24 + (humanYears - 2) * 4)
//     }
//     console.log(catYears);
//     return catYears;
// }

// catAge(1); // 15
// catAge(2); // 24
// catAge(3); // 28
// catAge(4); // 32

//89. Remove Last Char

// function removeLastChar(string) {
//     string = string.split('')
//     string.pop();
//     string = string.join('')
// }

// removeLastChar('ciao!'); // 'ciao'
// removeLastChar('hello'); // 'hell'

//90. Arrow Functions (Part 1)

// const template = 'Can you believe I VERB NOUN.';

// let arrowFunc = (verb, noun) => {
//      return template
//     .replace('VERB', verb)
//     .replace('NOUN', noun);
// };

// console.log(arrowFunc('like', 'birds'))
// // logs: I like birds.

//91. Arrow Functions (Part 2)

// let initGame = () => {
//     return {
//       level: 1,
//       score: 0
//     }
//   };
  
//   let game = initGame();
  
//   console.log('Level: ' + game.level);
//   console.log('Score: ' + game.score);

// 92. Retrieve a Value (Part 1)

// let student = {
//     name: 'Carmen',
//     age: 14,
//     grade: 10,
//     courses: ['biology', 'algebra', 'composition', 'ceramics'],
//     gpa: 3.75,
//   };

//   console.log(student.courses)

// 93. Retrieve a Value (Part 2)

// let jane = {
//     firstName: 'Jane',
//     lastName: 'Harrelson',
//     age: 32,
//     location: {
//       country: 'Denmark',
//       city: 'Aarhus'
//     },
//     occupation: 'engineer',
//   }

//   console.log(jane.location.country)

// 94. Add a Property

// let fido = {
//     name: 'Fido',
//     species: 'Labrador Retriever',
//     color: 'brown',
//     weight: 16,
//   };

// fido['age'] = '77';
// fido["favorite food"] = 'dead squirrel';

// console.log(fido['favorite food'])

// 95. Greetings from Jane

// let jane = {
//     firstName: 'Jane',
//     lastName: 'Harrelson',
//     age: 32,
//     location: {
//       country: 'Denmark',
//       city: 'Aarhus'
//     },
//     occupation: 'engineer',
//     // add code here
//     greet: function(string) {
//         return 'Hej, ' + string + '!';
//     }
//   };
  
//   console.log(jane.greet('Bobby')); // Hej, Bobby!

// 96. Dot Notation vs Bracket Notation

//Both will have the same output  <-- Incorrect

//My incorrect logic below

// let ocean = {};
// let prefix = 'Indian';

// ocean.prefix = 'Pacific';

// console.log(ocean); // Ocean will return an object with one property prefix, with a 
                    // value of Pacific. But the prefix property would get it's value
                    // from line 4, not line 2

// let ocean = {};
// let prefix = 'Indian';

// ocean[prefix] = 'Pacific';

// console.log(ocean); // Here ocean[prefix] will get it's value from the prefix variable
                    // and will be changed by the assignment in line 4

//Correct answer
// The ocean[prefix] statement assigns a value to the key, not the property value
                    
// 97. Is it true?

// let obj = {
//     num: 42,
//     'property name': 'string value',
//     true: false,
//     fun: function() {
//       console.log('Harr Harr!');
//     },
//   }
  
//   for (prop in obj) {
//     if (prop === 'true') {
//       console.log("It's true!");
//     }
//   }

  //A. the for loop should be looking for 'true' (a string representing a key) not <true>,
  //   a boolean value.

// 98. Car Keys

// let vehicle = {
//     manufacturer: 'Tesla',
//     model: 'Model X',
//     year: 2015,
//     range: 295,
//     seats: 7
//   };

// let keys = [];

// for(let prop in vehicle) {
//     keys.push(prop)
// }

// console.log(keys)

// 99. Convert an object to a nested array

// let person = {
//     title: 'Duke',
//     name: 'Nukem',
//     age: 33
//   }

//   let personArray = [];
//   for(let prop in person) {
//       let holder = [];
//       holder[0] = prop;
//       holder[1] = person[prop];
//       personArray.push(holder)
//   }

//   console.log(personArray)

// 100. ...and vice versa

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];

// let person = Object.fromEntries(nestedArray);
// console.log(person)

// 101. Cloning a Person

// function clone(obj) {
//     let objCopy = Object.assign({}, obj);
//     return objCopy;
// }
  
//   let person = {
//     title: 'Duke',
//     name: 'Nukem',
//     age: 33
//   }
  
//   let clonedPerson = clone(person);
//   person.age = 34;
  
//   console.log(person.age);       // 34
//   console.log(clonedPerson.age); // 33

//THE END

//testing the WSL


