function solve (arr){
//правим празен обект 
let resources = {}
//с фор цикъл минаваме през масива със стъпка 2 защото в инпута са окомплектовани по двойки
    for (let i =0; i < arr.length; i +=2){
         //вземаме си ресурса на нулев индекс и количеството на първи 
    let resource = arr[i]
    let qty = arr[i+1]
    // проверяваме дали ресурса го има в обекта 
     if (resource in resources){
      // ако го има добавяме количеството към текущото 
        resources[resource]+=qty
        // ако  го няма добавяме нов ресурс и количество
     }else {
        resources[resource] = qty
     }
        
    }
    // разбиваме обекта на ентрита 
 let entries = Object.entries(resources)
 // обхождаме ентритата като ги деструктурираме още в цикъла 

 for (let [resource,qty] of entries){
 //печатаме по зададения формат
   console.log(`${resource} -> ${qty}`);
 }
    }
    
    
    solve([

    'Gold',
    
    '155',
    
    'Silver',
    
    '10',
    
    'Copper',
    
    '17'
    
    ])