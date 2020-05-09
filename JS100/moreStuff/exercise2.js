// $ node exercise2.js
// /Users/wolfy/tmp/exercise2.js:4
//   console.log(greeting);
//               ^

// ReferenceError: greeting is not defined
//     at hello (/Users/wolfy/tmp/exercise2.js:4:15)
//     at Object.<anonymous> (/Users/wolfy/tmp/exercise2.js:13:1)
//     at Module._compile (internal/modules/cjs/loader.js:721:30)
//     at Object.Module._extensions..js (internal/modules/cjs/loader.js:732:10)
//     at Module.load (internal/modules/cjs/loader.js:620:32)
//     at tryModuleLoad (internal/modules/cjs/loader.js:560:12)
//     at Function.Module._load (internal/modules/cjs/loader.js:552:3)
//     at Function.Module.runMain (internal/modules/cjs/loader.js:774:12)
//     at executeUserCode (internal/bootstrap/node.js:342:17)
//     at startExecution (internal/bootstrap/node.js:276:5)

// A. My original answer:
//The variable greeting is being called but it is not
//defined in the code. Also that the programmer did not
//use a try-catch block to handle this error

// A2. What I didn't learn from my first read of the chapter
    //1. You can determine the name of the method that called
    //   the console.log(greeting) statement (here it is hello())
    //2. ReferenceError is the type of exception. Pay attention
    //   to the error types that show up here in the future.
    //3. The global-level of the program is specifically
    //   referred to as Object.<anonymous>