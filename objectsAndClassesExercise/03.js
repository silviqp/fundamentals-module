function storeProv (stock,orders){
let products = {};

for (let i = 0; i<stock.length; i +=2) {

    let productName = stock[i];
    let productQty = Number(stock[i+1])
    products[productName]= productQty
}
for (let i = 0; i<orders.length;i+=2){
    let productName = stock[i];
    let productQty = Number(stock[i+1]);

    if (productName in products){
        products[productName]+=productQty
    }else{
        products[productName] = productQty
    }
}

let entries = Object.entries(products);
for (let [name,qty] of entries){
console.log(`${name} -> ${qty}`);
}

}
storeProv([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
    'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])