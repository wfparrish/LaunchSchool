//Code for node.js server and console

// let rlSync = require('readline-sync');
// let firstName = rlSync.question("What's your first name?\n");
// let lastName = rlSync.question("What's your last name?\n");

// function greeter(firstName, lastName) {
//     //uses argument to log Hello, {name}! to the console
//     console.log(`Hello, ${firstName + " " + lastName}!`)
// }

// greeter(firstName, lastName);

//---------------------------------------------------------------

//Code for modified version from function chapter. Runs in browser.
//For this to work the <script> tag needs to be under the <body> tag

function getName(text) {
    let name = prompt(text);
    return name;
}

let firstNameStore = getName('What is your first name');
let secondNameStore = getName('What is your second name');
let firstName2 = document.getElementById('firstName2');
let secondName2 = document.getElementById('secondName2');

firstName2.textContent = firstNameStore;
secondName2.textContent = secondNameStore;


console.log(`Your name is ${firstName2.textContent} ${secondName2.textContent}`)