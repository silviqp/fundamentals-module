function bitcoin (input){
let bitcoinPrice = 11949.16
let goldPrice = 67.51;
let bought =0;
let moneyLeft = 0;
let firstDay = 0;
let confirmDay = 0;
 
for (let i =1; i <= input.length; i ++){
let daylyGold = input[i-1];

if (i % 3 === 0){
    daylyGold*=0.70;
}
daylyGold*=goldPrice;
moneyLeft+=daylyGold

while (moneyLeft>=bitcoinPrice){
    moneyLeft-=bitcoinPrice;
    bought++;
    confirmDay++
    if (confirmDay==1){
        firstDay=i

    }
}
}
console.log(`Bought bitcoins: ${bought}`);
if (bought>0){
    console.log(`Day of the first purchased bitcoin: ${firstDay}`);
}
console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
}
bitcoin ([100, 200, 300])