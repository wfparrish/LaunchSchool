let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

myArray.forEach(num => {
    if(num % 2 === 0 && num !== 0){
        console.log(num);
    }
});