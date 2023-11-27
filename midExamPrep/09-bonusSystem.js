// 90/100 CHECK WHERE MISTAKE IS 

function bonusSystem (arr){
let students = Number(arr.shift())
let lectures =Number (arr.shift())

let bonus = Number(arr.shift())

let total = []
let maxAtendance = [];


for (let i = 0; i < students; i ++){
 let att = (arr[i]);
let bonus1  = Math.ceil((att/ lectures)*(5+bonus))
maxAtendance.push(att)
total.push(bonus1)
}

total.sort((a,b)=>b-a);
maxAtendance.sort((a,b)=>b-a)

let maxAtt = maxAtendance.shift();
let maxBonus = total.shift();

console.log(`Max Bonus: ${maxBonus}.`);
console.log(`The student has attended ${maxAtt} lectures.`);
}
// function solve(arr) 
//     let studentsCount = Number(arr.shift());
//     let allLectures = Number(arr.shift());
//     let initialBonus = Number(arr.shift());
//     let maxAtt = 0;
//     let maxBonus = 0;
//     for (let i = 0; i < studentsCount; i++) {
//         let attendances = arr[i];
//         let bonus = (attendances / allLectures) * (5 + initialBonus);
//         if (bonus >= maxBonus) {
//             maxBonus = bonus;
//             maxAtt = attendances;
//         }
//     }
  
// }
bonusSystem(['5',  '25', '30','12', '19', '24','16', '20'])