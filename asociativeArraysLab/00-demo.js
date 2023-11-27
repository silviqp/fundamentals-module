let phoneBook = {
    ivaylo : '1235879',
    pesho: '548792',
    gosho: '255457',
    tosho: '7549632',
}

//  check fi there is an entry
// with hasOwnProperty
if (phoneBook.hasOwnProperty('ivaylo')){
    console.log('Entry found:'  + phoneBook['ivaylo']);
}
// with checking if the property exists // true/false
if (phoneBook['pesho']){
    console.log('Entry found:'  + phoneBook['pesho']);
}
