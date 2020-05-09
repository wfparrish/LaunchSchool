let bar = 1;
function foo() {
    let bar = 2;
}

foo();
console.log(bar);

//foo remains 1 because the statement let bar = 2 is local to the function
//the bar = 2 is destroyed when the function scope ends