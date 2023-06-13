const perf = require('execution-time')();

//nums is an array
function doublerAppend(nums){
    //create an empty array
    let new_nums = [];
    //create a variable called num, which is whatever nums[i] is *2
    //push it to the end of the empty array
    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){
//create an empty array
    let new_nums = [];
    for (let i=0; i<nums.length; i++){
            //create a variable called num, which is whatever nums[i] is *2
        let num = nums[i] * 2;
        //push it to the front of the empty array
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    //create an empty array
    let array = [];
    for (let i=0; i<size; i++){
        //push 0, 1, 2, 3, 4, to an array that is all the numbers less than size
        array.push(i);
    }
    return array
}

//just a way to get different sized arrays, since getSizedArray puts all the numbers between 0 and what's passed in 
const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer

//this is the one that pushes at the end of the array
doublerAppend(extraLargeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
//this is the one that inserts new number at the beginning of the array
doublerInsert(extraLargeArray);
let resultsInsert = perf.stop();


console.log('Results for the extra large array');
console.log("insert/unshift", resultsInsert.preciseWords);
console.log("append/push", resultsAppend.preciseWords);
