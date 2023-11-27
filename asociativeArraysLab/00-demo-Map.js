//  map syntax 
// creating new map
let phoneBook = new Map()
// adding elements to map
// izpolzvame SET
phoneBook.set('pesho', '998474645')
phoneBook.set('gosho', '894846645')

// ako iskame da vzemem opredelena stoinost ot mapa
// izpolzvame GET
console.log(phoneBook.get('gosho'));
// proverqvame goleminata na mapa
// SIZE
console.log(phoneBook.size);
// proverqvame dali daden element go ima
// HAS
if (phoneBook.has('pesho')){
    console.log('pesho is here');
}
// iztrivame element 
//delete ()
phoneBook.delete()
// izchistvame vsichki neshta ot mapa
// CLEAR()

//  ako iskame da vidim keys v mapa 
// izpolzvame KEYS 
console.log(phoneBook.keys());

// iterirane prez keys 

for (let key of phoneBook.keys()){
    console.log(key);
}
// iterirane prez value 
for (let value of phoneBook.values()){
    console.log(value);
}

// iterirane prez entry 

for (let entry of phoneBook.entries()){
    console.log(entry);
}

// iterate s FORESCH 
phoneBook.forEach((value,key)=>{
    console.log(`${value},${key}`);
})