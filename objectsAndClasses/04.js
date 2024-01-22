function convert (first,last,hair){
let person = {};
person.firstName = first;
person.lastName = last;
person.hairColor = hair;

let json = JSON.stringify(person);

console.log(json);


}
convert('George', 'Jones', 'Brown')