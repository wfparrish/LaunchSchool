let array1 = [1, 2, 3];
let array2 = array1;
array1[1] = 4;
console.log(array2);

//This code will print [1, 4, 3]; to the console. This is 
//because array2 references [1, 2, 3] and the array
//has been mutated. 