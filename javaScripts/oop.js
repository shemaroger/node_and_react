// console.log("Hello OOP") // Single line comment
// /*
// Multi line comment
// */
//  // encapsulation
// let employee = {
//     baseSalary: 30000,
//     overtime: 10,
//     rate: 20,
//     getWage: function() {
//         return this.baseSalary + (this.overtime * this.rate);
//     }
// }



// const circle = {
//     radius: 1,
//     location: { x: 0, y: 0 },
//     draw: function() {
//         return this.radius * Math.PI;
       
//     }
// };

// console.log(circle.draw());


// // Factory Function
// function createCircle(radius) {
//     return {
//         radius,
//         draw: function() {
//             return this.radius * Math.PI;
//         }
//     };  
// }
// const circle1 = createCircle(5);
// console.log("Circle1 Area: " + circle1.draw());

// // Constructor Function
// function Circle(radius) {
//     this.radius = radius;       
//     this.draw = function() {
//         return this.radius * Math.PI;
//     };
// }
// const circle2 = new Circle(5);
// console.log("Circle2 Area: " + circle2.draw());
// circle2.location = { x: 1 }; // Adding new property
// console.log("Circle2 Location X: " + circle2.location.x);
// delete circle2.location; // Deleting property
// console.log("Circle2 Location after deleting property: " + circle2.location);



// function nextInLine(arr, item) {
//     arr.push(item);
//     return
// }
// let testArr = [1, 2, 3, 4, 5];

// console.log("Before: " + JSON.stringify(testArr));
// appendNewItem = nextInLine(testArr, 6);
// console.log(appendNewItem);
// console.log("After: " + JSON.stringify(testArr));




// function switchCase(val) {
//     var answer = "";
//     switch(val) {
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "gamma";
//             break;
//         default:
//             answer = "delta";
//     }
//     return answer;
// }

// console.log(switchCase(3));



// let apple = 2*3;
// let bread = 5;
// let bottlesOfWater = 3*2;
// let totalCost = apple + bread + bottlesOfWater;
// console.log("The total Cost groceries is: " + totalCost);


// function switchMark(marks){
//     var grade = "";
//     switch(true){
//         case marks >= 90:
//             grade = "A";
//             break;
//         case marks >= 80:
//             grade = "B";
//             break;
//         case marks >= 70:
//             grade = "C";
//             break;
//         case marks >= 60:
//             grade = "D";
//             break;
//         default:
//             grade = "F";
//     }
//     return grade;
// }
// grade = switchMark(85);
// console.log("Your score is "+ 85 + " grade is: " + switchMark(85));


// console.log("----------------------------------------");

// const number = [3,7,10,12,15,20];
// const evenNumber = number.filter(n => n%2 === 0);
// console.log("Even Numbers: " + evenNumber);
// const oddNumber = number.filter(n => n%2 !==0);
// console.log("Odd Numbers: " + oddNumber);


// console.log("----------------------------------------");
// for ( let i=0; i< number.length; i++){
//     if (number[i] % 2 === 0){
//         console.log("Even Number using for loop: " + number[i]);
//     }
// }


// console.log("----------------------------------------");
// const numbers = [1, -1, 2, 3, -2, 4];
// const positiveNumbers = numbers.filter(n => n >= 0);
// let sum = 0;
// for (let n of positiveNumbers) {
//     sum += n;
// }
// console.log("Sum of Positive Numbers: " + sum);

// let sum = 0;
// let positiveNumbers = numbers.filter(n => n >=0);
// positiveNumbers.forEach(n => sum += n);
// console.log("Sum of Positive Numbers: " + sum);

const numbers = [12, 45, 7, 89, 34, 22];
const max = Math.max(...numbers);
console.log("Max Number: " + max);

console.log("----------------------------------------");
let largest = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
}
console.log("Largest Number using for loop: " + largest);

console.log("----------------------------------------");
// rearranging array elements

for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
        if (numbers[i] < numbers[j]) {
            // swap
            let temp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = temp;
        }
    }
}
console.log("Sorted Numbers: " + numbers);


console.log("----------------------------------------");
const word = "Programming";
let counter = 0;
for (let char of word) {
    if (char === 'a' || char === 'o' || char === 'i' || char === 'u' || char === 'e') {
        counter ++;
   }
}
console.log("Number of vowels: " + counter);

const sentence = "I am learning JavaScript every day";
let words = sentence.split(" ");
let largestWord = words[0];
for (let i = 1; i < words.length; i++) {
    if (words[i].length > largestWord.length) {
        largestWord = words[i];
    }
}
console.log("Largest Word: " + largestWord);
console.log("Length of Largest Word: " + largestWord.length);


const secret = Math.floor(Math.random() * 10) + 1;
const guess = 5;
if (guess === secret) {
    console.log("Congratulations! You guessed the correct number.");
}else if (guess < secret) {
    console.log("Too low! Try again.");
}else {
    console.log("Too high! Try again.");
}
console.log("Secret Number: " + secret);


const num1 = 15;
const num2 = 25;
operation = "*";
let result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        result = num1 / num2;
        break;
    default:
        result = "Invalid Operation";
}
console.log(`Result number 1 ${num1} and number 2 ${num2}: ` + result);
console.log("----------------------------------------");
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}   
console.log("Factorial of 5: " + factorial(5));
console.log("----------------------------------------");
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log("Fibonacci of 5: " + fibonacci(5));