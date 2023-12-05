// Create variables and initialize them with values of different types
const booleanVar = true;
const numberVar = 42;
const bigIntVar = BigInt(12345678901234567890n);
const stringVar = "Hello, World!";
const undefinedVar = undefined;

// Print values and types using console.log with string interpolation
console.log(`${booleanVar} [${typeof booleanVar}]`);
console.log(`${numberVar} [${typeof numberVar}]`);
console.log(`${bigIntVar} [${typeof bigIntVar}]`);
console.log(`${stringVar} [${typeof stringVar}]`);
console.log(`${undefinedVar} [${typeof undefinedVar}]`);

// Chain of conversions
const initialString = "1234";
const convertedNumber = Number(initialString);
const convertedBigInt = BigInt(convertedNumber);
const resultingBoolean = Boolean(convertedBigInt);

console.log(`${resultingBoolean} [${typeof resultingBoolean}]`);

// Adding two values of the same type
const additionResultSameType = numberVar + 5;
console.log(`${additionResultSameType} [${typeof additionResultSameType}]`);

// Adding two values of different types
const additionResultDiffType = numberVar + booleanVar;
console.log(`${additionResultDiffType} [${typeof additionResultDiffType}]`);

// Modifying the line to get the result 43
const str1 = 42 + + "1";
console.log(`${str1} [${typeof str1}]`);
//Write a code that will create variables and initialize them with values of Boolean, Number, BigInt, String, and undefined types using (when possible) literals and constructor functions.

Solution
let b1 = true;
let b2 = Boolean(true);

let n1 = 100;
let n2 = Number(200);

let bi1 = 100n;
let bi2 = BigInt(200);

let s1 = "Hello";
let s2 = String("Hello");

let u1 = undefined;


Task 2

Print all values and all types of those values using console.log. Try to use string interpolation to display the value and type at the same time with a single console.log call, e.g. in the following form: 1000 [number].

Solution
console.log(`${b1} [${typeof b1}]`);
console.log(`${b2} [${typeof b2}]`);
console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);
console.log(`${bi1} [${typeof bi1}]`);
console.log(`${bi2} [${typeof bi2}]`);
console.log(`${s1} [${typeof s1}]`);
console.log(`${s2} [${typeof s2}]`);
console.log(`${u1} [${typeof u1}]`);


Task 3

Carry out a chain of conversions: create a Boolean from a BigInt created from a Number that was created from a String. Start with the value "1234". Is it possible?

Example
let b = Boolean( BigInt(Number("1234")));
console.log(`${b} [${typeof b}]`);

// or

let s = "1234";
let n = Number(s);
let bi = BigInt(n);
let b = Boolean(bi);
console.log(`${b} [${typeof b}]`);


Task 4

Try adding two values of the same type and check the result type. Try it for all primitive types.

Example
let b = true + false;
let n = 100 + 200;
let bi = 100n + 200n;
let s = "He" + "llo";
let u = undefined + undefined;

console.log(`${b} [${typeof b}]`); // !!! number 
console.log(`${n} [${typeof n}]`);
console.log(`${bi} [${typeof bi}]`);
console.log(`${s} [${typeof s}]`);
console.log(`${u} [${typeof u}]`); // !!! number


Task 5

Try adding two values of different types and check the results.

Example
let b1 = true + 100; 
// let b2 = true + 100n; // -> error!
let b3 = true + "100"; 
// let n1 = 100 + 200n; // -> error!
let n2 = 100 + true;
let n3 = 100 + "200";
// let bi1 = 100n + 200;  // -> error!
// let bi2 = 100n + true  // -> error!
let bi3 = 100n + "200"; 
let s1 = "100" + 200;
let s2 = "100" + 200n;
let s3 = "100" + true;
let s4 = "abc" + 200;
let s5 = "abc" + 200n;
let s6 = "abc" + true;

console.log(`${b1} [${typeof b1}]`);    // -> 101 [number]
// console.log(`${b2} [${typeof b2}]`);
console.log(`${b3} [${typeof b3}]`);    // -> true100 [string]
// console.log(`${n1} [${typeof n1}]`);
console.log(`${n2} [${typeof n2}]`);    // -> 101 [number]
console.log(`${n3} [${typeof n3}]`);    // -> 100200 [string]
// console.log(`${bi1} [${typeof bi1}]`);
// console.log(`${bi2} [${typeof bi2}]`);
console.log(`${bi3} [${typeof bi3}]`);  // -> 100200 [string]
console.log(`${s1} [${typeof s1}]`);    // -> 100200 [string]
console.log(`${s2} [${typeof s2}]`);    // -> 100200 [string]
console.log(`${s3} [${typeof s3}]`);    // -> 100true [string]
console.log(`${s4} [${typeof s4}]`);    // -> abc200 [string]
console.log(`${s5} [${typeof s5}]`);    // -> abc200 [string]
console.log(`${s6} [${typeof s6}]`);    // -> abctrue [string]


Task 6

Try to modify the line const str1 = 42 + "1"; to get the result 43 (without removing the quotes around 1).

Example
const str1 = 42 + +"1";
