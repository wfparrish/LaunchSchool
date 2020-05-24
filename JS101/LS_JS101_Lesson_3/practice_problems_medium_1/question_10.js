//Consider these two simple functions:

function foo(param = "no") {
  return "yes";
}

function bar(param = "no") {
  return param === "no" ? "yes" : "no";
}
//What will the following function invocation return?

bar(foo());

/*
My answer: Here the default parameter for bar, param = "no", will
be overridden by foo() returning "yes". 

Therefore bar() will ask is "yes" === "no"?
This is false, so "no will be returned"
*/