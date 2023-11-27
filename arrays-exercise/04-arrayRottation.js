function arrRottation (arr, rottatons){
 for (let rotation = 1; rotation<=rottatons; rotation++){
    let firstEl= arr.shift();
    arr.push(firstEl)
 }

console.log(arr.join(' '));
}
arrRottation([51, 47, 32, 61, 21], 2)