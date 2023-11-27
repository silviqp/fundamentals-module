function oddOccurances (str){
 let wordArr = str
 .split(' ')
 .map (w=>w.toLowerCase())
 let occurances = {};

for (let i = 0; i <wordArr.length; i ++){
if (!occurances.hasOwnProperty(wordArr[i])){
    occurances[wordArr[i]] =[]
}
occurances[wordArr[i]].push(i);
}
let sorted = Object.entries(occurances).sort((a,b)=>a[1][0]-b[1][0]);

let result = ''

for (let element of sorted){
    
    if (element[1].length % 2 !== 0){
        result += `${element[0]} `
    }
}
console.log(result);
}



oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')