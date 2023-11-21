// console.log() simply displays information in your Javascript console.
console.log(1);
// We will use console.log() as a tool to test our code.
//JavaScript Variables
//Variables are containers that store information for later use.
//let test;
//console.log(test);
//The console prints undefined. This is because we have not initialized our variable. Initializing a variable is the process of assigning a value to it.
let test;
test = 1;
console.log(test);
//You can also assign a value to a variable directly when you create it.
let haha = 1;
console.log(test);

let num = 0;
console.log(num);
num = 2;
console.log(num);
// let and const The difference between the two is that you can not assign a new value to a variable that was created with const.
const num;
num = 5;
console.log(num);
//Uncaught SyntaxError: Missing initializer in const declaration const we directly assign a value.
//But, why should you use const instead of let?
//It is considered good practice to use const for variables whoose value will never change.
const pi = 3.14159;
const num = 5;
console.log('The value of num is: ' + num);
