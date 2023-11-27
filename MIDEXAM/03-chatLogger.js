function chatLogger(arr) {
    let newMes = [];
    for (let element of arr) {
        let tokens = element.split(' ')
        let command = tokens.shift()
        if (command === 'Chat') {
            let message = tokens[0];
            newMes.push(message)
        } else if (command === 'Edit') {
            let message = tokens[0];
            let editted = tokens[1];
            if (newMes.includes(message)) {
                let idx = newMes.indexOf(message)
                let newMessage = newMes.splice(idx, 1)
                let edition = newMes.splice(idx, 0, editted)

            }
        } else if (command === 'Delete') {
            let message = tokens[0]
            if (newMes.includes(message)) {
                let idx = newMes.indexOf(message)
                let deleted = newMes.splice(idx, 1)
            }
        } else if (command === 'Pin') {
            let message = tokens[0];
            if (newMes.includes(message)) {
                let idx = newMes.indexOf(message);
                newMes.splice(idx, 1);
                newMes.push(message)
            }
        } else if (command === 'Spam') {
            for (let el of tokens) {
                let message = el
                newMes.push(message)
            }
        } else {
            console.log(newMes.join('\n'));
        }

    }


}


chatLogger(["Chat John",

    "Spam Let's go to the zoo",

    "Edit zoo cinema",

    "Chat tonight",

    "Pin John",

    "end"])