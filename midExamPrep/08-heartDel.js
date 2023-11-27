function heartDel(arr) {
    let neibourhood = arr.shift().split('@').map(Number)
    let cupidIdx = 0;

    for (let command of arr) {
        let tokens = command.split(' ')
        let comm = tokens.shift()
        if (comm !== "Love!") {
            let power = Number(tokens[0]);
            cupidIdx += power

            if (cupidIdx >= neibourhood.length) {
                cupidIdx = 0;

            }
            if (neibourhood[cupidIdx] === 0) {
                console.log(`Place ${cupidIdx} already had Valentine's day.`);
            } else {
                neibourhood[cupidIdx] -= 2;
                if (neibourhood[cupidIdx] == 0) {
                    console.log(`Place ${cupidIdx} has Valentine's day.`);
                }


            }

        }

    }

    let count = 0;
    for (let currentHouse of neibourhood) {
        if (currentHouse > 0) {
            count++;
        }
    }
    console.log(`Cupid's last position was ${cupidIdx}.`);
    if (count > 0) {
        console.log(`Cupid has failed ${count} places.`);
    } else {
        console.log(`Mission was successful.`);
    }
}

heartDel(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"])