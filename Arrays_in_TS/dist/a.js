"use strict";
function findMax(arr) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const ans = findMax([1, 2, 3, 4, 5]);
console.log(ans);
function isLegal(users) {
    return users.filter((item) => item.age > 18);
}
const filteredUsers = isLegal([
    {
        firstName: 'Anant',
        age: 21
    },
    {
        firstName: 'Shubhi',
        age: 15
    },
    {
        firstName: 'Arnav',
        age: 14
    }
]);
console.log(filteredUsers);
