 function solve (arr){

//тъй като на нулев индекс имаме думите които трябва да търсим ги вадим от масива
let searched = arr.shift().split (' ')

//правим обекто който ще държи появяването на думите в текста 
let occurances = {}

//итерираме през търсените думи и ги добавяме като ключове на обекта със стойност нула 
for (let word of searched){
   occurances[word]=0
}

//итерираме през инпута и ако намерим търсената дума я добавяме към обекта 
for (let word of arr) {
   
   //Проверяваме дали думата я има в обекта и ако я има увеличаваме броя появявания
   if (word in occurances){
      occurances[word] ++
   }
}
//вземаме ентритата и сортираме
let sorted = Object.entries(occurances).sort((a,b)=>b[1]- a[1])

//итерираме през ентритата и отпечатваме в желания формат
for (let [word, count] of sorted){

   console.log(`${word} - ${count}`);
}


 }
 
 
 solve ([

    'is the',
    
    'first', 'sentence', 'Here', 'is',
    
    'another', 'the', 'And', 'finally', 'the',
    
    'the', 'sentence'])