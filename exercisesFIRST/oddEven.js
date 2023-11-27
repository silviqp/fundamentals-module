function oddEven(num) {
    let even = 0;
    let odd = 0;
    let numStr = num.toString()
    for (let i = 0; i < numStr.length; i++) {
        let curNum = Number(numStr[i])
        if (curNum % 2 === 0) {
            even += curNum
        } else {
            odd += curNum
        }

    }
    console.log(`Odd sum = ${odd}, Even sum = ${even}`);

}


oddEven(1000435)