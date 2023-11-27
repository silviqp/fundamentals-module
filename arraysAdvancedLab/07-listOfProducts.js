// You will receive an array of products. Print a numbered array of all the products ordered by name.
function listOfProducts(array) {
    let alphabetic = array.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < alphabetic.length; i++) {

        console.log(`${i + 1}.${alphabetic[i]}`);
    }

}
listOfProducts(['Watermelon', 'Banana', 'Apples'])

// 80/100 ??????