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
//In the previous sections you learnt how to create variables and assign numbers to them — like this one that indicates the price of an arbitrary product:
const cost = 10;
// But, sometimes you might want to store information that cannot be represented by a number.
// For example, the product for which we already have a price could sometimes be on sale and sometimes not.
//To store this kind of information we can use JavaScript Booleans, like so:
const isOnSale = true;
//The value true indicates that the product is on sale.
//booleans can only have True and False values.
//If the product is not on sale we assign False.
const isOnSale = false;

//In the previous lesson you got to know the two boolean values true and false.
//However, sometimes we want to work with other data types, such as numbers, in a Boolean context.
//ctually, every single value in JavaScript can be transformed to a boolean value.
//To do so, we can make use of the Boolean() function.
console.log(Boolean(100));
//But, why does 100 become true? That's where the concepts of truthy and falsy come in.
//Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.
//All of the following values are falsy:
null
undefined
0
-0
NaN
An empty string ('')

// All words are false
let price;
console.log(Boolean(price));

//The first operator we explore is the Equal to (==) operator. It checks if two values are equal. For example:
2 == 2
//The second operator we explore is the Not Equal to (!=) operator. It checks if two values are not equal. For example:
2 != 2
2 > 1 // checks if 2 is greater than 1
2 < 1 // checks if 2 is less than 1
2 <= 1 // checks if 2 is less than or equal 1
2 >= 1 // checks if 2 is greater than or equal 1
//Strict equality (===)
//The strict equality (===) operator checks whether its two operands are equal, returning a Boolean result. Unlike the equality operator, the strict equality operator always considers operands of different types to be different.
console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false

//Strict inequality (!==)
//The strict inequality (!==) operator checks whether its two operands are not equal, returning a Boolean result. Unlike the inequality operator, the strict inequality operator always considers operands of different types to be different.
console.log(1 !== 1);
// Expected output: false

console.log('hello' !== 'hello');
// Expected output: false

console.log('1' !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true
//Logical AND (&&)
//The logical AND (&&) (logical conjunction) operator for a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.
//More generally, the operator returns the value of the first falsy operand encountered when evaluating from left to right, or the value of the last operand if they are all truthy.
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false
//Logical OR (||)
//The logical OR (||) (logical disjunction) operator for a set of operands is true if and only if one or more of its operands is true. It is typically used with boolean (logical) values. When it is, it returns a Boolean value. However, the || operator actually returns the value of one of the specified operands, so if this operator is used with non-Boolean values, it will return a non-Boolean value.
const a = 3;
const b = -2;

console.log(a > 0 || b > 0);
// Expected output: true

//Logical NOT (!)
//The logical NOT (!) (logical complement, negation) operator takes truth to falsity and vice versa. It is typically used with boolean (logical) values. When used with non-Boolean values, it returns false if its single operand can be converted to true; otherwise, returns true.
const a = 3;
const b = -2;

console.log(!(a > 0 || b > 0));
// Expected output: false
//Addition (+)
console.log(2 + 2);
// Expected output: 4

console.log(2 + true);
// Expected output: 3

console.log('hello ' + 'everyone');
// Expected output: "hello everyone"

console.log(2001 + ': A Space Odyssey');
// Expected output: "2001: A Space Odyssey"
//Subtraction (-)
console.log(5 - 3);
// Expected output: 2

console.log(3.5 - 5);
// Expected output: -1.5

console.log(5 - 'hello');
// Expected output: NaN

console.log(5 - true);
// Expected output: 4
//Multiplication (*)
console.log(3 * 4);
// Expected output: 12

console.log(-3 * 4);
// Expected output: -12

console.log('3' * 2);
// Expected output: 6

console.log('foo' * 2);
// Expected output: NaN
//Division (/)
console.log(12 / 2);
// Expected output: 6

console.log(3 / 2);
// Expected output: 1.5

console.log(6 / '3');
// Expected output: 2

console.log(2 / 0);
// Expected output: Infinity
//Remainder (%)
console.log(13 % 5);
// Expected output: 3

console.log(-13 % 5);
// Expected output: -3

console.log(4 % 2);
// Expected output: 0

console.log(-4 % 2);
// Expected output: -0

//introduction to strings
//We can use the typeof operator to find out the type of a value or variable. Try it out:
console.log(typeof 1);
const num = 1;
console.log(typeof num);
//Great! But what if we do not want to store a number but some text in a variable?
const text = hello;
console.log(text);
//ReferenceError: hello is not defined
//It doesn't matter if you use single or double quotes or backticks.

