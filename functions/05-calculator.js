// Write a function that receives three parameters – two numbers and an operator (string) – and 
// calculates the result depending on the operator. Operator can be 'multiply', 'divide', 'add' or 
// 'subtract'. Try to solve this task using arrow functions.
function calculator(num1, num2, operator) {

    let result = 0;

    switch (operator) {
        case 'add':
             result = num1 + num2;
              break;
        case 'subtract':
             result = num1 - num2;
              break;
        case 'multiply':
             result = num1 * num2; 
             break;
        case 'divide': 
        result = num1 / num2; 
        break;
    }
    console.log(result);
}
calculator(5, 5, 'multiply')