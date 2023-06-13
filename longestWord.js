const findLongestWord = arr => {
    let lengthArr = []
    for(let i=0; i<arr.length; i++) 
    {
       lengthArr.unshift(arr[i].length); 
    }
console.log(Math.max(...lengthArr)); 
}
    


findLongestWord(["hi", "hello"]);
// -> 5