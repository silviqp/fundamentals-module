function taxCalculator(input){
    let price = 0;
let total =0 
for (let element of input){

let tokens = element.split('>>')

for (let el of tokens ){
    let data = el.split(' ');
    let vihicleType = data.shift();
if (vihicleType!='family' && vihicleType!='heavyDuty' && vihicleType!='sports'){
    console.log('Invalid car type.');
}else if (vihicleType==='family'){
let years = data[0];
let kilometers = data [1];
kilometers =Math.floor(kilometers/3000)
price= 50- years*5+ kilometers*12
total+=price
console.log(`A ${vihicleType} car will pay ${price.toFixed(2)} euros in taxes.`);
    }else if (vihicleType==='heavyDuty'){
        let years= data[0];
        let kilometers = data [1];
        kilometers=Math.floor(kilometers/9000);
   
        price = 80 -(years *8) +kilometers*14
        total+=price
        console.log(`A ${vihicleType} car will pay ${price.toFixed(2)} euros in taxes.`)
    }else if (vihicleType==='sports'){
        let years= data[0];
        let kilometers= data [1];
        kilometers = Math.floor(kilometers/2000)
        price = 100 -(years *9) +kilometers*18
        total+=price
        console.log(`A ${vihicleType} car will pay ${price.toFixed(2)} euros in taxes.`)
    }

  
   
    
}
}
console.log(`The National Revenue Agency will collect ${total.toFixed(2)} euros in taxes.`);
}
taxCalculator(['family 3 7210>>van 4 2345>>heavyDuty 9 31000>>sports 4 7410'])