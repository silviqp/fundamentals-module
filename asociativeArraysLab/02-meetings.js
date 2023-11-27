function meetingsShedule (arr){
//  creating object 
let meetings={};

//iterating through the entries of arr 
for (let entry of arr){
    // making variable witch holds destructured array for the day and the name 
    let [day, name]= entry.split(' ');
    // checking if day is doublicted 
if (meetings[day]){
    console.log(`Conflict on ${day}!`);
}else {
    meetings[day]=name;
    console.log(`Scheduled for ${day}`);
}                                                           
}                                                    
for (let [day,name] of Object.entries(meetings)){
    console.log(`${day} -> ${name}`);                 
}
}
meetingsShedule(['Monday Peter',

'Wednesday Bill',

'Monday Tim',

'Friday Tim'])                                