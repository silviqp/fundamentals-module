// Write a program that receives a number n. For all numbers in the range [1…n] print the 
// number and if it is special or not (True / False).
// A number is special when its sum of digits is 5, 7 or 11.
function special (number){ {
        for (let i = 1; i <= number; i++) {
          let currentNum = i; // копираме стойността на i в нова променлива, защото ще трябва да я променяме
          let sumOfDigits= 0;
          while (currentNum > 0) { // въртим този цикъл докато не стигнем 0, т.е. обходили сме всички цифри на числото
            sumOfDigits += currentNum % 10; // към sumOfDigits добавяме стойността на последната цифра, напр. от 345 ще вземем 5
            currentNum = Math.trunc(currentNum / 10); // премахваме последната цифра от числото, напр. 345 ще стане 34
          }
      
          let isSpecialNumber = sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11;
         
          console.log(isSpecialNumber ? `${i} -> True` : `${i} -> False`);
        }
    }
}
special(15)