// Write a function that calculates and prints the sum of the first and the last elements in an array.

// The input comes as an array of string elements holding numbers.

// The output is printed on the console.
function sumFirstAndLast(arr){
let first = arr.shift();
let second = arr.pop();
console.log(Number(first)+Number(second));

}
sumFirstAndLast(['20', '30', '40'])