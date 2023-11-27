// A palindrome is a number, which reads the same backward as forward, such as 323 or 1001. Write a function,
//  which receives an array of positive integers and checks if each integer is a palindrome or not.

function palindromeIntegers(arr) {

    for (let num of arr) {
        let isPalindrome = checkIfPalindrome(num);
        console.log(isPalindrome);

    }
    function checkIfPalindrome(num) {
        let numStr = String(num);
        let reversedStr = '';

        for (let i = numStr.length - 1; i >= 0; i--) {
            let curChar = numStr[i];
            reversedStr += curChar
        }
        let isPalindrome = numStr == reversedStr
        return isPalindrome;
    }
}


palindromeIntegers([123, 323, 421, 121])