function blackFlag (arr){
let days = Number(arr.shift());
let daylyPlunder = Number (arr.shift())
let expectedPlunder = Number(arr.shift())
let plunder = 0;

for (let i =1; i <= days; i++){
    let day = i
   
plunder += daylyPlunder;

if (day%3===0){
   plunder+= daylyPlunder*0.5
   
}else if (day%5===0) {

plunder*=0.7

}
}
if (plunder >= expectedPlunder){
    console.log(`Ahoy! ${plunder.toFixed(2)} plunder gained.`);
}else {
    let percentage = (plunder/expectedPlunder)*100
  
    console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
}

}
blackFlag(["10",
"20",
"380"])