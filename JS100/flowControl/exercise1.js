false || (true && false);   //false
true || (1 + 2);    //true
(1 + 2) || true;    //true      <-- incorrect. returns 3
true && (1 + 2);    //true      <-- incorrect. returns 3
false && (1 + 2);   //false
(1 + 2) && true;    //true
(32 * 4) >= 129;    //false
false !== !true;    //false
true === 4;     //false
false === (847 === '847');  //true
false === (847 == '847');   //false

// My solution using this file as scratch paper:
// (!true || (!(100 / 5) === 20) || ((328 / 4) === 82)) || false;
// (!true || (!(20) === 20) || (82 === 82)) || false;
// (!true || false || true) || false;
// (false || false || true) || false;
// true || false;
// true;   //true   <--correct, and matches the solution of the text in it's logic. 
                        //Also makes use of coercion to truthy and falsy values