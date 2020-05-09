// Without using a for, while, or do/while loop, 
// write some code that checks whether the number 3 
// appears inside these arrays:

let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

function iterator(array) {
    let results = array.filter((items) => items === 3)
    if (results.length === 0) {
        console.log('No 3\'s found here!!!');
        return false;
    } else {
        console.log('I found a three in this array!!!')
        return true;
    }
};

console.log(iterator(numbers1));
console.log(iterator(numbers2));
console.log(iterator(numbers3));

// The LaunchSchool solution is much simpler:

// numbers1.includes(3);  // => true
// numbers2.includes(3);  // => false
// numbers3.includes(3);  // => false
