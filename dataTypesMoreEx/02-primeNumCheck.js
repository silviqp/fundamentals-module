function primeNumCheck (num){

let isPrime = true;

// check if number is equal to 1
if (num === 1) {
  
}

// check if number is greater than 1
else if (num > 1) {

    // looping through 2 to number-1
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(true);
    } else {
        console.log(false);
    }
}


}
primeNumCheck(8)