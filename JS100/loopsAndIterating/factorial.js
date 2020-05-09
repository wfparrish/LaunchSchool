
function factorial (number) {
    if(number === 0 || number === 1) {
        return 1;
    }

    for (let fact = number - 1; fact > 0; fact--) {
         number = number * fact;
    }
    return number;
}


console.log(factorial(0));
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(7));
console.log(factorial(8));
console.log(factorial(9));
console.log(factorial(10));
console.log(factorial(11));
console.log(factorial(12));
console.log(factorial(13));
console.log(factorial(14));
console.log(factorial(15));
console.log(factorial(16));
console.log(factorial(17));
console.log(factorial(18));
console.log(factorial(19));
console.log(factorial(20));
console.log(factorial(21));
console.log(factorial(22));     //Here JS switches to scientific notation


// My code is not as sophisticated as the LaunchSchool solution
// which depends upon factorial(0) not meeting the loop
// condition set on the first iteration, thereby returning
// 1.