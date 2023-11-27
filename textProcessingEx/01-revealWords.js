function revealWords (wordStr,text){
    let words = wordStr.split(', ');

    for (let word of words){
        let starSlot = '*'.repeat(word.length);
        text = text.replace(starSlot,word);

    }
console.log(text);

}
revealWords('great',

'softuni is ***** place for learning new programming languages')