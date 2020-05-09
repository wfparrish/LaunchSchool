// let array = [1, 2, 3];

// array.forEach(function (num){
//     num = num * num;
//     console.log(num)
// })
        

// the forEach() function does not mutate the original array.  
// takes an anoymous callback function as an argument
// returns undefined

// Arrow function version

let array = [1, 2, 3];
array.forEach(num => console.log(num * num));
                        