let obj = {
    b: 2,
    a: 1,
    c: 3,
}

function capitalizeKeys() {
    let arrayKeys = Object.keys(obj)
    let newArray;
    newArray = arrayKeys.map(key => {return key = key.toUpperCase()})
    console.log(newArray)
    console.log(obj)
    return newArray;
}

capitalizeKeys();

// My solution is needlessly expensive, but it does the same thing
// as the LaunchSchool solution. The key for me is to learn how to be more direct with
// my statements, so that my code looks elegant and effortless.