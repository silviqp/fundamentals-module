function countStrOccurances (text,str){
let words = text.split(' ');
let count = 0;

for (let cur of words ){
    if (cur === str){
        count ++
    }
}
console.log(count);

}
countStrOccurances('This is a word and it also is a sentence',

'is')