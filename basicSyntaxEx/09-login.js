// You will be given a string representing a username. The correct password will be that username reversed. Until you 
// receive the correct password print on the console: "Incorrect password. Try again.". When you receive the correct 
// password print: "User {username} logged in."

// However, on the fourth try if the password is still not correct print: "User {username} blocked!" and end the 
// program.

// The input comes as an array of strings - the first string represents username and each subsequent string is a
function login (input){
let username = input[0];
 let pass = '';
 for (let i = username.length-1;i>=0;i--){
    pass += username[i]
 }
 let guess = input[1];
 let index =2 ;
 let wrong = 0;
  
 while (guess!=pass){
    wrong++;
    if (wrong==4){
        console.log(`User ${username} blocked!`);
        return;
    
    }
    console.log("Incorrect password. Try again.");
    guess =input[index];
    index++;

 }
console.log(`User ${username} logged in.`);

}
login(['sunny','rainy','cloudy','sunny','notsunny'])