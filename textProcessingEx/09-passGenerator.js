function passGenerator (arr){
let [str1,str2,replStr]= arr;
let concated = str1+str2;
let vowels = ['a','e', 'i', 'o', 'u'];
let idx = 0

for (let char of concated){
    if (vowels.includes(char)){
        concated=concated.replace(char,replStr[idx].toUpperCase());
        idx++;
        if (idx == replStr.length){
            idx = 0;

        }
    }
}
let pass = concated.split('').reverse().join('');
console.log(`Your generated password is ${pass}`);
}
passGenerator([

    'ilovepizza',
    
    'ihatevegetables',
    
    'orange'
    
    ])