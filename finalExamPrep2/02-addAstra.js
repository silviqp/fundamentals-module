function addAstra (arr){

let str = arr.shift()

let totalCal = 0
let products = [];

    let pattern = /([#|])(?<name>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g

    let matches = str.matchAll(pattern);
    
    for (let match of matches){
        
       let {name, date,calories} = match.groups

       calories= Number(calories);

       totalCal += calories;
       products.push({name, date, calories});

    }
let days = Math.floor(totalCal/2000);

console.log(`You have food to last you for: ${days} days!`);
products.forEach(product=>console.log(`Item: ${product.name}, Best before: ${product.date}, Nutrition: ${product.calories}`))



}
addAstra
 ([

     '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    
     ])
// ([ '$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#IceCream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|' ])