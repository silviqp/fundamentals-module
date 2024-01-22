function emploeeys(arr){
for (let name of arr){

    let employee = {name:name, personalNumber:name.length}
console.log(employee.name);
console.log(employee.personalNumber);
    console.log(`Name: ${name} -- Personal Number: ${employee.personalNumber}`);
}


}
emploeeys([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ])