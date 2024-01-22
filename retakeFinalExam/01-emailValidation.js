/*    • "Make Upper"
        ◦ Replace all letters with upper case, then print the result.
    • "Make Lower"
        ◦ Replace all letters with lower case, then print the result.
    • "GetDomain {count}"
        ◦ Print the last count of characters of the email.
    • "GetUsername"
        ◦ Print the substring from the start of the email until the "@" symbol.
        ◦ If the email doesn't contain the "@" symbol, print: 
"The email {email} doesn't contain the @ symbol."
    • "Replace {char}"
        ◦ Replace all occurrences of the given chars with a dash "-" and print the result.
    • "Encrypt"
        ◦ Get the ASCII value of each symbol. Print the result on 
        a single line separated by a single space.*/


function emailValidation (arr){
let email = arr.shift();

let command = arr.shift ();

while (command !== 'Complete'){
let tokens = command.split (' ')
let action = tokens[0]
let move = tokens[1]
    if (action === 'Make'){
        if (move === 'Upper'){
        email = email.toUpperCase();
        console.log(email);
    }else if (move === 'Lower'){
        email = email.toLowerCase()
        console.log(email);
    }
    }else if (action === 'GetDomain'){
        move = Number(move)
        domain = email.slice (email.length-move);
        console.log(domain);
    }else if (action === 'GetUsername'){
        if (email.includes ('@')){
            let idx = email.indexOf('@')
            let username = email.slice(0,idx )
            console.log(username);
        }else {
            console.log(`The email ${email} doesn't contain the @ symbol.`);
        }
    }else if (action==='Replace'){
       while (email.includes(move)){
        email = email.replace(move, '-')
       
       }
       console.log(email);
    }else if (action === 'Encrypt'){
        let codes = []
     for (let char of email){
        let code = char.charCodeAt();
        codes.push(code)
     }
    console.log(codes.join(' '));
    }


    command = arr.shift()
}


}
emailValidation(["AnotherMail.com",
"Make Lower",
"GetUsername",
"Replace a",
"Complete"])