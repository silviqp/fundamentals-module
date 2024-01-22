function conert (json){
let obj = JSON.parse(json)
let entries= Object.entries(obj)
for (let[key,value] of entries){

    console.log(`${key} -> ${value}`);
}


}
conert('{"name": "George", "age": 40, "town": "Sofia"}')