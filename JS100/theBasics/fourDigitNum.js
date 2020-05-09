let fourDigits = Math.random() * 10000;
const THOUSANDS = 1000;
const HUNDREDS = 100;
const TENS = 10;
const ONES = 1;

let num1 = Math.floor(fourDigits/THOUSANDS);
console.log('thousands place is ' + num1)
fourDigits = fourDigits % THOUSANDS;
let num2 = Math.floor(fourDigits/HUNDREDS);
console.log('hundreds place is ' + num2)
fourDigits = fourDigits % HUNDREDS;
let num3 = Math.floor(fourDigits/TENS);
console.log('tens place is ' + num3)
fourDigits = fourDigits % TENS;
let num4 = Math.floor(fourDigits/ONES);
console.log('ones place is ' + num4)

