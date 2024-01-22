/*• "Deliver {DistributorName} {MoneySpent}" means that Maria has been delivered some ingredients
 for baking the goods that she will sell in her bakery:
◦ If the distributor does not exist, add them and the money spent to your record. 
◦ Keep track of the money spent on the delivered ingredients for each of the distributors.
◦ If the distributor with this name exists, just increase the value of the money in their record.
• "Return {DistributorName} {MoneyReturned}" means that Maria returns the ingredients that she
 does not need, or she had purchased by mistake, and the distributor give her back the spend 
 money:
◦ Decrease the money of the given distributor with the given amount. If the cost of the 
ingredients becomes 0, you should remove the distributor.
◦ If the distributor is not on the record, ignore the command.
◦ If the money spent to the given distributor are less than the given amount (money returned), 
ignore the command. 
• "Sell {ClientName} {MoneyEarned}" means that Maria sold some goods to a client, and she 
earned a certain amount of money:
◦ If the client does not exist, add the client’s name to your record. 
◦ If the client exists, just increase the money earned from that client in her/ his record.
◦ You must keep track of the money spent by each client and the total money spent by all clients!*/

function monthlyReport (arr){
    let storage= {}
    let clients = {}
 for(let command of arr){
 let tokens = command.split(' ')
 let action = tokens.shift()
      
if (action==='Deliver'){
    let distrName = tokens.shift();
    let moneSpent = Number(tokens.shift())
    if (distrName in storage){
storage[distrName].moneSpent+=moneSpent
    }else {
        storage[distrName]=moneSpent
    }
}else if (action==='Return'){
    let distrName = tokens.shift();
    let moneSpent = Number(tokens.shift())
    if (distrName in storage){
        if (storage[distrName].moneSpent>moneSpent){
        storage[distrName].moneSpent-=moneSpent
            }else {
                action= tokens.shift();
                continue;
            }
            }else {
                action= tokens.shift();
                continue;
}

    }else if (action === 'Sell'){
let client= tokens.shift();
let money = Number(tokens.shift())
if (client in clients){
    clients[client].money+=money
}else {
    clients[client].money=money
}
    }
}
console.log(storage);
console.log(clients);

}
monthlyReport(["Deliver North 200.30",
"Sell Peter 30.20",
"Return Macro 5000.00",
"Return North 100.30",
"Sell Peter 50.50",
"End "])