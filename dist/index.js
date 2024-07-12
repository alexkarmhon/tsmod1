"use strict";
let isDone = false;
console.log(isDone);
let decimal = 6;
let float = 1.3;
let hex = 0xf00d;
let color = "blue";
console.log(color);
let empty = null;
let notParam = undefined;
console.log("empty: ", empty);
console.log("notParam: ", notParam);
const foo = (num, str, bool, empty) => {
    console.log("some logic");
};
foo(1, "aaa", true, null);
const user1 = {
    name: "Alex",
    age: 35,
};
const user2 = {
    name: "Ira",
    age: 31,
};
console.log(user1, user2);
const namesArr = ["Olexii", "Irina"];
const numbersArr = [1, 2, 3];
const matrixArr = [
    [1, 2],
    [3, 4],
];
const mixxedArr = ['Olexii', 35, 'Irina', 30];
console.log(namesArr, numbersArr, matrixArr, mixxedArr);
// Array of objects
const users = [
    { name: "Alex", age: 35 },
    { name: "Irina", age: 30 },
    { name: "Runa", age: 5 },
];
console.log('Array of objects: ', users);
//# sourceMappingURL=index.js.map