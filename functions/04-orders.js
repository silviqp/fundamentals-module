// Write a function that calculates the total price of an order 
// and prints it on the console. The function should receive one
//  of the following products: coffee, coke, water, snacks; and a
//  quantity of the product. The prices for a single piece of each 
//  product are:

// · coffee - 1.50

// · water - 1.00

// · coke - 1.40

// · snacks - 2.00

// Print the result formatted to the second decimal place.
function orders (product, quantity){
    let price = 0;

    if (product === 'coffee'){
        price += 1.5*quantity
    }else if (product==='water'){
        price+= 1*quantity
    }else if (product ==='coke'){
        price += 1.4*quantity
    }else if (product === 'snacks'){
        price += 2*quantity
    }
    console.log(price.toFixed(2));
}


orders("water", 5)