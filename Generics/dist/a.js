"use strict";
function firstEl(arr) {
    return arr[0];
}
const numberAns = firstEl([1, 2, 3]);
const stringAns = firstEl(['A', 'K', 'S']);
function lastEl(arr) {
    return arr[arr.length - 1];
}
const numberAnswer = lastEl([1.3, 2.2, 3.4]);
const stringAnswer = lastEl(['A', 'K', 'S']);
console.log(numberAnswer.toFixed());
console.log(stringAnswer.toLowerCase());
