// 1 centuries = 100 years = 36524 days = 876576 hours = 52594560 minutes
// Assume that a year has 365.2422 days on average (the Tropical year).
// Write a program that receives a number of centuries and converts it to years,
//  days, hours, and minutes.
function centuries (century){
let years= century*100;
let days =Math.floor(years*365.2422)
let hours = days*24;
let minutes = hours *60

console.log(`${century} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}
centuries(1)