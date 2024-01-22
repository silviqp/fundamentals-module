// function wildZoo (arr){
//  let animals = {};
// let count = 0
//  let command = arr.shift();
 
//  while (command !== 'EndDay'){
// let destructed = command.split(': ')
// action = destructed.shift();

// if (action === 'Add'){
// let tokens = destructed.shift().split('-')
// let name = tokens[0];
// let food = Number(tokens[1]);
// let area = tokens[2];

// if (name in animals){
// animals[name].food += Number(food);
// }else {
//    animals[name] = {food,area}
  
// }
// if (animals[name].area in animals){
//     count++
// }
// }else if (action === 'Feed'){
//     let tokens = destructed.shift().split('-')
//     let name = tokens[0];
//     let food = Number(tokens[1]);

//     if (name in animals){
//         animals[name].food -= food;

//     }else {
//         command=arr.shift();
//         continue;
//     }
//     if (animals[name].food <= 0){
//         console.log(`${name} was successfully fed`);
//         delete animals[name]
//     }
    
// }

// command = arr.shift()

// }



function wildZoo (arr){
    let animals = {};
   let count = 0
    let command = arr.shift();
    
    while (command !== 'EndDay'){
   let destructed = command.split(': ')
   action = destructed.shift();
   
   if (action === 'Add'){
   let tokens = destructed.shift().split('-')
   let name = tokens[0];
   let food = Number(tokens[1]);
   let area = tokens[2];
   
   if (name in animals){
   animals[name].food += Number(food);
   }else {
      animals[name] = {food,area}
    
   }

   
   }else if (action === 'Feed'){
       let tokens = destructed.shift().split('-')
       let name = tokens[0];
       let food = Number(tokens[1]);
   
       if (name in animals){
           animals[name].food -= food;
   
       }else {
           command=arr.shift();
           continue;
       }

       if (animals[name].food <= 0){
           console.log(`${name} was successfully fed`);
           delete animals[name]
       }
       
   }
   
   
   command = arr.shift()
   
   }

   
   let entries = Object.entries(animals);
   console.log("Animals:");
   entries.forEach(([animals,stats]) => console.log(` ${animals} -> ${stats.food}g`))
 entries = Object.entries(animals);
   console.log("Areas with hungry animals:"),

   
}


wildZoo(["Add: Jamie-600-WaterfallArea",
"Add: Maya-6570-WaterfallArea",
"Add: Adam-4500-ByTheCreek",
"Add: Bobbie-6570-WaterfallArea",
"Feed: Jamie-2000",
"Feed: Adam-2000",
"Feed: Adam-2500",
"EndDay"])