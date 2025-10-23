/* 
JavaScript is a high-level, dynamic, and interpreted programming language 
used to create interactive and responsive web pages. It allows developers 
to add functionality, control multimedia, animate elements, 
and communicate with web servers — making websites dynamic and user-friendly.
*/




console.log("Hello, JavaScript!!!");
let firstName = "John";
console.log("My name is " + firstName + ".");
// Variable Can't be a reserved keyword
// Variable name should be meaningful
// Variable name can't start with a number
// Variable name can't contain a space or hyphen (-)
console.log("----------------------------------------");

const interestRate = 0.3;  // constant variable means its value can't be changed
// interestRate = 1; // This will cause an error because interestRate is a constant
console.log("Interest Rate: " + interestRate);

console.log("----------------------------------------");
// Primitive Types: string, number, boolean, undefined, null
let name =  "John"; // string literal
let age = 30; // number literal
let isApproved = true; // boolean literal
let firstName1 = undefined; // undefined literal
let selectedColor = null; // null literal


// Dynamic Typing
let dynamicVariable = "Hello";
console.log("Dynamic Variable: " + dynamicVariable);


console.log("----------------------------------------");

// reference types: object, array`, function
// Object Literal 
let person = {
    name: "John",
    age: 30 
};
console.log("Person Object name: ", person.name, " age: ", person.age);


// Dot Notation
person.name = "Mary"; 
console.log("Person Object name after change using Dot Notation: ", person.name);
// Bracket Notation
person["name"] = "Bob"; 
console.log("Person Object name after change using Bracket Notation: ", person.name);
// Array 
let selectedColors = ["red", "blue"];
console.log("First Selected Color: " + selectedColors[0]);
selectedColors[2] = "green";
console.log("Selected Colors after adding green: ", selectedColors);
console.log("Total Selected Colors: " + selectedColors.length);

// Function performs a task
function greet(name, lastName) // Parameters
 {
    console.log("Hello " + name + " " + lastName);
}
greet("John", "Smith"); //Aguments

// Function calculates a value
function square(number) {
    return number * number;
}
console.log("Square of 2: " + square(2));



// Operators
let x = 10;
let y = 3;
let z = x + y;
console.log("Addition: " + z);

// Arithmetic Operators: +, -, *, /, %, **
console.log("Subtraction: " + (x - y));
console.log("Multiplication: " + (x * y));
console.log("Division: " + (x / y));
console.log("Modulus: " + (x % y));
console.log("Exponentiation: " + (x ** y));

// Increment and Decrement Operators
console.log("Increment x: " + (++x)); // Prefix Increment
console.log("Decrement x: " + (--x)); // Prefix Decrement
console.log("Increment x: " + (x++));   // Postfix Increment
console.log("Value of x after Postfix Increment: " + x);
console.log("Decrement x: " + (x--));



