function registrationValid (arr){
    let validCount = 0
    let count = Number(arr.shift())
    let pattern = /(U\$)(?<username>[A-Z][a-z]{3,})\1(P@\$)(?<pass>\w{5,}\d{1,})(P@\$)/g
    let registr = arr.shift();
   let matches = registr.matchAll(pattern);
    
   for (let match of matches){
   if (match===nul){
    console.log('inv')
   }else {


   validCount++
   let {username,pass}= matches.groups
   console.log(`Username: ${username}, Password: ${pass}`)

   }
   }
  
console.log(`Successful registrations: ${validCount}`);

}
registrationValid(["3",
"U$myU$-->P@$asdqwe123P@$",
"Sara 1232412",
"U$NameU$P@$Pass234P@$"])