'use strict';

// console.log('=== BEHIND THE SCENES: SCOPING & HOISTING ===');

// // function first () {
// //     second ();
// // }
// // function second () {
// //     console.log('In second');
// // }

// // first ();

// // Section 1: Execution Contexts & Call Stack
// // Global Execution Context
// console.log('Starting program');

// function alpha() {
//   console.log('alpha:start');
//   beta();
//   console.log('alpha:end');
// }

// function beta() {
//   console.log('beta');
// }

// alpha();

// // Your Turn: Call Stack Practice
// // Example
// // function outerFunction() {
// //   console.log('Outer function start');
// //   innerFunction();
// //   console.log('Outer function end');
// // }

// // function innerFunction() {
// //   console.log('Inner function');
// //   console.trace(); // Add this to see the call stack
// // }

// // outerFunction();

// // My code
// function firstFunction() {
//     console.log('First function start');
//     secondFunction(); // A Nested call
//     console.log('First function end');
// }

// function secondFunction() {
//     console.log('Second function start');
//     thirdFunction(); // A Nested call
//     console.log('Second function end');
// }

// function thirdFunction() {
//     console.log('Third function');
//     console.trace(); // This shows the call stack
// }

// // Start the chain
// firstFunction();

// // Section 2: Scoping & Scope Chain
// // Three Types of Scope

// // Global Scope
// const globalVar = 'I am global';

// function anyFunction() {
//     console.log(globalVar);
// }

// // Function Scope
// function myFunction() {
//     const functionVar = 'I am function-scoped';
//     console.log(functionVar);
// }

// // Block Scope
// if(true) {
//     let blockVar = 'I am block-scoped';
//     const alsoBlockVar = 'Me too';
//     var notBlockScoped = 'I leak out';
// }

// // console.log(blockVar); // Error: not accessible
// // console.log(alsoBlockVar); // Error: not accessible
// console.log(notBlockScoped); // Works! var leaks out

// // Scope Chain in Action
// const outer = 'global';

// function demoScope () {
//     const inner = 'function';
//     if(true) {
//         const blockConst = 'block';
//         var functionVar = 'var-function-scoped';
//         console.log (outer, inner, blockConst, functionVar);
//     }
//     console.log(outer, inner, functionVar);
// }

// demoScope();

// // Your Turn: Scope Chain Exploration
// const name = 'GlobalName';

// function a() {
//   const name = 'FunctionName';
//   function b() {
//     console.log(name); // 'FunctionName' via scope chain
//   }
//   b();
// }

// a();

// // Section 3: Hoisting & Temporal Dead Zone
// // Variable hoisting examples
// console.log(varX); // undefined (var hoisted, initialized to undefined)
// // console.log(letX); // ReferenceError (TDZ)
// // console.log(constX); // ReferenceError (TDZ)

// var varX = 1;
// let letX = 2;
// const constX = 3;

// console.log(varX);
// console.log(letX);
// console.log(constX);

// // Function Hoisting Behavior
// // Function hoisting examples
//  console.log(addDecl(2, 3)); // 5 (function declaration hoisted)
// // console.log(addExpr(2, 3)); // ReferenceError in TDZ
// // console.log(addArrow(2, 3)); // ReferenceError in TDZ

// function addDecl(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// const addArrow = (a, b) => a + b;

// // Now all work:
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3)); 
// console.log(addArrow(2, 3));

// // Understanding Temporal Dead Zone (TDZ)

// // Your Turn: Hositing Practice
// // 1) Hoisting expectation
// // console.log(title); // Uncomment to test: TDZ with let
// let title = 'Behind the Scenes';

// // 2) Scope chain expectation
// function outer() {
//   const label = 'outer';
//   function inner() {
//     console.log('scope:', label); // expect 'outer'
//   }
//   inner();
// }
// outer();

// // 3) Call stack expectation
// function one() {
//   two();
// }
// function two() {
//   console.log('stack: two');
// }
// one(); // expect 'stack: two'

// // Hour 2
// //Section 1: Understanding the this Keyword

// // const person = {
// //     name: 'Jonas',
// //     greet: function () {
// //         console.log(`Hello, I am ${this.name}`);
// //     }
// // };

// // person.greet();

// // Your Turn: Method Borrowing
// const person = {
//     name: 'Jonas',
//     greet: function () {
//         console.log(`Hello, i am ${this.name}`);
//     },
// };

// // Method borrowing'
// const anotherPerson =  {name: 'Sarah'};
// anotherPerson.greet = person.greet;
// anotherPerson.greet();

// // Detached function call
// const greetFunction = person.greet;
// greetFunction();

// // Common Pitfall: Event handlers
// // This breaks in event handlers
// const button = document.querySelector('button');
// button.addEventListener('click', person.greet); // `this` becomes the button element!

