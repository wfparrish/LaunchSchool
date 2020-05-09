function factorialRecursive(number) {
    let sum;
    if (number === 0 || number == 1) {
        return 1;
    }

    else {
        sum = factorialRecursive(number - 1) * number;
        
    }
    return sum;
}

console.log(factorialRecursive(0));
console.log(factorialRecursive(1));
console.log(factorialRecursive(2));
console.log(factorialRecursive(3));
console.log(factorialRecursive(4));
console.log(factorialRecursive(5));
console.log(factorialRecursive(6));
console.log(factorialRecursive(7));
console.log(factorialRecursive(8));
console.log(factorialRecursive(9));
console.log(factorialRecursive(10));
console.log(factorialRecursive(11));
console.log(factorialRecursive(12));
console.log(factorialRecursive(13));
console.log(factorialRecursive(14));
console.log(factorialRecursive(15));
console.log(factorialRecursive(16));
console.log(factorialRecursive(17));
console.log(factorialRecursive(18));
console.log(factorialRecursive(19));
console.log(factorialRecursive(20));
