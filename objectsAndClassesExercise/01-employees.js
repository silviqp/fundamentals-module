function employees(arr) {
    // iterating through the array 

    for (let name of arr) {

        // creating an object 

        let employee = { name: name, personalNum: name.length };

        console.log(`Name: ${employee.name} -- Personal Number: ${employee.personalNum}`);
    }

}
employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

])