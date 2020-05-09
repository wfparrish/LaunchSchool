let rlSync = require('readline-sync');
let myAge = rlSync.question("How old are you? ");

function ageCalc (myAge) {
    let counter = 10;
    console.log(`You are ${Number(myAge)} years old.`);
    
    for (let i = 0; i <= 3; i++) {
        console.log(`In ${counter} years, you will be ${Number(myAge) + counter} years old.`);
        counter += 10;
    }
}

ageCalc(myAge);

console.log("this is only a test")