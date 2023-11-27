function smallestTwo (arr){

    let sortInAscending = arr.sort((a,b)=>{return a-b})

    console.log(`${arr[0]} ${arr[1]}`);
}
smallestTwo([30, 15, 50, 5])