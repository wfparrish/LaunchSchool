function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }
  return true;
}

function isAnIpNumber(str) {
  if (!/^\d+$/.test(str)) return false;

  let number = Number(str);
  return number >= 0 && number <= 255;
}

let ip1 = '255.255.255.255';
let ip2 = '255.255.255.256';
let ip3 = '0.0.0.0.0';
let ip4 = '0.0.0';

console.log(isDotSeparatedIpAddress(ip1));
console.log(isDotSeparatedIpAddress(ip2));
console.log(isDotSeparatedIpAddress(ip3));
console.log(isDotSeparatedIpAddress(ip4));