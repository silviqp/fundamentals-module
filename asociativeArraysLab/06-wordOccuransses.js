function wordOccuranses (arr){
let words = {};

for (let element of arr){

    if (!words[element]){
        words[element]=0;
    }
    words[element]++
}

let sorted = Object.entries(words)
.sort((a,b)=>b[1]-a[1])

for (let [word,count] of sorted){
    console.log(`${word} -> ${count} times`);
}
}
wordOccuranses(["Here", "is", "the", "first", "sentence",

"Here", "is", "another", "sentence", "And",

"finally", "the", "third", "sentence"])