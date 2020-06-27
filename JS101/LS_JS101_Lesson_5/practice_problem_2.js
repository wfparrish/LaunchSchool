/*

How would you order the following array of objects based
on the year of publication of each book, from the earliest to the latest?

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];

Understanding the Problem
-input - an array of book elements
-output - an ordered array of book elements
-rules/requirements
  -the book elements should be sorted by year

Examples / Test Cases
sortedBooks(books)        

[
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
]

Data Structures / Control Structures
-input - array
-output - array
-rules/requirements
  -uses objects and their methods
  -a looping structure

Algorithm (plain english)
-declare a function named sortedBooks that takes an array arrArg
-call the sorting function of JS on arrArg
  -compare the ages of the books in the collection
  -sort the elements of the collection by year, ascending
    -use the published property of the elements in the books array
-return the sorted array arrArg
-return arrArg
-call the function

Algorithm (pseudocode)
FUNCTION sortedBooks(arrArg) {
  arrArg.SORT((a, b) => {
    return a['published'] - b['published'];
  });
  return arrArg;
}

PRINT(sortedBooks(arrArg));

*/

let books = [
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', published: '1967' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', published: '1925' },
  { title: 'War and Peace', author: 'Leo Tolstoy', published: '1869' },
  { title: 'Ulysses', author: 'James Joyce', published: '1922' },
  { title: 'The Book of Kells', author: 'Multiple Authors', published: '800' },
];


function sortedBooks(arrArg) {
  arrArg.sort((a, b) => {
    return Number(a['published']) - Number(b['published']);
  });
  return arrArg;
}

console.log(sortedBooks(books));