function destinationMapper(str){

 /*   After you have matched all the valid locations, you have to calculate travel points.
     They are calculated by summing the lengths of all the valid destinations that you have found on the map. 
In the end, on the first line, print: "Destinations: {destinations joined by ', '}". 
On the second line, print "Travel Points: {travel_points}".
Input / Constraints
    • You will receive a string representing the locations on the map.
    • JavaScript: you will receive a single parameter: string.
Output*/
let points = 0;


let pattern = /([=\/])([A-Z][A-Za-z]+)\1/g

let matches = str.match(pattern);

if (matches){
    let destination = matches.map(match=>match.slice(1,-1));

    points = destination.reduce((acc,val)=>acc+val.length,0);

console.log(`Destinations: ${destination. join(', ')}`);
}else {
    console.log(`Destinations:`);
}

console.log(`Travel Points: ${points}`);

}
destinationMapper("=Hawai=/Cyprus/=Invalid/invalid==i5valid=/I5valid/=i=")