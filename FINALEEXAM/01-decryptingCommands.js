function decryptingCommands (arr){
let message = arr.shift();

let command = arr.shift();

while (command !== 'Finish'){
    let tokens = command.split(' ');
    let action = tokens.shift();
   
if (action === 'Replace'){

    let curChar = tokens[0];
    let repl = tokens[1];
    for (let char of message){
        if (char == curChar){
   message=  message.replace(curChar,repl)
console.log(message); 
    }
}
}else if (action === 'Cut'){

    let startI = Number(tokens[0]);
    let endI = Number(tokens[1]);
    if (startI >= 0 && endI < message.length){
    let cutted = message.slice(startI,endI+1);
    message = message.split(cutted).join('')
    console.log(message);
    }else {
        console.log("Invalid indices!");
    }
}else if (action === 'Make'){
    let type = tokens[0];
    if (type === 'Upper'){
        message = message.toUpperCase()
        console.log(message);
    }else {
        message = message.toLowerCase()
        console.log(message);
    }
}else if (action === 'Check'){
    let str = tokens[0];
    if ( message.includes(str)){
        console.log(`Message contains ${str}`);
    }else {
        console.log(`Message doesn't contain ${str}`);
    }
}else if (action === 'Sum'){
    let start = Number(tokens[0]);
    let end = Number(tokens[1]);
    if (start >= 0 && end < message.length){
    let substr = message.slice (start,end+1);
    let sum = 0
    for (let char of substr){
        let code = char.charCodeAt();
        sum+=code
        
    }
    console.log(sum);
    }else {
        console.log("Invalid indices!");
    }
}


    command = arr.shift()
}



}
decryptingCommands((["ILikeSoftUni",
"Replace I We",
"Make Upper",
"Check SoftUni",
"Sum 1 4",
"Cut 1 4",
"Finish"]))
// decryptingCommands(["HappyNameDay",
// "Replace p r",
// "Make Lower",
// "Cut 2 23",
// "Sum -2 2",
// "Finish"])