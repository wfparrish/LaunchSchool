//Exception handling is when the programmer takes into account the possibility of code throwing errors,
//and accounts for the possible error thrown. 

//Exceptions are handled using try/catch/finally blocks. The code that might throw an error is wrapped
//in the try block. The catch block receives the error thrown by the code (if an error is thrown) as a 
//parameter, and it returns what is defined by the programmer. The finally block is rarely used, but it
//runs regardless of whether an error is thrown or not.




function divide(num1) {
    const num2 = 5;
    return num2/num1;
}

try {
    divide(0);  //Returns Infinity, not an error, then prints "Goodbye!!!"
    divide($);  //Prints "You can't do that!!!", then "Goodbye!!!"

} catch(exception) {
    console.log("You can't do that!!!");
    return exception;
} finally {
    console.log("Goodbye!!!");
}