// Write some code to extract the word 'mem' from the following nested array:
// My solution:

let arr = [["test", "hello", "world"], ["example", 6, "mem", null], [4, 8, 12]];
let newArray = [];

arr.map(items => {
    let segmentStore = [];
    items.filter(item => {
        if (item !== 'mem') {
            segmentStore.push(item);
        }
    })
    newArray.push(segmentStore)
});

console.log(newArray);

// My solution acually removes the string 'mem' from the array, then builds a new 
// array without the string. LaunchSchool merely wanted me to return the string

// LaunchSchool solution:
//console.log(arr[1][2]);