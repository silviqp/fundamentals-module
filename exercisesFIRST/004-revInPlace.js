function reverseInPlace (letters){

for (let i = 0  ; i <letters.length/2 ;i++){
    let j = letters.length-1 -i
   
    let temp = letters[i];
    letters[i]= letters[j];
letters[j]= temp;

}

console.log(letters.join(' '));

}
reverseInPlace(['a', 'b', 'c', 'd', 'e'])