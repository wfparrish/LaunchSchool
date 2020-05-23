/* 
Starting with the string:

let munstersDescription = "The Munsters are creepy and spooky.";
Return a new string that swaps the case of all of the letters:

`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Understanding the Problem
-input - a sentence with upper and lower case letters
-output - a sentence that reverses the case of each letter in the input
-rules/requirements
  -swap upper for lower case
  -swap lower for upper case

Examples / Test Cases
let munstersDescription = "The Munsters are creepy and spooky.";  //`tHE mUNSTERS ARE CREEPY AND SPOOKY.`

Data Structures / Control Structures
-input - string
-output - string
-rules / requirements
  -a hash table for checking for keys and passing values

Algorithm 1 (using an object) (plain english)
-Define an object with 52 key value pairs
  -the first 26 key/value pairs are lowercase keys and uppercase values
  -the second 26 key/value pairs are uppercase keys and lowercase values
-define a variable named bizarroSentence
-iterate through the sentence
-for each position of the sentence, check for a matching key
  -pass the value for the matching key into bizarroSentence
-return bizarroSentence
-call the function

Algorithm 2 (using a string) (plain english)
-Define a string with 52 letters (alphaUpperAndLower)
-define a variable called bizarroSentence
{abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ}
-for each position of the sentence check for the index of the same letter in alphaUpperAndLower
  -if the index is <= 25
    -concat the letter from alphaUpperAndLower at index + 26 to bizarroSentence
  -if the index is > 25
    -return the letter from alphaUpperAndLower at index - 26 to bizarroSentence
-return bizarroSentence


*/