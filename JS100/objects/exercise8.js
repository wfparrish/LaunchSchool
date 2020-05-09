let qux = 1;

function changeQux(arg){
    arg++;
    console.log(arg)
}

changeQux(qux);
console.log(qux)

// This is being oddly explained...
// What it seems everyone is TRYING to say is you cant pass a variable 
// TO a variable, and expect the receiving variable to change the passed variable,
// at least not if the variable holds a primitive. 

// I can't put qux into arg, increment arg, and think it will affect qux
// I could pass the value of qux to arg, increment arg, then pass the new 
// value back to qux.