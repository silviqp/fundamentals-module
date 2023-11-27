

function gladiatorInventory(arr) {
    let inventori = arr.shift().split(' ')


    for (let command of arr) {

        let tokens = command.split(' ')
        let action = tokens[0];
        let item = tokens[1]

        if (action == 'Buy') {
            if (!inventori.includes(item)) {
                inventori.push(item)

            }
        } else if (action == 'Trash') {

            if (inventori.includes(item)) {
                let index = inventori.indexOf(item)
                inventori.splice(index, 1)

            }

        } else if (action === 'Repair') {
            if (inventori.includes(item)) {
                let index = inventori.indexOf(item);
                inventori.splice(index, 1)
                inventori.push(item)

            }

        } else if (action === 'Upgrade') {
            let upgrade = item.split('-')
            let weapon = upgrade[0];
            let upgrades = upgrade[1];

            if (inventori.includes(weapon)) {
                let index = inventori.indexOf(weapon);
                inventori.splice(index + 1, 0, (`${weapon}:${upgrades}`))

            }


        }

    }
    console.log(inventori.join(' '))
}
gladiatorInventory(['SWORD Shield Spear',

'Buy Bag',

'Trash Shield',

'Repair Spear',

'Upgrade SWORD-Steel'])