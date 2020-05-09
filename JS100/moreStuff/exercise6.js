let words = [
    'laboratory',
    'experiment',
    'flab',
    'Pans Labyrinth',
    'elaborate',
    'polar bear',
];

function allMatches(array, regex) {
  let results = [];
  array.forEach((item)=>{
      if(item.match(regex)) 
        results.push(item)
    })
    return results;
};

console.log(allMatches(words, /lab/));
console.log(allMatches(words, /rat/));

//My solution is cleaner than the first LaunchSchool solution but more convoluted than the second
