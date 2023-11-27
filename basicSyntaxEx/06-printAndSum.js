function solve (num1,num2){
    let sum = 0;
let curNum = '';
    for(let i = num1;i <=num2; i++){
        curNum += i+' '
sum+=i
    }
console.log(curNum);
console.log(`Sum: ${sum}`);
}
solve (5, 10)