function equal (arr){
let isEqual = true;

if (arr.length == 1){
    console.log('0');
}else {
    for (let i = 0;i<arr.length;i++){
        let leftSum = 0;
        let rigthSum = 0;

        for (let j = 0; j<arr.length; j++){
            if (j<i){
                leftSum+=Number(arr[j]);
            }else if (j>i){
                rigthSum+= Number (arr[j]);

            }
        }
if (leftSum==rigthSum && arr.length>1){
    console.log(i);
    isEqual= false;
    break;
}

    }
    if (isEqual){
        console.log('no');
}

}
}
equal([1, 2, 3, 3])