function sequenceOf (str){
let nums = str.split(' '). map(Number);
let avg = nums.reduce((acc,val)=>acc+val)/nums.length;

let validNums = nums.filter(num=>num>avg).sort ((a,b)=> b- a).slice(0,5);

if (validNums.length==0){
    console.log('No');
}else{
    console.log(validNums.join(' '));
}


}
sequenceOf('1')