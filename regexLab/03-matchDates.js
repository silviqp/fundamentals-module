function datematch (input){
let pattern =/(?<day>\d{2})(?<sep>[-./])(?<month>[A-Z][a-z]{2})\k<sep>(?<year>\d{4})/g
 let match = pattern.exec(input)

 while (match !== null){
    let {day,month,year}= match.groups

    console.log(`Day: ${day}, Month: ${month}, Year: ${year}`);
    match= pattern.exec(input)
 }
 }
datematch(['13/Jul/1928, 01/Jan-1951, 25.Dec.2023, 1/Feb/2016 '])