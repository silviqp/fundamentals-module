function solve (f, l, a){
let person = {

firstName : f,
lastName : l,
age : a,

}
person.sayHello=()=>{console.log('hello')}
person.sayHello()
console.log(person);


for (let [key,value] of Object.entries(person)){
    console.log(key,value);
}

}
solve ('Peter', 'Pan', 20)