function reverse (n, nums){
    // create new array
    let result = [];
    // coppy n values from given array to new array
    for (let i = 0; i < n; i++){
        result[i]= nums[i];
    }
    // reverse resulting array
    let reversed = [];
    for (let i = result.length; i>=0;i--){
        reversed[reversed.length]=result[i]
    }
    // print result on single line
    console.log(reversed.join(' '));
}
reverse(3, [10, 20, 30, 40, 50])