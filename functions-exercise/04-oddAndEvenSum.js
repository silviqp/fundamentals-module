// You will receive a single number. You have to write a function, that returns the sum of all even 
// and all odd digits from that number
function oddAndEvenSum(num) {

    let evenSum = 0;
    let oddSum = 0;
    let numAsStr = num.toString();

    for (let char of numAsStr) {
        let digit = Number(char);

        if (digit % 2 == 0) {
            evenSum += digit
        } else {
            oddSum += digit
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
oddAndEvenSum(1000435)