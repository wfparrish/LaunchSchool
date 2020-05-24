/*
Alyssa was asked to write an implementation of a rolling buffer.
You can add and remove elements from a rolling buffer.
However, once the buffer becomes full, any new elements
will displace the oldest elements in the buffer.

She wrote two implementations of the code for adding elements to the buffer.
In presenting the code to her team leader, she said "Take your pick.
Do you prefer push() or concat() for modifying the buffer?".

Is there a difference between these implementations,
other than the method she used to add an element to the buffer?

*/

function addToRollingBuffer1(buffer, maxBufferSize, newElement) {
  buffer.push(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

function addToRollingBuffer2(buffer, maxBufferSize, newElement) {
  buffer = buffer.concat(newElement);
  if (buffer.length > maxBufferSize) {
    buffer.shift();
  }
  return buffer;
}

//Bonus
//The buffers are arrays. Using push() if the newElement is an array will add a nested array,
//while concat() will add all the new elements to the end of the original array

// console.log(addToRollingBuffer1([1, 2, 3, 4], 4, 5));              // [ 2, 3, 4, 5 ]
// console.log(addToRollingBuffer2([1, 2, 3, 4], 4, 5));              // [ 2, 3, 4, 5 ]
// console.log(addToRollingBuffer1([1, 2, 3, 4], 4, [5, 6, 7, 8]));   // [ 2, 3, 4, [ 5, 6, 7, 8 ] ]
// console.log(addToRollingBuffer2([1, 2, 3, 4], 4, [5, 6, 7, 8]));   // [ 2, 3, 4, 5, 6, 7, 8 ]