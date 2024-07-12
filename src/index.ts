let isDone: boolean = false;
console.log(isDone);

let decimal: number = 6;
let float: number = 1.3;
let hex: number = 0xf00d;

let color: string = "blue";
console.log(color);

let empty: null = null;
let notParam: undefined = undefined;
console.log("empty: ", empty);
console.log("notParam: ", notParam);

const foo = (num: number, str: string, bool: boolean, empty: null): void => {
  console.log("some logic");
};

foo(1, "aaa", true, null);

// let user: { name: string, age: number } = {
//   name: 'Tom',
//   age: 25,
// }

// console.log(user)

type User = {
  name: string;
  age: number;
};

const user1: User = {
  name: "Alex",
  age: 35,
};

const user2: User = {
  name: "Ira",
  age: 31,
};

console.log(user1, user2);

const namesArr: string[] = ["Olexii", "Irina"];
const numbersArr: number[] = [1, 2, 3];
const matrixArr: number[][] = [
  [1, 2],
  [3, 4],
];
const mixxedArr:(number|string)[] = ['Olexii', 35, 'Irina', 30]
console.log(namesArr, numbersArr, matrixArr, mixxedArr);

// Array of objects
const users: {
  name:string,age:number,
}[] = [
    { name:"Alex", age: 35},
    { name:"Irina", age: 30},
    { name:"Runa", age: 5},
  ]
console.log('Array of objects: ', users)