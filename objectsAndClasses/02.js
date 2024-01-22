function city (obj){
let entries = Object.entries(obj);
for (let entry of entries){
    let key = entry.shift();
    let value =  entry.shift();

    console.log(`${key} -> ${value}`);
}


}
city({
    name: "Plovdiv",
    area: 389,
    population: 1162358,
    country: "Bulgaria",
    postCode: "4000"
})