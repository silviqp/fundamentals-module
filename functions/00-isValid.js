function isValid (index,arr){
if (Number.isInteger(index) && index>= 0&&index < arr.length){
    return true;

}else {
    return false 
}

}
console.log(isValid(2, [1,2,6,7]));