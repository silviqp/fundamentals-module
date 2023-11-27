function censored (text,cens){
// let censor = '*'.repeat(cens.length);

// while (text.includes(cens)){
//     text = text.replace(cens,censor)
// }
// console.log(text);

console.log(text.split(cens).join('*'.repeat(cens.length)));
}
censored('A small sentence with some words',

'small')

