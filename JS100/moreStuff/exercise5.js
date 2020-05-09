function doSomething(string) {
    return string.split(' ').reverse().map((value) => value.length)}

//The method takes a sentence and splits it into an array holding each 
// word of the sentence. It then reverses the array. Finally it returns
// a new array with the length of each word in the reversed array in
// a corresponding position in the new array.

console.log(doSomething('The brown fox nimbly jumped on the rock'));
console.log(doSomething('Thebrownfoxnimblyjumpedontherock'));

