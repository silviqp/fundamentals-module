// Здравей,
// Първо за край на цикъла не взимаш дължината на правилния масив (т.е. трябва да вземеш дължината 
//     на commands). И другото място, където трябва да се направи поправка е на 24-ти ред - там не 
//     трябва да взимаш i като начален индекс, а този, който ти е зададен според условието (т.е. secondNum).
//      Също и променливата на 7-ми ред ти е излизшна 🙂
function arrayManipulation(array) {
    let arr = array
        .shift()
        .split(' ')
        .map(Number);
    for (let i = 0; i < array.length; i++) {
      
 
        let [command, firstNum, secondNum] = array[i].split(' ');
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);
        switch (command) {
            case "Add":
                arr.push(firstNum)
 
                break;
            case "Remove":
             arr = arr.filter(n => n !== firstNum)
                break;
            case "RemoveAt":
                arr.splice(firstNum, 1)
                break;
            case "Insert":
                arr.splice(secondNum, 0, firstNum)
                break;
        }
    }
    console.log(arr.join(' '));
 
}
arrayManipulation(['4 19 2 53 6 43',

'Add 3',

'Remove 2',

'RemoveAt 1',

'Insert 8 3'])