// // Fix: use arrow function wrapper
// button.addEventListener('click', () => person.greet());
// // Or bind the method
// button.addEventListener('click', person.greet.bind(person));

// // Section 2: Arrow Functions vs Regular Functions
// // Arrow Functions and Lexical this
// const obj = {
//     name: 'Object',

//     regularMethod: function () {
//         console.log('Regular:', this.name);
//     },

//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };

// obj.regularMethod();
// obj.arrowMethod();

// // Your Turn: Predict the Output
// const quiz = {
//     name: 'Quiz Object',
//     regularMethod() {
//         console.log('Regular:', this.name);
//     },
//     arrowMethod: () => {
//         console.log('Arrow:', this.name);
//     },
// };

// quiz.regularMethod(); // Quiz Object
// quiz.arrowMethod(); // Undefined

// // Solving Common this Pitfalls
// const timer = {
//   name: 'Timer',

//   // Old approach with self = this
//   start: function () {
//     console.log(`${this.name} starting...`);
//     const self = this;

//     setTimeout(function () {
//       console.log(`${self.name} finished`);
//     }, 1000);
//   },

//   // Modern approach with arrow function
//   startModern: function () {
//     console.log(`${this.name} starting modern...`);

//     setTimeout(() => {
//       console.log(`${this.name} finished modern`); // this works!
//     }, 1500);
//   },
// };

// timer.start(); // Uses self = this approach
// timer.startModern(); // Uses arrow function approach

// // Common Pitfall: Array Methods
// const user = {
//   name: 'Alice',
//   hobbies: ['reading', 'coding', 'gaming'],

//   // BROKEN: arrow function loses `this`
//   printHobbiesBad: () => {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name is undefined!
//     });
//   },

//   // FIXED: regular function preserves `this`
//   printHobbiesGood() {
//     this.hobbies.forEach(hobby => {
//       console.log(`${this.name} likes ${hobby}`); // this.name works!
//     });
//   },
// };

// user.printHobbiesBad(); // Fails - this.name is undefined
// user.printHobbiesGood(); // Works - shows all hobbies

// // Section 3: The arguements Keyword & Advanced Scenarios

// // arguments in Regular vs Arrow Functions
// const functionTypes = {
//     regularFunction: function () {
//         console.log('Arguments length:', arguments.length);
//         console.log('First argument:', arguments[0]);
//     },

//     arrowFunction: () => {
//        // console.log(arguments); // ReferenceError: arguments is not defined
//     console.log('Arrow function called'); 
//     },

//      modernFunction: (...args) => {
//     console.log('Args length:', args.length);
//     console.log('First arg:', args[0]);
//   },
// };

// functionTypes.regularFunction('hello', 'world');
// functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');

// // Real-World this Scenarios
// // Event handlers and this binding
// const userCard = {
//   name: 'Sarah',
//   // element: document.querySelector('.user-card'), // Commented for demo

//   setupEvents() {
//     // BROKEN: this becomes the button element
//     // this.element.addEventListener('click', function() {
//     //   console.log('Clicked user:', this.name); // this = button element!
//     // });

//     // FIXED: arrow function preserves outer this
//     // this.element.addEventListener('click', () => {
//     //   console.log('Clicked user:', this.name); // this = userCard object!
//     // });

//     console.log('Event setup for:', this.name);
//   },
// };

// userCard.setupEvents();

// // Array methods with this context
// const calculator = {
//     numbers: [1, 2, 3, 4, 5],
//     multiplier: 2,

//     processNumbers() {
//         return.this.numbers.map(num => num * this.multiplier);
//     },
// };

// console.log('Processed numbers:', calculator.processNumbers());

// // Your Turn: Mini-Challenge
// const myTimer = {
//   name: 'My Timer',

//   startCountdown() {
//     console.log(`${this.name} starting countdown...`);

//     // Arrow function inside setTimeout preserves 'this'
//     setTimeout(() => {
//       console.log(`${this.name} countdown finished!`);
//     }, 1000); // 1 second delay
//   },
// };

// myTimer.startCountdown();

// Hour 3

// Section 1: Stack vs Heap Memory Model
// Primitives vs Objects in Memory

// PRIMITIVES IN STACK
// let age = 30;
// let oldAge = age;
// age = 31;

// console.log('age:', age);
// console.log('oldAge:', oldAge);

// // OBJECTS IN HEAP
// const me = {name: 'Jonas', age: 30};
// const friend = me;

// friend.age = 27;

// console.log('me:', me);
// console.log('friend:', friend);

// // Your Turn: Test Reference Behavior
// function changeAge(person, newAge) {
//   person.age = newAge;
//   return person;
// }

// const originalPerson = { name: 'Sarah', age: 25 };
// const updatedPerson = changeAge(originalPerson, 30);

