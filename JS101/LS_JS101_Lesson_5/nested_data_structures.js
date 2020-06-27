let arr = Object.freeze([[1], [2], [3]]);
//arr.push([4]);
arr[2].push(4);
console.log(arr); // =>  [ [ 1 ], [ 2 ], [ 3, 4 ] ]