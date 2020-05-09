let array1 = [1, 2, undefined, 4];  // length is 3  <--incorrect
                                    // length is 4  <--correct //Length is equal to the highest index position that has value, plus 1

let array2 = [1];                  
array2.length = 5;                  // length is 5

let array3 = [];                    
array3[-1] = [1];                   // length is 0

let array4 = [1, 2, 3, 4, 5];       
array4.length = 3;                  // length is 3

let array5 = [];                    
array5[100] = 3;                    // length is 101