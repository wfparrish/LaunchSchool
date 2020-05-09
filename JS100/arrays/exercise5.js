let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

function removeNonInteger(array) {
    return array.filter(item => Number.isInteger(item) === true)
}

let newArray = removeNonInteger(array);
console.log(newArray);

// My syntax is different than the two alternatives presented by LaunchSchool. 
// Not by very much, but still different

