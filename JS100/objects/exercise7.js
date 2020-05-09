let objToCopy = {
    foo: 1,
    bar: 2,
    car: 3,
    star: 4
}

function copyObj(objToCopy, keys) {
    //create an empty object to hold the key-value pairs we copy
    let tempStore = {};
    //if pass the optional argument: array of key strings
    if (keys && keys.length !== 0) {
        keys.forEach((key) => {
            tempStore[key] = objToCopy[key];
            tempStore[key].value = objToCopy[key].value;
        })
        return tempStore;
    }
    //for each prop in objToCopy:
    for (let prop in objToCopy) {
        //assign a property to the object with a matching key string
        tempStore[prop] = objToCopy[prop];
        //assign a value to each key that is identical to the value in objToCopy
        tempStore[prop].value = objToCopy[prop].value;
    }
    //return the newObj
return tempStore;
}

let newObj = copyObj(objToCopy);
console.log(newObj.foo);
console.log(newObj.bar);
console.log(newObj.car);
console.log(newObj.star);

let newObj2 = copyObj(objToCopy, ['foo']);
console.log(newObj2.foo);
console.log(newObj2.bar);
console.log(newObj2.car);
console.log(newObj2.star);

