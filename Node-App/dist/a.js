"use strict";
let x = 100;
const y = 'AKS';
const z = true;
let a = 500;
a = 'Woah.. any type!';
console.log(`${x} ; ${y} ; ${z} ; ${a}`);
function greet(firstName, lastName, age) {
    console.log(`Hello ${firstName} ${lastName}, your age is ${age}.`);
}
greet('Anant', 'Kr Sharma', 21);
function sum(a, b) {
    return a + b;
}
const val = sum(2, 3.5);
console.log(val);
function isLegal(age) {
    return age > 18 ? true : false;
}
const ans = isLegal(21);
console.log(ans);
function runAfter5Sec(fn) {
    setTimeout(fn, 5000);
}
runAfter5Sec(function () {
    console.log('Ran after 5 seconds.');
});
function isLegal_2(user) {
    if (user.age > 18) {
        console.log("Legal");
    }
    else {
        console.log("Not Legal");
    }
}
isLegal_2({
    firstName: "Anant",
    lastName: "Kr Sharma",
    age: 21
});
