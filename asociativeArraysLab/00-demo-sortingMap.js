
let phoneBook = new Map();

phoneBook.set('pesho','0855542');
phoneBook.set('gosho','0533664');
phoneBook.set('tosho','0638785');
// making the object into array with ARRAY.FROM()
let phoneBookEntries = Array.from(phoneBook.entries())
// sorting the array
 let sorted = phoneBookEntries.sort((entryA,entryB)=>entryA[0].localeCompare(entryB[0]))rrrr
