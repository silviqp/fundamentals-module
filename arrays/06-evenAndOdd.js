function evenAndOdd(array) {
    let evenSum = 0;
    let oddSum = 0;


    for (let i = 0; i < array.length; i++) {
        let el = Number(array[i])
        if (el % 2 == 0) {
            evenSum += el
        } else {
            oddSum += el
        }
    }
    let result = evenSum - oddSum
    console.log(result);
}

evenAndOdd([1, 2, 3, 4, 5, 6])