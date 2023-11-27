// function adressList (arr){

// let adressBook= {}; 

// for (let line of arr){
//     let [name,adress]= line.split(':')
// adressBook[name]= adress
// }
// let adressEntries = Object.entries(adressBook)
// adressEntries.sort((a,b)=>a[0].localeCompare(b[0]))

// for (let entry of adressEntries){
//     let [name,adress]= entry;
//     console.log(`${name} -> ${adress}`);
// }
function adressList (arr){

    let adressBook = {}

    for (let el of arr){
       
        let [name, adress] = el.split (':')
 adressBook[name]= adress

    }
let sorted = Object.entries(adressBook).sort((a,b)=>a[0].localeCompare(b[0]))

for(let [name,adress] of sorted){
    console.log(`${name} -> ${adress}`);
}

}


adressList(['Bob:Huxley Rd',

'John:Milwaukee Crossing',

'Peter:Fordem Ave',

'Bob:Redwing Ave',

'George:Mesta Crossing',

'Ted:Gateway Way',

'Bill:Gateway Way',

'John:Grover Rd',

'Peter:Huxley Rd',

'Jeff:Gateway Way',

'Jeff:Huxley Rd'])