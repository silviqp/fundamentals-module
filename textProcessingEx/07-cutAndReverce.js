function cutAndReverce(str) {
    let middle = str.length / 2

    let firstHalf = str.slice(0, middle)
        .split('')
        .reverse()
        .join('');
    let secondHalf = str.slice(middle)
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);

}
cutAndReverce('tluciffiDsIsihTgnizamAoSsIsihT')