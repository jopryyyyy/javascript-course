'use strict';

const { use } = require("react");

console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// function first () {
//     second ();
// }
// function second () {
//     console.log('In second');
// }

// first ();

// Section 1: Execution Contexts & Call Stack
// Global Execution Context
console.log('Starting program');

function alpha() {
  console.log('alpha:start');
  beta();
  console.log('alpha:end');
}

function beta() {
  console.log('beta');
}

alpha();

// Your Turn: Call Stack Practice
// Example
// function outerFunction() {
//   console.log('Outer function start');
//   innerFunction();
//   console.log('Outer function end');
// }

// function innerFunction() {
//   console.log('Inner function');
//   console.trace(); // Add this to see the call stack
// }

// outerFunction();

// My code
function firstFunction() {
    console.log('First function start');
    secondFunction(); // A Nested call
    console.log('First function end');
}

function secondFunction() {
    console.log('Second function start');
    thirdFunction(); // A Nested call
    console.log('Second function end');
}

function thirdFunction() {
    console.log('Third function');
    console.trace(); // This shows the call stack
}

// Start the chain
firstFunction();

// Section 2: Scoping & Scope Chain
// Three Types of Scope

// Global Scope
const globalVar = 'I am global';

function anyFunction() {
    console.log(globalVar);
}

// Function Scope
function myFunction() {
    const functionVar = 'I am function-scoped';
    console.log(functionVar);
}

// Block Scope
if(true) {
    let blockVar = 'I am block-scoped';
    const alsoBlockVar = 'Me too';
    var notBlockScoped = 'I leak out';
}

// console.log(blockVar); // Error: not accessible
// console.log(alsoBlockVar); // Error: not accessible
console.log(notBlockScoped); // Works! var leaks out

// Scope Chain in Action
const outer = 'global';

function demoScope () {
    const inner = 'function';
    if(true) {
        const blockConst = 'block';
        var functionVar = 'var-function-scoped';
        console.log (outer, inner, blockConst, functionVar);
    }
    console.log(outer, inner, functionVar);
}

demoScope();

// Your Turn: Scope Chain Exploration
const name = 'GlobalName';

function a() {
  const name = 'FunctionName';
  function b() {
    console.log(name); // 'FunctionName' via scope chain
  }
  b();
}

a();

// Section 3: Hoisting & Temporal Dead Zone
// Variable hoisting examples
console.log(varX); // undefined (var hoisted, initialized to undefined)
// console.log(letX); // ReferenceError (TDZ)
// console.log(constX); // ReferenceError (TDZ)

var varX = 1;
let letX = 2;
const constX = 3;

console.log(varX);
console.log(letX);
console.log(constX);

// Function Hoisting Behavior
// Function hoisting examples
 console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// console.log(addExpr(2, 3)); // ReferenceError in TDZ
// console.log(addArrow(2, 3)); // ReferenceError in TDZ

function addDecl(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArrow = (a, b) => a + b;

// Now all work:
console.log(addDecl(2, 3));
console.log(addExpr(2, 3)); 
console.log(addArrow(2, 3));

// Understanding Temporal Dead Zone (TDZ)
// TDZ Fix Example
// Bad: TDZ
// console.log(apiUrl); // ReferenceError
// const apiUrl = 'https://example.com';

// Good: declare before use
const apiUrl = 'https://example.com';
console.log(apiUrl);

// Your Turn: Hositing Practice
// 1) Hoisting expectation
// console.log(title); // Uncomment to test: TDZ with let
let title = 'Behind the Scenes';

// 2) Scope chain expectation
function outer() {
  const label = 'outer';
  function inner() {
    console.log('scope:', label); // expect 'outer'
  }
  inner();
}
outer();

// 3) Call stack expectation
function one() {
  two();
}
function two() {
  console.log('stack: two');
}
one(); // expect 'stack: two'

