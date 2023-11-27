function convertToJson (first,last, hair){
let person = {};
person.name = first;

person.lastName = last;

person.hairColor = hair
let text = JSON.stringify(person)
console.log(text);
}
convertToJson('George', 'Jones',

'Brown')