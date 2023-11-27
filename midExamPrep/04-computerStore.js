function computerStore (arr){
let priseNoTax = 0
let command = arr.shift();

while(command!='special' && command!='regular'){
    let price = Number(command);
    if (price<=0){
        console.log("Invalid price!");
        command=arr.shift();
        continue;
    }
    priseNoTax+=price;
    command=arr.shift()
}
if (priseNoTax===0){
    console.log("Invalid order!");
}else{

    let taxes = priseNoTax*0.2;

    let total= priseNoTax+taxes;
    
    if (command==='special'){
        total*=0.9;

    }

console.log('Congratulations you\'ve just bought a new computer!');
console.log(`Price without taxes: ${priseNoTax.toFixed(2)}$`);
console.log(`Taxes: ${taxes.toFixed(2)}$`);
console.log('-----------');
console.log(`Total price: ${total.toFixed(2)}$`);
}
}
computerStore(([

    '1050',
    
    '200',
    
    '450',
    
    '2',
    
    '18.50',
    
    '16.86',
    
    'special'
    
    ]))