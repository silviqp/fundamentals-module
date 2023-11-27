function solve (obj){
let entries = Object.entries(obj)

for (let [key,value] of entries){
    console.log(`${key} -> ${value}`);
}



}
solve ({
    name: 'Sofia',
    area: 492,
    population: 22542,
    country: 'Bulgaria',
    postcode: 1000
})