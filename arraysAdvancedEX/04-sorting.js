function sorting(arr) {
    //first we are sorting nums from smallest to bigger one 
    let sortedArr = arr.sort((a, b) => a - b);
    //making new array which will hold the ordered one 
    let resultArr = [];
    //loop  until sortedArr length is bigger than 0 
    while (sortedArr.length > 0) {
        //taking last element from the sorted array
        let maxNum = sortedArr.pop();
        //taking the first element from the sorted array
        let minNum = sortedArr.shift();
        //pushing the max and the min into the ordered array result
        resultArr.push(maxNum);
        resultArr.push(minNum)
    }
    console.log(resultArr.join(' '));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])