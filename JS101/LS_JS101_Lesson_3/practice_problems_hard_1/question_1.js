//Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

/*
My answer: The first will return an object literal with a property defined
The second will return undefined, because the object is 
started on a new line. The compiler adds it's own semi-colon
to the return statement. The function will never reach that object when
function is called.
*/