//One day, Spot was playing with the Munster family's home computer, and he wrote a small program to mess with their demographic data:

let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

/*
My answer: Object.values returns an array, here with incremented values
for the data. The demoObject IS passed by reference. 
But the values are used to create an array with changed data, not
to mutate the original object <------------------ Incorrect!

Correct answer: I was right to think about the fact that the demoObject
is passed by reference. And I was right to think that an original array
is created. I understood that the mutation of the object's 
values occurs. But I thought as a copy, an array. 
Not as a copy of the ALREADY mutated values, returned from the function

forEach() does not mutate the array on which it is called, ALTHOUGH
the callback may (MDN).

The typical use case is to execute side effects at the end of a chain
*/