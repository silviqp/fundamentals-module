function palindrome (arr){

    for (let i = 0; i < arr.length; i ++){

        let numAsString = arr[i]. toString();
        let reversed = numAsString.split('').reverse().join('');

        if (numAsString===reversed){
            console.log(true);
        }else{
            console.log(false);
        }
    }

}
palindrome ([123,323,421,121])