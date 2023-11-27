function rev (n,input){
let arr =[];

for (let i =0; i<n; i++){
    let curEl = input[i]
    arr.push(curEl)
}
let elem = arr.reverse()
console.log(elem.join(' '));
}
rev(3, [10, 20, 30, 40, 50])