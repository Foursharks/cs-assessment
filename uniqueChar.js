// Write a function that takes in a single word, as a string. It should return True if that word contains only unique characters. Return False otherwise.

//The `.size` property returns the number of unique elements in the set.
const hasUniqueChars = arr => arr.length === new Set(arr).size;
// For example:

console.log(hasUniqueChars(["m", "o", "n", "o"]));
// // -> True

console.log(hasUniqueChars("Monday"));
// // -> False