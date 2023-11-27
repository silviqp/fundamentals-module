//  57/100 
// function travelTime(input) {
//   let destinatiorn = generateDest (input);

//   function generateDest (arr){
//     let obj = {};

//     arr.forEach (line=>{
//         let tokens = line.split(' > ');
//         let [country,city,price]= tokens;
//         if (!obj.hasOwnProperty(country)){
//             obj[country]={};
//         }
//         if (!obj.hasOwnProperty(city)){
//             obj[country][city]= price;

//         }
//         let oldPrice = obj[country][city]
//         if (oldPrice>price){
//             obj[country][city]= price;

//         }
//     })
//     return obj
//   }
//   let sorted = Object.keys(destinatiorn).sort((a,b)=> a.localeCompare(b))
  
//   for (let country of sorted){
//     console.log(`${country} -> ${cityPrice(destinatiorn[country])}`);
//   }

// function cityPrice (obj){
//     let result = [];
//     for (let entry of Object.entries(obj).sort ((a,b)=> a[1] - b[1])){
  
//         result.push(`${entry[0]} -> ${entry[1]}`);
//     }
// return result. join(' ')
// }

// }
// 100/100
function travelTime(travelOptions) {
 
    let destinations = getDestinations(travelOptions)
 
    let sortedDestinationsByName = Object.entries(destinations).sort(Intl.Collator().compare)
 
    for (const [country, townInfo] of sortedDestinationsByName) {
 
        let result = []
        result.push(country)
        for (const town in townInfo) {
            result.push(town, townInfo[town])
        }
 
        result.length === 3 ?
            console.log(result.join(' -> ')) :
            console.log(getResWithSeveralTowns(result));
 
        function getResWithSeveralTowns(townAndPrice) {
            let resWithSeveralTowns = []
            let country = result.shift()
            let tempArr = []
 
            for (let i = 0; i < result.length; i += 2) {
 
                let town = result[i]
                let price = result[i + 1]
                let townAndPrice = []
 
                townAndPrice.push(town, price)
                tempArr.push(townAndPrice)
            }
 
            let sortedArray = tempArr.sort(([keyA, valueA], [keyB, valueB]) => valueA - valueB)
 
            for (let [town, price] of sortedArray) {
                let townPrice = [town, price]
                resWithSeveralTowns.push(townPrice.join(' -> '))
            }
            resWithSeveralTowns.unshift(country + ' ->')
            return resWithSeveralTowns.join(' ')
        }
 
    }
 
    function getDestinations(destination) {
        let destinations = {}
 
        travelOptions.forEach((line) => {
            let [country, town, price] = line.split(' > ')
 
            if (!destinations.hasOwnProperty(country)) {
                destinations[country] = {}
            }
 
            if (!destinations[country].hasOwnProperty(town)) {
                destinations[country][town] = price
            } else {
 
                if (price < destinations[country][town]) {
                    destinations[country][town] = price
                }
 
            }
        })
       return destinations;
    }
    
}
travelTime([

    'Bulgaria > Sofia > 25000',
    
    'Bulgaria > Sofia > 25000',
    
    'Kalimdor > Orgrimar > 25000',
    
    'Albania > Tirana > 25000',
    
    'Bulgaria > Varna > 25010',
    
    'Bulgaria > Lukovit > 10'
    
    ])