function softuniBar (arr){

    let income = 0
    let command = arr.shift()

    let pattern = /%(?<customerNme>[A-Z][a-z]+)%[^|$%.0-9]*<(?<product>\w+)>[^|$%.0-9]*\|(?<qty>\d+)\|[^|$%.0-9]*(?<price>\d+\.?\d*)\$/
    
    while (command !== 'end of shift'){
let match = command.match(pattern)

if (match){

let { customerNme, product, qty, price} = match.groups
let totalPrice = Number(qty)*Number(price)
income+=totalPrice
console.log(`${customerNme}: ${product} - ${totalPrice.toFixed(2)}`);
}

        command= arr.shift()
    }
console.log(`Total income: ${income.toFixed(2)}`);


}
softuniBar(['%George%<Croissant>|2|10.3$', '%Peter%<Gum>|1|1.3$', '%Maria%<Cola>|1|2.4$', 'end of shift'])