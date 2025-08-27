// console.log(`Fundamentals Part 2`);
///////////////////////////////////////
// console.log(`Part 2: Functions ready!`);

// Functions - Declaration and Expressions
// console.log("=== FUNCTIONS ===");

// Function declaration
// function logger() {
//   console.log("My name is Jonas");
// }

// Calling / running / invoking the function
// logger();
// logger();
// logger();

// Functions with Parameters
// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// Without functions - repetitive code:
// const juice1 = `Juice with 5 apples and 0 oranges.`;
// const juice2 = `Juice with 2 apples and 4 oranges.`;
// const juice3 = `Juice with 3 apples and 5 oranges.`;

// With functions - reusable code:
// const juice1 = fruitProcessor(5, 0);
// const juice2 = fruitProcessor(2, 4);
// const juice3 = fruitProcessor(3, 5);

// DRY Principle: Don't Repeat Yourself
////////////////////////////////////////

// Function Expressions
// const calcAge1 = function (birthYear) {
//   return 2037 - birthYear;
// };

// const age1 = calcAge(2002);
// console.log(age1);

// Parameters vs Arguments
// function calcAge(birthYear, currentYear) {
// Parameter
// const age = currentYear - birthYear;
// return age;
// }

// const myAge = calcAge(2002, 2037); // Arguments
// const herAge = calcAge(2005, 2037);

// console.log(`I am ${myAge} years old.`);
// console.log(`She is ${herAge} years old.`);

//Handling Missing Parameters
// function introduce(firstName, lastName, age) {
//   const introduction = `Hi, I'm ${firstName} ${lastName} and I'm ${age} years old.`;
//   return introduction;
// }

// console.log(introduce("Jonas", "Schmedtmann", 46));
// console.log(introduce("Sarah", "Connor", 35));

//////////////////////////////////////////////////
// Return Values and Scope

// function calcAge3(birthYear) {
//   return 2037 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retirement = 65 - age;

//   if(retirement > 0) {
//     return `${firstName} retires in ${retirement} years`
//   } else {
//     return `${firstName} has already retired!`
//   }
// }

// console.log(yearsUntilRetirement(1991, "Jonas"));
// console.log(yearsUntilRetirement(1950, "Mike"));

// Function Scope
// Global scope
// const globalVar = "I am global";

// function testScope() {
//   // Function scope
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
//console.log(localVar); // Error! Can't access local from outside
// console.log(globalVar);

// Practice Scope Example

// const userName = "Jonas";

// function createWelcomeMessage(user) {
//   const message = `Welcome back, ${user}!`;
//   const timestamp = new Date().toLocaleDateString();

//   return `${message} Current time: ${timestamp}`;
// }

// console.log(createWelcomeMessage(userName));

// Coding Challenge #1: Function Calculator
// console.log("=== CC#1: FUNCTION CALCULATOR ===");

// function calcAverage(score1, score2, score3) {
//   return (score1 + score2 + score3) / 3;
// }

// function checkWinner(scoreDolphins, scoreKoalas) {
//   if (scoreDolphins >= 2 * scoreKoalas) {
//     return `Dolphins win (${scoreDolphins} vs. ${scoreKoalas})!`;
//   } else if (scoreKoalas >= 2 * scoreDolphins) {
//     return `Koalas win (${scoreKoalas} vs. ${scoreDolphins})!`;
//   } else {
//     return `No team wins (${scoreDolphins} vs. ${scoreKoalas})!`;
//   }
// }

// let scoreDolphins = calcAverage(44, 23, 71);    
// let scoreKoalas = calcAverage(65, 54, 49);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(checkWinner(scoreDolphins, scoreKoalas));

////////////////////////////////////////////////////////////////



