function solve (arr){

    //правим празен обект който държи компанията и служителите (в масив)
let companyEmployees = {}

//итерираме през елментите на входа 
for (let el of arr){

    // Деструктурираме елемента за да извадим компанията и ид на слъжител
let [company, id ] = el.split (' -> ')

//проверяваме дали имаме компанията в обекта 
if (company in companyEmployees){

//проверяваме да ид го има, ако го Няма го добавяме ако го има просто скипваме 
if (! companyEmployees[company].includes(id)){
    companyEmployees[company].push(id)
}
//ако нямаме компанията в обекта я добавяме 
}else{
    companyEmployees[company]= [id]
}
}
//вадим ентритата и сортираме компаниите по азбучен ред 
let sorted = Object.entries(companyEmployees).sort((a,b)=>a[0].localeCompare(b[0]))

for (let [name, ids ] of sorted){
    console.log(`${name}`);
    ids.forEach(id => console.log(`--${id}`))

}
}


solve ([ 'SoftUni -> AA12345', 'SoftUni -> BB12345', 
'Microsoft -> CC12345', 'HP -> BB12345' ])