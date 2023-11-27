function piccollo (arr){
 
    let parking = new Map();

    for (let carData of arr){
        let [direction, carNum] = carData.split(', ');
        if (direction==='IN'){
            parking.set(carNum,'')
        }else{
            parking.delete(carNum)
        }
    }
let sorted = Array.from(parking).sort((a,b)=>a[0].localeCompare(b[0]));
if (parking.size === 0){
    console.log('Parking Lot is Empty');
}else {
    for (let carNum of sorted){
        console.log(carNum[0]);
    }
}

}
piccollo(['IN, CA2844AA',

'IN, CA1234TA',

'OUT, CA2844AA',

'OUT, CA1234TA'])