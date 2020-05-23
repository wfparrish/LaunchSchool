// What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

/*
My answer: 
1. Does slice() mutate the array? No
2. What does this statement do:
    let arr2 = arr1.slice();
I think it assigns a copy of the array to arr2, not a reference
3. Does this statement change anything in arr1?
    arr2[0].first = 42;
Since arr2 received a copy of the array, I would say no

So arr1 will output the original array, as it was.

-------------------------------------------------------------------------------------------------------------

Launch School solution:
[ { first: 42 }, { second: 'value2' }, 3, 4, 5 ]

The slice() method copies all the elements of the array and returns a new array.
However, it performs a shallow copy rather than a deep copy.
Thus, arr1[0] and arr2[0] point to the same object, { first: "value1" }.
Thus, when we replace the value of first in that object by using arr2, the change shows up in arr1 as well.
*/ 