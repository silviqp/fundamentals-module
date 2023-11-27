function searchingForNum(arr1, arr2) {
    let [elsToTake, elsToDelete, searcedNum] = arr2
    let searchedArr = [];

    let taken = arr1.slice(0, elsToTake)
    let deleted = taken.splice(0, elsToDelete)
    let count = 0;
    for (let num of taken ) {
        if (num == searcedNum) {
            count++
           ;
        }
    }
    console.log(`Number ${searcedNum} occurs ${count} times.`)
}
searchingForNum([5, 2, 3, 4, 1, 6],

    [5, 2, 3])