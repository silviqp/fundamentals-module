function bombNumber(arr, bomb) {
    //destructing the second array(bomb);
    let [bombNum, power] = bomb;
    //making loop and two variables saying: until arr contains bomb num taking bomb nums index
    //making splice to delete the left and the rigth numbers according to the powe of the bomb 
    //using Math.max to avoid going forward if tje idnex is negative number 
    while (arr.includes(bombNum)) {
        let index = arr.indexOf(bombNum);
        arr.splice(Math.max(0,index - power), power * 2 + 1,0)
    }
    let sum = 0;
    for (let num of arr) {
        sum += num;

    }
    console.log(sum);
}
bombNumber([1, 2, 2, 4, 2, 2,

    2, 9],
    
    [4, 2])