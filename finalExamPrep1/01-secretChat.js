function secretChat (input){
    
    let message = input.shift ();

    while (input[0] !== 'Reveal'){
        let line = input.shift();
        let tokens = line.split (':|:');
        let command = tokens [0];

        switch(command){
            case 'InsertSpace':
            let index = Number(tokens[1]);
            let firstHalf = message.slice (0, index);
            let secHalf = message.slice (index);
            message = firstHalf+' '+secHalf;
            break;
            case 'Reverse':
                let substr = tokens[1];
                let firstIdx = message.indexOf(substr);
                if (firstIdx == -1){
                    console.log('error');
                    continue;
                }
                let left = message.slice (0,firstIdx);
                let rigth = message.slice (firstIdx+substr.length);
                message = left+rigth+substr.split('').reverse().join('')
                break;
                case 'ChangeAll':
                    let match = tokens[1];
                    let replacement = tokens[2];
                    let parts = message.split(match);
                    message = parts.join(replacement);
                    break;
        }
        console.log(message);
    }
    
    console.log(`You have a new text message: ${message}`);
    

}
 secretChat
//  ([

//     'heVVodar!gniV',
    
//     'ChangeAll:|:V:|:l',
    
//     'Reverse:|:!gnil',
    
//     'InsertSpace:|:5',
    
//     'Reveal'
    
//     ])
([

    'Hiware?uiy',
    
    'ChangeAll:|:i:|:o',
    
    'Reverse:|:?uoy',
    
    'Reverse:|:jd',
    
    'InsertSpace:|:3',
    
    'InsertSpace:|:7',
    
    'Reveal'
    
    ])