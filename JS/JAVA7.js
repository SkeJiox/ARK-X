//traditional 
function square(x) {
    return x * x;
  }
//Modern
  const square = x => x * x;

//Atention
  const multiply = (a, b) => {
    if (a === 0) {
      return 0;
    }
    return a * b;
  };

/////ARRAY METHODS:
 // map (the transformer):
  const numbers = [1, 2, 3];
const doubled = numbers.map(number => number * 2); // [2, 4, 6]

//filter (the gatekeeper):
const fruits = ["apple", "banana", "orange"];
const longFruits = fruits.filter(fruit => fruit.length > 5); // ["banana", "orange"]

//reduce (the condenser):
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, number) => accumulator + number, 0); // 10

//////Array destruction: 

const numbers = [10, 20, 30];
// extract values the old way
const first = numbers[0]
const second= numbers[1]
const third = numbers[2]

const [first, second, third] = numbers; // first = 10, second = 20, third = 30

//Object destruction:
const person = { name: "Alice", age: 30 };
// old method of extracting properties
const name = person.name;
const age = person.age;

const { name, age } = person; // name = "Alice", age = 30

//////////
/*
Aync= makes a function return a Promise
await= makes an async function wait for a promise  */

fetch("someapi")
    .then(data => data.json())
    .then(result => console.log("RESULT: ", result))
    .catch(error => console.log('FATAL ERROR: ', error.message))

//Mark function as async:
    async function fetchData() {
      const data = await fetch("https://example.com/data");
      const result = await data.json();
      console.log("RESULT: ", result)
    }

//Handle errors with try/catch:
/* this code is equivalent to the first example*/
async function fetchData() {
  try {
   const data = await fetch("https://example.com/data");
   const result = await data.json();
   console.log("RESULT: ", result)
  } catch (error) {
     console.log('FATAL ERROR: ', error.message)
  }


//  EXPORT and IMPORT
export const name = 'Alice';
export function greet() {
  console.log('Hello World');
}
export default function createGreeter(name) {
    return `Hello ${name}`
  }

import { greet, name } from './greeter.js';
greet(); // Output: "Hello World"
console.log(name) // Output: Alice

