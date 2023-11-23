console.log(typeof 1);
const num = 1;
console.log(typeof num);

//Expected output number
//Great! But what if we do not want to store a number but some text in a variable?
let text = "hello";
console.log(text);
text = 'hi';
console.log(text);
text = `bye`;
console.log(text);


const txt = 'Titi';
console.log('The value of text is: ' + text);

const textOne = 'Hello';
const textTwo = 'World';
const combined = textOne + ' ' + textTwo;
console.log(combined);