function funiture (arr){
let items = [];
let totalPrice = 0;

let pattern = />>(?<name>[A-Z][A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<qty>\d+)/;

let command = arr.shift();

while (command != 'Purchase'){
 let match = command.match(pattern)

 if (match){
    let { name, price, qty } = match.groups

    let fPrice = Number (price) * Number (qty)
    items.push(name)
    totalPrice+=fPrice
 }
 command= arr.shift()

}
console.log('Bought furniture:');
if (items.length>0){


console.log(items.join('\n'));
}
console.log(`Total money spend: ${totalPrice.toFixed(2)}`);
}
funiture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])