function printNum(arr) {

    let phoneBook = {};

    for (let entry of arr) {
        let entryArr = entry.split(' ');
       
        let name = entryArr[0];
     
        let phNum = entryArr[1];

        phoneBook[name] = phNum;

    }

    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }

}
printNum(['Tim 0834212554',

    'Peter 0877547887',

    'Bill 0896543112',

    'Tim 0876566344'])