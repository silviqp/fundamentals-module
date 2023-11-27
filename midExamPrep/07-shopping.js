function shoping (arr){
let list = arr.shift().split('!');

for (let command of arr){
    let tokens = command.split(' ')
    
let comm = tokens.shift()

        if (comm==='Urgent'){
            
            let product = tokens[0]
            if (!list.includes(product)){
                list.unshift(product);
            }
        }else if (comm === 'Unnecessary'){
            let product = tokens[0];
            if (list.includes(product)){
let index = list.indexOf(product)

list.splice (index,1);

            }
        }else if(comm === 'Correct'){
           
            let product = tokens[0];
            let newName = tokens[1];
            if (list.includes(product)){
                let index = list.indexOf(product)
                
                
                list.splice(index,1);
               
                list.splice(index,0,newName)
            }
        }else if (comm === 'Rearrange'){
            let product = tokens[0];
            if (list.includes(product)){
            let index = list.indexOf(product);
            list.splice(index,1);
            list.push(product)
        }
    }
    
    }
    

    console.log(list.join(', '));


}
shoping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Water",
"Unnecessary Milk",
"Correct Pepper Onion",
"Rearrange Salt",
"Correct Milk Potatoes",
"Go Shopping!"])