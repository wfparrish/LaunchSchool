let rlSync = require('readline-sync');
let number1 = Number(rlSync.question('Enter the first number\n'));
let number2 = Number(rlSync.question('Enter the second number\n'));

let multiplier = {
    multi : function (number1, number2) {
        let product = number1 * number2;
        console.log(`${number1} * ${number2} = ${product}`);
    }
}

multiplier.multi(number1, number2);