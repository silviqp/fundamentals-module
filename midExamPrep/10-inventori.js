function inventory (arr){
 let inventori = arr.shift().split(', ')
 
 for (let el of arr){
   let tokens = el.split(' - ')
    let command = tokens[0]
   if (command !== 'Craft!'){
    if (command==='Collect'){
        let item = tokens[1]
      
        if (!inventori.includes(item)){
          
            inventori.push(item)
       }
     
    }else if (command==='Drop'){
        let item = tokens[1];
       
        if (inventori.includes(item)){
            let idx = inventori.indexOf(item)
            inventori.splice(idx,1)
        }
       
    }else if (command==='Combine Items'){
        let item = tokens [1];
    
        let newI = item.split(':')
        let  first = newI[0];
        let second = newI[1];
        if (inventori.includes(first)){
            let idx = inventori.indexOf(first);
            inventori.splice(idx+1,0,second)
        }
        }else if(command === 'Renew'){
            let item = tokens[1];
            
    if (inventori.includes(item)){
        
            let idx = inventori.indexOf(item);
          inventori.splice(idx,1);
            inventori.push(item)
   }
    } 
    
 }else{
    console.log(inventori.join(', '));
 }

}

}
inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ])