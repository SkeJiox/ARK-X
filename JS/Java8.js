//// Into the typescript
///BASIC TYPES:
// strings
let firstname: string = 'HELLO';
// numbers
var n: number = 6;
n = '2'; // ERROR: Type 'string' is not assignable to type 'number'.
// boolean
let isPresent: boolean = true;
// any
let a: any = 7; // any means this variable can hold any value. (not recommended)
a = false; // NO ERROR

// Array and tupples:
let arr: number[] = [1, 2, 3];
let a2: string[] = ["hi", "friends"];

arr.push('2'); // ERROR: Argument of type 'string' is not assignable to parameter of type 'number'.

// define our tuple
let ourTuple: [number, boolean, string];
// initialize correctly
ourTuple = [5, false, 'Hello'];
// Initialized Incorrectly
// Even though we have a boolean, string, and number 
// the order matters in our tuple and will throw an error.
ourTuple = [false, 'Coding God was mistaken', 5];

//Objects:
let obj: { name: string; age: number };
// Initialized Correctly
obj = { 
    name: "Steve",
    age: 40    }
// ERROR: Property 'age' is missing in type '{ name: string; }' but required in type '{ name: string; age: number; }'
obj = { 
    name: "Steve",   }

//Functions:
function add (a: number, b: number) : number {
    return a + b;    }
add(1, "2") // Argument of type 'string' is not assignable to parameter of type 'number'.

const greet = (name: string) : string => {
    return `Hello ${name}`;   }

// The type void can be used to indicate a function doesn't return any value.
function display (name: string): void {
    console.log(name);    }

/////TYPE ANNOTATION:
// Type aliases : 
// the type User holds a name (string) and an age (number)
type User = { name: string; age: number };

const john: User = { name: "John Doe", age: 23 };

type Absence = boolean[];
const johnAbsence: Absence = [true, true, false, true];

//Interfaces:
interface User {
    name: string;
    age: number;     }
let mike: User = { name: "Mike Tyson", age: 52 };

//////TYPE OPPERATONS
//Union types
let myValue: string | number = "hello";  // Value can be a string or a number
//intersection types
interface Person { name: string; age: number; }
interface Address { city: string; zip: string; }

let contactInfo: Person & Address = { 
    name: "John", 
    age: 30, 
    city: "New York", 
    zip: "10001" };

//Optional properties
// Here the nationality is optional on the User
interface User {
    name: string;
    age: number;
    natioanlity?: string; // equivalent to string | undefined
}