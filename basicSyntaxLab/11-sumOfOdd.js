function solve(n) {
let sum =0;
for (let i =1;i<=n*2;i+=2){
    console.log(i);
    sum +=1
}
console.log(`Sum: ${sum*n}`);
}
solve(3)