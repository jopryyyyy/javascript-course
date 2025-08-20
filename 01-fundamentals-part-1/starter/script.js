let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("=== VARIABLES ===");

let firstName = "Jonas";
console.log(firstName);

let age = 30;
age = 31; // We can change let variables
console.log(age);

const birthYear = 1991;
console.log(birthYear);

// birthYear = 1990; // ❌ This would cause an error!

const PI = 3.1415;
console.log(PI);

var job = "programmer";
job = "teacher";
console.log(job);

// Note: Modern JavaScript uses let and const
// You'll see var in old code, but avoid it

const country = "Portugal";
const language = "Portuguese";
const population = 10;

let age = 25;
age = 26; // This will change

// ✅ Good names
let firstName = "Sarah";
let myCurrentJob = "teacher";
let PI = 3.1415; // Constants in UPPERCASE

// ❌ Bad names (will cause errors)
// let 3years = 3; // Can't start with number
// let jonas&matilda = "JM"; // No special characters
// let new = 27; // Can't use reserved words

console.log("=== DATA TYPES ===");

// Number (integers and decimals)
let age = 23;
console.log(age);
console.log(typeof age); // "number"

// String (text in quotes)
let firstName = "Jonas";
console.log(firstName);
console.log(typeof firstName); // "string"

// Boolean (true or false)
let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun); // "boolean"

// Undefined (no value assigned yet)
let year;
console.log(year); // undefined
console.log(typeof year); // "undefined"

// Start as a number
let dynamicVariable = 23;
console.log(dynamicVariable, typeof dynamicVariable); // 23, "number"

//Change to a string
dynamicVariable = "Now I'm a string!";
console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

//Change to a boolean
dynamicVariable = true;
console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"

