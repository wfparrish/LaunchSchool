
function isOdd(num) {
  let remainder = null;

  if (num > 0) {
    remainder = num % 2;
    if (remainder === 0) {
      return false;
    }
    if (remainder !== 0) {
      return true;
    }
  } else if (num < 0) {
    num *= -1;
    remainder = num % 2;
    if (remainder === 0) {
      return false;
    }
    if (remainder !== 0) {
      return true;
    }
  }
  return false;
}

console.log(isOdd(2));
console.log(isOdd(5));
console.log(isOdd(-17));
console.log(isOdd(8));
console.log(isOdd(0));
console.log(isOdd(7));