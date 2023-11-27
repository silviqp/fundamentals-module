function evenOdd (arr){
 let newA= arr.map(Number)
let sum = 0;

for (let i =0;i <newA.length;i++){
    if (newA[i]%2===0){
        sum+=newA[i]
    }
}
console.log(sum);
}
evenOdd(['1','2','3','4','5','6'])