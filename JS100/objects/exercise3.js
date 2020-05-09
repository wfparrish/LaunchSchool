let myArray = {
    0: "first loop",
    1: "second loop",
    2: "last loop",
    length: 4
};

for (let i = 0; i < myArray.length; i += 1) {
    console.log(myArray[i])     //<--As this is an object, and not an array, this syntax is bracket notation for objects, and the i is NOT an index, it is a variable that holds a key(a string)
                                // for each key/value pair in the object mimicking an array. The length property defines a numeric value hard-coded to allow the loop to run
}