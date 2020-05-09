function times(number1, number2) {
    let result = number1 * number2;
    console.log(result);
    return result;
  }

let number1 = 1;
let number2 = 1;

function factorial() {
    for(let i = 1; i <= 5; i++) {
      number1 = times(number1, number2);
      number2 = ++number2;
    }
}

factorial();