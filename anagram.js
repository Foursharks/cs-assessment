// A pangram is a sentence that contains all the letters of the English alphabet at least once, like “The quick brown fox jumps over the lazy dog.”

// Write a function to check a sentence to see if it is a pangram or not.
// arr.length ===
// === 26;

const isPangram = arr => new Set(arr).size >=26; 

// For example:

console.log(isPangram("The quick brown fox jumps over the lazy dog!"));

// -> True

console.log(isPangram("I like cats, but not mice"));

// -> False