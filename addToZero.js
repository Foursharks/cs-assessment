// 1) Sum Zero
// Write a function that takes in an array of numbers. The function should return True if any two numberss in list sum to 0, and false otherwise.

// For example:

const addToZero = (arr) => {
    //add each number every other number in the array
  const compArr = arr; 
  for(let x=0; x<compArr.length; x++){
      for(let i = 0; i<arr.length; i++){ 
        console.log(arr[i], compArr[x])
        if(arr[i]+compArr[x]===0) {
            return true; 
        }
        else {
            console.log(false); 
        }
      }
  }

}

// console.log(addToZero([]));
// // -> False

// console.log(addToZero([1]));
// // -> False

// console.log(addToZero([1, 2, 3]));
// -> False

console.log(addToZero([1, 2, 3, -2]));
// -> True

//optimizing for runtime 
const addToZero = (arr) => {
    //create an empty object
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        //set the compliment as the negative of the current value in the array
      const complement = -arr[i];
     // checks if the complement of the current element is already in the hash object.
    //  returns true if the complement of the current element is found in the hash object, indicating that there are two elements in the array that add up to zero.
      if (hash[complement]) {
        return true;
      }
     // adds the current element to the hash object
      hash[arr[i]] = true;
    }
    // returns false if the for loop completes without finding two elements that add up to zero
    return false;
  };
  
  console.log(addToZero([1, 2, 3, -2]));
  // -> True
  