// console.log('original:', originalPerson); // { name: 'Sarah', age: 30 } - Changed!
// console.log('updated:', updatedPerson); // { name: 'Sarah', age: 30 } - Same object!
// console.log('same object?:', originalPerson === updatedPerson); // true

// // Section 2: Shallow vs Deep Copying
// // Shallow Copying Techniques
// const original = {
//     name: 'Alice',
//     age: 28,
//     hobbies: ['reading', 'coding'],
// };

// // Spread operator shallow copy
// const shallowCopy = { ...original };

// shallowCopy.name = 'Bob';
// console.log('original name:', original.name); // 'Alice' (unchanged)
// console.log('copy name:', shallowCopy.name); // 'Bob' (changed)

// // But nested objects are still shared
// shallowCopy.hobbies.push('gaming');
// console.log('original hobbies:', original.hobbies); // ['reading', 'coding', 'gaming'] - Changed!
// console.log('copy hobbies:', shallowCopy.hobbies); // ['reading', 'coding', 'gaming'] - Same array!

// // Object.assign alternative
// const anotherCopy = Object.assign({}, original);
// console.log('Object.assign copy:', anotherCopy);

// // Deep Copying Solutions
// const deepOriginal = {
//   name: 'Charlie',
//   age: 32,
//   address: { city: 'Paris', country: 'France' },
//   hobbies: ['travel', 'photography'],
// };

// // Modern deep copy with structuredClone
// const deepCopy = structuredClone(deepOriginal);

// deepCopy.address.city = 'London';
// deepCopy.hobbies.push('cooking');

// console.log('original address:', deepOriginal.address); // { city: 'Paris', country: 'France' }
// console.log('copy address:', deepCopy.address); // { city: 'London', country: 'France' }
// console.log('original hobbies:', deepOriginal.hobbies); // ['travel', 'photography']
// console.log('copy hobbies:', deepCopy.hobbies); // ['travel', 'photography', 'cooking']

// // Common Pitfall: JSON Methods
// const problemObject = {
//   name: 'Test',
//   date: new Date(),
//   method: function () {
//     return 'hello';
//   },
//   undefinedValue: undefined,
// };

// // BROKEN: JSON method loses data
// const brokenCopy = JSON.parse(JSON.stringify(problemObject));
// console.log('Broken copy:', brokenCopy);
// // { name: 'Test', date: '2023-...' } - Lost method and undefined!

// // FIXED: structuredClone preserves most types
// const workingCopy = structuredClone(problemObject);
// console.log('Working copy:', workingCopy);
// // Note: functions still can't be cloned, but dates work!

// // Your Turn: Copying Challenge
// // const userManager = {
// //   users: [],

// //   addUser: function(userData) {
// //     // Beginner approach: use JSON to copy the object
// //     const copy = JSON.parse(JSON.stringify(userData));
// //     this.users.push(copy);
// //   },

// //   getUsers: function() {
// //     // Beginner approach: just return the array directly
// //     return this.users;
// //   }
// // };

// // // Test
// // const originalUser = { name: 'John', preferences: { theme: 'dark' } };
// // userManager.addUser(originalUser);

// // // Modify original user
// // originalUser.name = 'Changed';
// // originalUser.preferences.theme = 'light';

// // console.log('Original changed:', originalUser);
// // console.log('Stored user:', userManager.getUsers()[0]); // Should still be 'John' with theme 'dark'

// // Section 3: Strict Mode Benefits & Integration
// // 1. Hoisting and TDZ (Hour 1)
// // Without strict mode: undeclaredVar = 'This would create a global variable!';
// // With strict mode: throws ReferenceError
// // undeclaredVar = 'This throws an error in strict mode';

// // 2. This keyword (Hour 2)
// function demonstrateThis() {
//   console.log('this in strict mode:', this); // undefined (not global object)
// }
// demonstrateThis();

// // 3. Object mutation prevention attempts
// const readOnlyObj = Object.freeze({ name: 'Frozen' });

// try {
//   readOnlyObj.name = 'Changed'; // Throws error in strict mode
//   console.log('Mutation succeeded');
// } catch (error) {
//   console.log('Strict mode caught error:', error.message);
// }

// // Real-World Integration Example
// const userManager = {
//     users: [];

//     addUser: function (userData) {
//         // Deep copy to avoid reference issues
//         const userCopy = structuredClone(userData);
//         this.users.push(userCopy);
//         return this;
//     },

//     getUsers: function () {
//         // Return shallow copy to prevent external mutation
//         return [...this.users];
//     },
// };

// // Test the complete system
// const originalUser = { name: 'John', preferences: { theme: 'dark' } };
// userManager.addUser(originalUser);

// originalUser.name = 'Modified';
// console.log('Original changed:', originalUser);
// console.log('Stored user:', userManager.getUsers()[0]); // Still 'John'!
