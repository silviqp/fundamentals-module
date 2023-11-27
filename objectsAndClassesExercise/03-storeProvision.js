function storeProvision(stockArr, orderedArr) {
    // making object which will e empty at first
    let products = {};
    // making for loop where we are taking element two by two 
    // then we place the produsts in the object 

    for (let i = 0; i < stockArr.length; i += 2) {
        // taking product and qty;

        let productName = stockArr[i];
        let productQty = Number(stockArr[i + 1]);
        // pushing product and qty in the object by making the name to be KEY, and the qty to be VALUE;
        products[productName] = productQty;
    }

    //making another loop for the ordered prod

    for (let i = 0; i < orderedArr.length; i += 2) {

        let productName = orderedArr[i];
        let productQty = Number(orderedArr[i + 1]);
        // with IN method we check if the product already exist in the storage 

        if (productName in products) {
            // we add the qty to the already existing qty;
            products[productName] += productQty;

        } else {
            products[productName] = productQty
        }

    }
    console.log(products);
    //to print the result as wanted we should check the entries 
    let entries = Object.entries(products);
    //with for-of loop we split the product and qty;
    for (let entry of entries) {
        console.log(`${entry[0]} -> ${entry[1]}`);
    }
}
storeProvision([

    'Chips', '5', 'CocaCola', '9', 'Bananas',

    '14', 'Pasta', '4', 'Beer', '2'

],

    [

        'Flour', '44', 'Oil', '12', 'Pasta', '7',

        'Tomatoes', '70', 'Bananas', '30'

    ])