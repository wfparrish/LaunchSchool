
let rlSync = require('readline-sync');
let number = rlSync.question('Enter a number to check for even or oddness: ');

function evenOrOdd(number) {
    if(Number.isInteger(Number(number))){

        if(number === '0') {
            console.log('Your number is 0, which is neither even nor odd');
        }
        else if(number === '1') {
            console.log('Your number is 1, which is odd');
            
         } else if(number === '-1') {
                console.log('Your number is -1, which is odd');
                
        } else {
            if((number < 0 || number >= 2) && number % 2 === 0) {
                   
                    console.log(`Your number is ${number}, which is an even number`);
                }  
                else {
                    console.log(`Your number is ${number}, which is an odd number`);
                }
                
            }
    } else {
        throw new Error('Your entry was not an integer')
    }
    }

    try {
        evenOrOdd(number);
    }
    catch(err) {
        console.log("caught error: " + err);
    } finally {
        number = rlSync.question('Enter a number to check for even or oddness: ');
        evenOrOdd(number);
    }
    
//------------------------------------------------------------------------------------------------------------------------------------
    
//Definition of even: Greater than or equal to two, divisible by two, with remainder of 0

// Q. Is 'is not even' equivalent to 'odd" ?     
// A. yes

// Q. Is 1 an odd number?   
// A. yes

// Q. Can negative numbers be even or odd?
// A. yes

// A formal definition of an even number is that it is an integer of the form n = 2k, 
// where k is an integer; it can then be shown that an odd number is an integer of the form n = 2k + 1 (or alternately, 2k - 1).

// In creating the solution, I had to realize I was using strings with rlSync.
// === was looking for a string, not a numeric value, to compare to the value stored in number