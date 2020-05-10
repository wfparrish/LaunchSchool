// What will the following code output?

console.log(false == '0');    //true
console.log(false === '0');   //false

/* 
console.log(false == '0')
Type coercion converts our 0 to false
Strict equality says false !== '0'
*/