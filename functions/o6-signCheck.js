// Write a function, that checks whether the result of the multiplication numOne 
// * numTwo * numThree is positive or negative. Try to do this WITHOUT multiplying the 3 numbers.
function signCheck (n1,n2,n3){
// let result = n1*n2*n3;
// if (result<0){
//     console.log('Negative');
// }else {
//     console.log('Positive');
// }
// }
let sign  = Math.sign(n1*n2*n3)
if (sign >0){
    console.log('Positive');
}else {
    console.log('Negative');
}

}
signCheck(-5,

    1,
    
    1)