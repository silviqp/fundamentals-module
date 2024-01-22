function worldTour (arr){
/*On the first line, you will be given a string containing all of your stops. Until you receive the command "Travel", you will be given some commands to manipulate that initial string. The commands can be:
    • "Add Stop:{index}:{string}":
        ◦ Insert the given string at that index only if the index is valid.
    • "Remove Stop:{start_index}:{end_index}":
        ◦ Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid.
    • "Switch:{old_string}:{new_string}":
        ◦ If the old string is in the initial string, replace it with the new one (all occurrences).*/
    let stops = arr.shift()

    let command = arr.shift();

    while (command !== 'Travel'){
let tokens = command.split(':');
let action = tokens.shift();

if (action==='Add Stop'){
    let idx= Number(tokens.shift());
    let str = tokens.shift();
let added = stops.slice(0,idx)+str+stops.slice(idx)

    console.log(added);
    stops= added
}else if (action === 'Remove Stop'){
let startIdx =Number (tokens.shift());
let endIdx = Number(tokens.shift());

let cutted =  stops.slice(startIdx,endIdx+1)
stops = stops.split(cutted).join('')

console.log(stops);

}else if (action === 'Switch'){
    let old = tokens.shift();
    let newS = tokens.shift();
     if (stops.includes(old)){
      stops =  stops.split(old).join(newS);

        console.log(stops);
     }else {
        console.log(stops);
     }
}


        command= arr.shift()
    }
console.log(`Ready for world tour! Planned stops: ${stops}`);

}

// worldTour((["Hawai::Cyprys-Greece",
// "Add Stop:7:Rome",
// "Remove Stop:11:16",
// "Switch:Hawai:Bulgaria",
// "Travel"])
// )

worldTour((["Albania:Bulgaria:Cyprus:Deuchland",
"Add Stop:3:Nigeria",
"Remove Stop:4:8",
"Switch:Albania: Azərbaycan",
"Travel"]))