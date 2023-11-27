function place (word,symbol,match){

let result = word.replace('_',symbol);
let output = result === match? 'Matched':'Not matched'
console.log(output);
}
place('Str_ng', 'I','Strong')