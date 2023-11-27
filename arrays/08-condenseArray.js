// Write a program, which receives an array of numbers, and condenses 
// them by summing adjacent couples of elements until a single number
//  is obtained.
function condenseArrToNum (arr){
    while (arr.length > 1) {
        let condensed = Array(arr.length-1);
        for (let i = 0; i < arr.length - 1; i++) {
            condensed[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = condensed;
    }
    console.log(arr[0])
}

condenseArrToNum([2,10,3])
