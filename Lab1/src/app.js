const mathOperations = require('./simpleCalc');

const num1 = 25;
const num2 = 5;

console.log(`The sum of ${num1} and ${num2} is ${mathOperations.sum(num1, num2)}`);
console.log(`The difference of ${num1} and ${num2} is ${mathOperations.diff(num1, num2)}`);
console.log(`The product of ${num1} and ${num2} is ${mathOperations.product(num1, num2)}`);
console.log(`The division of ${num1} and ${num2} is ${mathOperations.divide(num1, num2)}`);