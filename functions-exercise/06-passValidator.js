// Write a function that checks if a given password is valid. Password validations are:

// · The length should be 6 - 10 characters (inclusive)

// · It should consist only of letters and digits

// · It should have at least 2 digits

// If a password is a valid print: "Password is valid".

// If it is NOT valid, for every unfulfilled rule print a message:

// · "Password must be between 6 and 10 characters"

// · "Password must consist only of letters and digits"

// · "Password must have at least 2 digits"

function passValidator (pass){
let isValidLength = checkLength(pass);
let isOnlyLettersDigits = checkLettersAndDigits(pass);
let isNums2Digits = checkMin2Digits (pass);

if (isOnlyLettersDigits && isOnlyLettersDigits && isNums2Digits){
    console.log("Password is valid");
}

function checkLength(pass){
    if (pass.length >=6 && pass.length <=10){
        return true;
    }else{
        console.log("Password must be between 6 and 10 characters");
        return false;
    }
}
function checkLettersAndDigits(pass){

    for (let curChar of pass){
        let code = curChar.charCodeAt(); 
        if (!(code>=48 && code <=57
            || code >=65 && code <=90 ||
            code >=97 && code <=122)){
                console.log("Password must consist only of letters and digits");
return false 
        }
    }
    return true;
}
function checkMin2Digits(pass){
    let digitsCount = 0;

    for (let char of pass){
        let code = char.charCodeAt();
        
        if (code >=48 && code <=57){
            digitsCount++;
        }
    }
    if (digitsCount<2){
        console.log("Password must have at least 2 digits");
        return false 
    }else {
        return true
    }
}

}
passValidator('logIn')