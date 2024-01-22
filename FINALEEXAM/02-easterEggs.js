function easterEggs (arr){
str = arr.toString()
let eggs = []

let pattern = /([#,@]*)+(?<color>[a-z]{3,})\1+[^\d,\w]+(\/+)(?<count>\d+)(\/+)/g

let matches = str.matchAll(pattern);

for (let match of matches){
    let {color,count}= match.groups;
 eggs.push({color,count})

  

    console.log(`You found ${count} ${color} eggs!`)   

}
console.log(``);
    }
// easterEggs((['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']))
easterEggs(['@red#/8/@rEd@/2/#@purple@////10/'])
