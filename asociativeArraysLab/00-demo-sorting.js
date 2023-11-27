// associative array
let phoneBook = {
    ivaylo : '1235879',
    pesho: '548792',
    gosho: '255457',
    tosho: '7549632',
};

// convert associative array into array;
let phoneBookEntries = Object.entries(phoneBook)

// sort the array by key 
phoneBookEntries.sort((a,b)=>a[0].localeCompare(b[0]))

// convert back to associative array
let sorted = Object.fromEntries(phoneBookEntries)
console.log(sorted);