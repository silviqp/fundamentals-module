// iterating destructured entries 
let phoneBook = {
    ivaylo : '1235879',
    pesho: '548792',
    gosho: '255457',
    tosho: '7549632',
};
// first version 
let phoneBookEntries = Object.entries(phoneBook);

for (let kvp of phoneBookEntries){
    let name = kvp[0];
    let num = kvp[1];
    console.log(`${name}: ${num}`);
}
// second version 
for (let kvp of Object.entries(phoneBook)){
    let [name,num]= kvp;
    console.log(`${name}: ${num}`);
}

//   third version 
for (let [name, num] of Object.entries(phoneBook)){

    console.log(`${name}: ${num}`);
}

// tri varianta za pisane na edo i sashto neshto 
// i trite vrushtat edin i sashti rezultat