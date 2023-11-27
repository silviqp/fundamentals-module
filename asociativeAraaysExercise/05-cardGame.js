function cardGame (arr){
let playersCards ={};
let powerValues = {2:2, 3:3,4:4,5:5,6:6,7:7,8:8,9:9,10:10,J:11,Q:12,K:13,A:14};
let typeValues = {S:4,H:3,D:2,C:1};

for (let playerDeck of arr){
    let  [name,cardsStr]= playerDeck.split(': ');
    let cards = cardsStr.split(', ');

    if (name in playersCards){
        playersCards[name].push(...cards);
    }else {
        playersCards[name]=cards;

    }
}
let entries = Object.entries(playersCards);
for (let [name,deck] of entries){
    let unique = new Set(deck);
    let valueSum = 0;
for (let card of unique){
    let power = card.slice(0, card.length - 1);
    let type = card[card.length-1];

    let cardValue = powerValues[power]*typeValues[type];
valueSum+=cardValue
}

console.log(`${name}: ${valueSum}`);
}

}


cardGame([

    'John: 2C, 4H, 9H, AS, QS',
    
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    
    'Thomas: QH, QC, JS, JD, JC',
    
    'John: JD, JD, JD, JD'
    
    ])