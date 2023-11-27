function englishName(num) {
    let numAsStr = num.toString()
    let curDigit = 0
    for (let i = 0; i < numAsStr.length; i++) {
        curDigit = numAsStr[i];
    }
    if (curDigit == 1) {
        console.log('one');
    } else if (curDigit == 2) {
        console.log('two');
    } else if (curDigit == 3) {
        console.log('three');
    } else if (curDigit == 4) {
        console.log('four');
    } else if (curDigit == 5) {
        console.log('five');
    } else if (curDigit == 6) {
        console.log('six');
    } else if (curDigit == 7) {
        console.log('seven');
    } else if (curDigit == 8) {
        console.log('eigth');
    } else if (curDigit == 9) {
        console.log('nine');
    } else if (curDigit == 0) {
        console.log('zero');
    }
}
englishName(1)