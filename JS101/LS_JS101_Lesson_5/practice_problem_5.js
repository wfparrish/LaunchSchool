/*

Consider the following nested object:

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

Compute and display the total age of the male members of the family.


*/

let munsters = {
  Herman: { age: 32, gender: 'male' },
  Lily: { age: 30, gender: 'female' },
  Grandpa: { age: 402, gender: 'male' },
  Eddie: { age: 10, gender: 'male' },
  Marilyn: { age: 23, gender: 'female'}
};

let sum = 0;
let munstersValues = Object.values(munsters);

for (idx = 0; idx <= munstersValues.length - 1; idx++) {
  if (munstersValues[idx].gender === 'male') {
    sum += munstersValues[idx].age;
  }
}

console.log(sum);