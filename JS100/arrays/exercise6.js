let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(arr) {
    let newArray = arr.map(items => items.length);
    return newArray.filter(items => items % 2 === 1);
}
console.log(oddLengths(arr)); // => [1, 5, 3]

// My code is different from the LaunchSchool solution, 
// which chains the two functions. My solution is actually simpler

