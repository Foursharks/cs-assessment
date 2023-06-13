| Array Name  | Array Size | insert/unshift rt  | append/push rt
| -------- |:------:| -----: |-----:|
| extraLargeArray | 100000 | 2.55 seconds |41.4 milliseconds |
| largeArray  | 10000  |  16.78 milliseconds  |  973.9 microseconds  |
| mediumArray  | 1000  | 285.9 microseconds   |  223 microseconds  |
| smallArray  | 100 | 105.3 microseconds   |  166.6 microseconds  |
| tinyArray | 10 |  65 microseconds | 153 microseconds


## Unit of Measure Information
* 1000 microseconds in a millesecond
* 1000 milleseconds in a second
* 1000000 microseconds in a second

### Open Questions
* How much longer does it take per insert and append to run when 10x the numbers (since 100 is 10x 10) are added, but each number is smallish? 
  * It takes 38% more time to insert 10x the numbers (4x worse)
  * It takes 8% more time to append 10x the numbers 

* How much longer does it take to go from a large array to an extra large array, given that 100,000 number is 10x 10,000.  
It takes 1000% more time to insert 10x the numbers (10x worse)
It takes 97% more time to append 10x the numbers 

* Why does insert/unshift take less time than append for a tiny array but longer for a large array?  

  * The Array.push() has a Constant Time Complexity and so is O(1). All it does is add an element and give it an index that’s 1 greater than the index of the last element in the array. 

  * It doesn’t matter whether the array has 10 elements or 1000. The number of operations that needs to be performed won’t change. You can see that reflected somewhat in the table-  the runtime doesn't change THAT much in ratio with the size of the array. 

  * Unshift doesn't work that way, it adds and element to the beginning of the array, not to the end. 

  * Adding an element at the beginning of an array means the new element will have an index of 0. Which means that the index of every other element must be incremented by 1. So Array.unshift() has a Linear Time Complexity and is O(n). 