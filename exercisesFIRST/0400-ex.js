function arrRotation (arr,rotations){
for (let rotation =1; rotation <= rotations; rotation ++){
    let firstEl = arr.shift();
    arr.push(firstEl)
}
console.log(arr.join(' '));
}
arrRotation([51, 47, 32, 61, 21], 2)