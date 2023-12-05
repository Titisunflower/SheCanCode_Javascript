//Let's play florist. Declare six variables, remembering to name them according to their purpose:

//the price of a single rose (8) and the number of roses you have (70)
//the price of a single lily (10) and the number of lilies you have (50)
//the price of a single tulip (2) and the number of tulips you have (120)
//Now declare three variables, one each for the roses, lilies, and tulips you have, in which you place their total price. Insert the corresponding values into the variables using the variables declared in the previous step. Finally, declare a variable in which you store the price of all your flowers (again, use the previous variables for initialization). Display all inventory information in the console in the following form:

//Rose – unit price: 8 , quantity: 70 , value: 560
//Lily – unit price: 10 , quantity: 50 , value: 500
//Tulip – unit price: 2 , quantity: 120 , value: 240
//Total:  1300
//solution
// there are many possible and correct variable names
let rosePrice = 8;
let lilyPrice = 10;
let tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;
console.log("Rose - unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip - unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);
//Modify the code from the previous example. Assume that the prices of flowers will be constant (they will not change). Declare and initialize the remaining variables in the same way as in the previous example. Display all the gathered information in the console. Now decrease the number of roses by 20 and lilies by 30. Display all the collected information in the console again.
//solution
const rosePrice = 8;
const lilyPrice = 10;
const tulipPrice = 2;

let numberOfRoses = 70;
let numberOfLilies = 50;
let numberOfTulips = 120;

let rosesValue = rosePrice * numberOfRoses;
let liliesValue = lilyPrice * numberOfLilies;
let tulipsValue = tulipPrice * numberOfTulips;

let total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip - unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);

numberOfRoses = numberOfRoses - 20;
numberOfLilies = numberOfLilies - 30;

rosesValue = rosePrice * numberOfRoses;
liliesValue = lilyPrice * numberOfLilies;
tulipsValue = tulipPrice * numberOfTulips;

total = rosesValue + liliesValue + tulipsValue;

console.log("Rose - unit price:", rosePrice, ", quantity:", numberOfRoses, ", value:", rosesValue);
console.log("Lily  - unit price:", lilyPrice, ", quantity:", numberOfLilies, ", value:", liliesValue);
console.log("Tulip -  unit price:", tulipPrice, ", quantity:", numberOfTulips, ", value:", tulipsValue);
console.log("Total: ", total);
//assessment 

var name1 = "Maxwell Wright";
var phone1 = "(0191) 719 6495";
var email1 = "Curabitur.egestas.nunc@nonummyac.co.uk";

var name2 = "Raja Villarreal";
var phone2 = "0866 398 2895";
var email2 = "posuere.vulputate@sed.com";

var name3 = "Helen Richards";
var phone3 = "0800 1111";
var email3 = "libero@convallis.edu";


console.log("First Contact:");
console.log("Name: " + name1);
console.log("Phone: " + phone1);
console.log("Email: " + email1);

console.log("\nLast Contact:");
console.log("Name: " + name3);
console.log("Phone: " + phone3);
console.log("Email: " + email3);

Task 1

Write a script that will ask the user to input a number. Display the message "Bingo!" when the number is greater than 90 but less than 110, otherwise display the message: "Miss". Use the if statement.

Example
let number = prompt("Enter a random number");
if(number > 90 && number < 110) {
    alert("Bingo!");
} else {
    alert("Miss");
}


Task 2

Rewrite the code from the previous task, replacing if with a ternary conditional operator.

Example

Task 3

Write a simple calculator application. Ask the user for the following input, one by one: two numbers and a character representing a mathematical operation, one of "+", "-", "*", "/". If the user input is valid, calculate the result and show it to the user. If the user input is invalid, display a message that informs the user that an error has occurred. Remember that the value returned by the prompt function is of the type string. You can use the Number.isNaN method to check if you get the correct number after conversion. For example, calling Number.isNaN(10) will return false, while Number.isNaN(NaN) will return true.

Example
let firstNumber = Number(prompt("Enter first number"));
let secondNumber = Number(prompt("Enter second number"));
let operand = prompt("Enter operand (+, -, * or /)");
let result;

if (!Number.isNaN(firstNumber) && !Number.isNaN(secondNumber)) {
    switch (operand) {
        case "+": result = firstNumber + secondNumber; break;
        case "-": result = firstNumber - secondNumber; break;
        case "*": result = firstNumber * secondNumber; break;
        case "/": result = firstNumber / secondNumber; break;
        default: result = "Error: unknown operand";
    }
} else {
    result = "Error: at least one of the entered values is not a number";
}
alert(result);



let contacts = [
    {
      name: "Maxwell Wright",
      phone: "(0191) 719 6495",
      email: "Curabitur.egestas.nunc@nonummyac.co.uk",
    },
    {
      name: "Raja Villarreal",
      phone: "0866 398 2895",
      email: "posuere.vulputate@sed.com",
    },
    {
      name: "Helen Richards",
      phone: "0800 1111",
      email: "libero@convallis.edu",
    },
  ];
  
  function showFirstContact() {
    if (contacts.length > 0) {
      console.log("First Contact:", contacts[0]);
    } else {
      console.log("Contact list is empty.");
    }
  }
  
  function showLastContact() {
    if (contacts.length > 0) {
      console.log("Last Contact:", contacts[contacts.length - 1]);
    } else {
      console.log("Contact list is empty.");
    }
  }
  
  function addNewContact() {
    let name = prompt("Enter the name:");
    let phone = prompt("Enter the phone number:");
    let email = prompt("Enter the email:");
  
    // Check if all necessary data is provided
    if (name && phone && email) {
      let newContact = {
        name: name,
        phone: phone,
        email: email,
      };
      contacts.push(newContact);
      console.log("New contact added successfully:", newContact);
    } else {
      console.log("Incomplete data. Contact not added.");
    }
  }
  
  // User choice
  let userChoice = prompt(
    "Choose an action: (first) Show first contact, (last) Show last contact, (new) Add new contact"
  );
  
  switch (userChoice.toLowerCase()) {
    case "first":
      showFirstContact();
      break;
    case "last":
      showLastContact();
      break;
    case "new":
      addNewContact();
      break;
    default:
      console.log("Invalid choice.");
      break;
  }
  