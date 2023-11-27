
function calculator (num1,delimeter,num2){
    let result = 0;

    if (delimeter =='+' ){
        result = num1+num2
    }else  if (delimeter =='-' ){
        result = num1-num2
    }else  if (delimeter =='/' ){
        result = num1/num2
    }else if (delimeter =='*' ){
        result = num1*num2
    }

console.log(result.toFixed(2));
}
calculator(5,

    '-',
    
    10)