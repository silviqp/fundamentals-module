// You will be given an array of strings. Each string will be one of the following:

// - "{name} is going!"

// - "{name} is not going!"

// If you receive the first type of input, you have to add the person if he/she is not in the list
//  (If he/she is in the list print: "{name} is already in the list!").

// If you receive the second type of input, you have to remove the person if he/she is in the list 
// (if not print: "{name} is not in the list!")
function houseParty(arr) {
    let quests = [];

    for (let command of arr) {
        let tokens = command.split(' ');
        let name = tokens[0];

        if (tokens.includes('not')) {
            if (quests.includes(name)) {
                let index = quests.indexOf(name);
                quests.splice(index, 1);

            } else {
                console.log(`${name} is not in the list!`);
            }

        } else {
            if (quests.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                quests.push(name)
            }
        }

    }
    console.log(quests.join('\n'));
}
houseParty(['Allie is going!',

'George is going!',

'John is not going!',

'George is not going!'])