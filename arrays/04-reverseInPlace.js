// zadachata reshena s vlojena funkciq 


function reverceInPlace (arr){
for(let i = 0; i<arr.length/2; i++){
    swap(arr, i, arr.length-1-i)
}
console.log(arr.join(' '));
function swap (els,i,j){
    let temp = els[i];
    els[i]= els[j];
    els[j]=temp;
}
}
reverceInPlace(['a', 'b', 'c', 'd', 'e'])