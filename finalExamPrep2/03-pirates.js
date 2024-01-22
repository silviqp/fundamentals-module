function pIrates (arr){

    /* - до получаване на команда sail  вадим градовете с тяхното население и злато разделени с ||
-- ако получим град който вече имаме трябва да повишим стойностите на населението и златото 

- след sail до полъчаването на команда  end получаваме събития разделени с =>

-- plunder=>град=>хора=>злато атакували сме града  сме убили дадените ни хора и сме откраднали даденото злато,принтираме
, ако някое от двете достигне нула града е унищожен,го махаме от колекцията и принтираме 

-- prosper=>град=>злато повишава се златото на дадения град 
--- ако е отрицателно число спираме програмата и принтираме съобщение 
--- ако е положително число добавяме към вече наличното злато на града */

let targets = {};
let command = arr.shift();

while (command !== 'Sail' ){
let [city, population,gold ]= command.split ('||');
population = Number(population);
gold = Number(gold)

if (city in targets){
    targets[city].population += population
    targets[city].gold +=gold

}else {
    targets[city] = {population,gold};

}

   command = arr.shift()

}
command = arr.shift();

while (command !== 'End') {
    let tokens = command.split('=>');
    let action = tokens.shift();

    if (action == 'Plunder'){
        let [city,people,gold]= tokens;
        people = Number(people);
        gold = Number(gold);

        targets[city].population -= people;
        targets[city].gold -= gold;
        console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

        if (targets[city].population <= 0 || targets[city].gold <= 0){

            console.log(`${city} has been wiped off the map!`);
            delete (targets[city]);
        }
    }else {
        let [city,gold ] = tokens;

        gold = Number(gold);

        if (gold<0){
            console.log('Gold added cannot be a negative number!');
            command = arr.shift();
            continue;

        }
        targets[city].gold += gold;

        console.log(`${gold} gold added to the city treasury. ${city} now has ${targets[city].gold} gold.`);
    }
command = arr.shift();
}

let entries = Object.entries(targets);

if (entries.length == 0){
    console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
}else {
    console.log(`Ahoy, Captain! There are ${entries.length} wealthy settlements to go to:`);
    entries.forEach(([city,stats]) => console.log(`${city} -> Population: ${stats.population} citizens, Gold: ${stats.gold} kg`) )

}

}
pIrates((["Tortuga||345000||1250",

"Santo Domingo||240000||630",

"Havana||410000||1100",

"Sail",

"Plunder=>Tortuga=>75000=>380",

"Prosper=>Santo Domingo=>180",

"End"]))



// 180 gold added to the city treasury. Santo Domingo now has 810 gold.

// Ahoy, Captain! There are 3 wealthy settlements to go to:

// Tortuga -> Population: 270000 citizens, Gold: 870 kg

// Santo Domingo -> Population: 240000 citizens, Gold: 810 kg

// Havana -> Population: 410000 citizens, Gold: 1100 kg