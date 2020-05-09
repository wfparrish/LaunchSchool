// Q. Code that creates an infinite loop. Why?

let counter = 0;

while ((counter = 1)) {
  console.log(counter);
  counter += 1;

  if (counter > 2) {
    break;
  }
}

// A. the counter parameter is being re-assigned the value of 1 each time the loop begins a cycle.
// Although the counter variable is incremented, it's value is replaced with 1 in the next statement.
//