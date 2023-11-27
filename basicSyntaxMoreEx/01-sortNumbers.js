function sorting(n1,n2,n3){
let arrNums = [];
arrNums.push(n1,n2,n3);
let sorted = arrNums.sort((a,b)=>b-a)
console.log(sorted.join('\n'));
}
sorting(2, 1,3)
