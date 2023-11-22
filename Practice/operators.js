const priceOne = 5;
const priceTwo = 10;
console.log(priceOne == priceTwo);
const priceThree = 10;
const priceFour = 10;
console.log(priceThree == priceFour);

const priceFive = 5;
const priceSix = 10;
 
console.log(priceFive < priceSix);
console.log(priceSix < priceFive);
const priceSeven = 10;
const priceEight = 15;
const priceNine = 10;
 
console.log(priceSeven >= priceEight);
console.log(priceSeven >= priceNine);
 
console.log(priceSeven <= priceEight);
console.log(priceSeven <= priceNine);

const numOne = 1;
const numTwo = 1;
const numThree = 2;
console.log(numOne <= numTwo, numTwo <= numThree);
console.log(1 === 1);
// Expected output: true

console.log('hello' === 'hello');
// Expected output: true

console.log('1' === 1);
// Expected output: false

console.log(0 === false);
// Expected output: false
//strict inequality
console.log(1 !== 1);
// Expected output: false

console.log('hello' !== 'hello');
// Expected output: false

console.log('1' !== 1);
// Expected output: true

console.log(0 !== false);
// Expected output: true
//&&
const a = 3;
const b = -2;

console.log(a > 0 && b > 0);
// Expected output: false
//||
const x = 4;
const y = 5;
console.log(x > 0 || y > 0)
//Expected output: True

const z = 3;
const p = -2;

console.log(!(z > 0 || p > 0));



