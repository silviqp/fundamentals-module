function print (arr){
let step= arr.pop()

for (let i = 0; i <arr.length; i ++){
    let cur = Number (arr[i+1])
   newArr.push(cur)
}
console.log(newArr);
}
print(['5', '20', '31', '4', '20', '2'])