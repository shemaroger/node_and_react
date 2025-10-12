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



function nextInLine(arr, item) {
    arr.push(item);
    return
}
let testArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(testArr));
appendNewItem = nextInLine(testArr, 6);
console.log(appendNewItem);
console.log("After: " + JSON.stringify(testArr));




function switchCase(val) {
    var answer = "";
    switch(val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        default:
            answer = "delta";
    }
    return answer;
}

console.log(switchCase(3));