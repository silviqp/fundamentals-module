// Write a program, which receives two string arrays containing number representations, and prints on the
//  console whether they are identical.

// Arrays are identical if their elements at same indexes are equal. If they are identical, find 
// the sum of the first array and print the following message:

// `Arrays are identical. Sum: {sum}`

// If the arrays are NOT identical, find the first index where the arrays differ and print 
// /the following message:

// 
// function equal (arr1,arr2){
// let index1 = 0
// let index2 = 0;
// let num1 = 0;
// let num2 = 0;
// let sum = 0;

// for (let i = 0; i<arr1.length; i++){
//     index1= i;
//     num1= Number (arr1[i]);
//     sum += num1
// }
//  for (let j = 0 ; j<arr2.length; j ++ ){

// index2 =j;

// num2 = Number(arr2[j]);

// }


// if (num1 !== num2){
//     console.log(`Arrays are not identical. Found difference at ${index1} index`);

//  }else if (index1==index2 && num1==num2){
//     console.log(num1);
// }


// }
function equal(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        console.log(`Arrays are not identical. Found difference at ${i} index`);
        return;
      }
   
        sum += Number(arr1[i]);
    }
   
    console.log(`Arrays are identical. Sum: ${sum}`);
  }
   
  
   
equal(
    ['1','2','3','4','5'],

    ['1','2','4','4','5'])