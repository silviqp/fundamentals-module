function cats (arr){

    class Cat {
        name;
        age;
        constructor(name,age){
            this.name = name;
            this.age = age
        }
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);
           }
    }
let cats = [];

for (let catsAs of arr){
    let tokens = catsAs.split(' ');
    let name = tokens[0];
    let age = Number(tokens[1]);
     let cat = new Cat (name,age);

     cats.push(cat)
}
for (let cat of cats){
    cat.meow()
}
}
cats(['Mellow 2', 'Tom 5'])