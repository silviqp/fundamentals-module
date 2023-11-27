function charsRange (firstChar, secChar){

    let start = (Math.min (firstChar.charCodeAt(),secChar.charCodeAt()));
    let end = Math.max |(firstChar.charCodeAt(),secChar.charCodeAt());
    let charArr = [];

    for (let curChar = start; curChar<=end;curChar++){
        charArr.push(String.fromCharCode(curChar))
    }
return charArr.join(' ')
}
console.log(charsRange('a','d'));