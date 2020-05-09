let a = 5;

switch (a) {
    case 5:
        console.log('a is 5');
        break;
    case 6:
        console.log('a is 6');
        break;
    default:
        console.log('a is neither 5, nor 6');
        break;
}

//Identical to the following if/else statement

if (a === 5) {
    console.log('a is 5');
} else if (a === 6) {
    console.log('a is 6');
} else {
    console.log('a is neither 5, nor 6');
}

// What is interesting is that the break statements in the 
// if/else statement are implicit while the breaks in the
// switch statement are explicit. Also they can be removed,
// and you can "fall through" to the next statement, even
// after evaluating to true. This behavior is usually considered
// undesirable (bad practice). Don't forget your break statements!!!