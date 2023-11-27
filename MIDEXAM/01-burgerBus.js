function burgerBus(arr) {

    let cities = arr.shift();
    let total = 0;
    let profit = 0
    for (let cur = 1; cur <= cities; cur++) {
        let name = arr.shift();
        let income = arr.shift();
        let expenses = arr.shift()
        if (cur % 5=== 0 && cur % 3 === 0){
            income*=0.9;
            total=income-expenses;
            profit+=total
        }else if (cur % 3 === 0) {
            expenses *= 1.5
            total = income - expenses
            profit += total
        } else if (cur % 5 === 0) {
            income *= 0.9
            total = income - expenses
            profit += total
        
        } else {
            total = income - expenses
            profit += total
        }

        console.log(`In ${name} Burger Bus earned ${total.toFixed(2)} leva.`);

    }
    console.log(`Burger Bus total profit: ${profit.toFixed(2)} leva.`);
}
burgerBus((["5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20","5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20","5",

    "Lille",

    "2226.00",

    "1200.60",

    "Rennes",

    "6320.60",

    "5460.20",

    "Reims",

    "600.20",

    "452.32",

    "Bordeaux",

    "6925.30",

    "2650.40",

    "Montpellier",

    "680.50",

    "290.20"]))