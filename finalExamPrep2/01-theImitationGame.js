function theImitationGame (arr){
let encryptedMsg = arr.shift();
let command = arr.shift();

while (command !== 'Decode'){
    let tokens = command.split('|');
  let action = tokens.shift();

  if (action === 'Move'){
    let lettersCount = Number(tokens.shift())
    let letters = encryptedMsg.slice (0, lettersCount);
     encryptedMsg = encryptedMsg.replace(letters,'');
    encryptedMsg += letters

  
  }else if (action === 'Insert'){
    let idx = Number(tokens.shift());
    let value = tokens.shift();

    encryptedMsg= encryptedMsg.slice(0,idx) + value + encryptedMsg.slice(idx);

  }else if (action === 'ChangeAll'){
    let substr = tokens.shift();
    let repl = tokens.shift();

    while (encryptedMsg.includes(substr)){
        encryptedMsg = encryptedMsg.replace(substr,repl)


    }
  }
  
    command= arr.shift()
}
console.log(`The decrypted message is: ${encryptedMsg}`);
}
theImitationGame([

    'zzHe',
    
    'ChangeAll|z|l',
    
    'Insert|2|o',
    
    'Move|3',
    
    'Decode'
    
    ])