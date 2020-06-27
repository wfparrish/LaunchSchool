/*
Given the following code, what will the final values of
a and b be? Try to answer without running the code.

let a = 2;
let b = [5, 8];
let arr = [a, b];   //[2, [5, 8]] a equals 2, b equals [5, 8] 

arr[0] += 2;        //[4, [5, 8]] a equals 2, arr[0], b equals [5, 8] 

arr[1][0] -= a;     //a equals 2, b equals [3, 8]

Hint: Does arr[0] reference the same position in memory as a?
*/