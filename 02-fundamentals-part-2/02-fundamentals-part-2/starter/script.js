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

//Parameters vs Arguments
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
  // Function scope
//   const localVar = "I am local";
//   console.log(globalVar);
//   console.log(localVar);
// }

// testScope();
// console.log(localVar); // Error! Can't access local from outside
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

// console.log("=== ARRAYS AND DATA MANIPULATION ===");

// Without arrays - not scalable:

// const student1Grade = 85;
// const student2Grade = 92;
// const student3Grade = 78;

// With arrays - scalable and powerful:

// const grades = [85, 92, 78, 96, 88];
// console.log(grades);

// Arrays - Creation and Access
// console.log("=== ARRAYS ===");

// Array creation
// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// Different data types in same array
// const mixed = ["Jonas", 27, true, friends];
// console.log(mixed);

// Alternative way (but literal notation is preferred)
// const years = new Array(1991, 1984, 2008, 2020);
// console.log(years);

// Accessing Array Elements
// Array indexing starts at 0
// console.log(friends[0]);
// console.log(friends[1]);
// console.log(friends[2]);

// Array length property
// console.log(friends.length);

// Get the last element
// console.log(friends[friends.length - 1]);

// Changing array elements
// friends[1] = "Jay";
// console.log(friends);

// Arrays with Expressions
// const firstName = "Jonas";
// const jonas = [firstName, "Schmedtmann", 2037 - 2002];
// console.log(jonas);

// Using our calcAge function from Hour 1
// const calcAge = function (birthYear) {
//   return 2037 - birthYear;
// }

// const ages = [calcAge(1991), calcAge(1984), calcAge(2008), calcAge(2020)];
// console.log(ages);

// Array Methods - Adding Elements

// const friends =["Michael", "Steven", "Peter"];

// Push - add to end 
// const newLength = friends.push("Jay");
// console.log(friends);
// console.log(newLength);

// Unshift - add to beginning
// friends.unshift("John");
// console.log(friends); 

// Removing Elements
// Pop - remove from end
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// Shift - remove from beginning
// const shifted = friends.shift();
// console.log(shifted);
// console.log(friends);

// Finding Elements
// IndexOf - find position of element
// console.log(friends.indexOf("Steven"));
// console.log(friends.indexOf("Bob")); 

// Includes - check if element exists
// console.log(friends.includes("Steven"));
// console.log(friends.includes("Bob"));

// For Loop with Arrays
// Array Iteration - Loops
// const friends = ["Michael", "Steven", "Peter"];

// Traditional for loop
// for (let i = 0; i < friends.length; i++) {
//   console.log(friends[i]);
// }

// For loop with processing
// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for(let i =0; i < years.length; i++) {
//   ages.push(2037 - years[i]);
// }
// console.log(ages);

// forEach method - modern approach
// friends.forEach(function (friend, index) {
//   console.log(`${index}: ${friend}`);
// });

// Arrow function version (even cleaner)
// friends.forEach((friend, index) => {
//   console.log(`${index + 1}: ${friend}`);
// });

// Real-world example - grade processing
// const grades = [85, 92, 78, 96, 88, 74];
// let total = 0;

// Calculate average grade
// for (let i = 0; i < grades.length; i++) {
//   total += grades[i];
// }
// const average = total / grades.length;
// console.log(`Average grade: ${average.toFixed(2)}`);

// Count passing students (grade >= 70)
// let passedCount = 0;
// grades.forEach((grade) => {
//   if (grade >= 70) passedCount++;
// });
// console.log(`${passedCount} out of ${grades.length} students passed`);

///////////////////////////////////////////////////////////////////////////////////

// Coding Challenge #2: Student Grade Manager
// console.log("=== CC#2: STUDENT GRADE MANAGER ===");

const grades = [78, 85, 92, 67, 88, 95, 73, 82];

function calculateAverage(grades) {
  let sum = 0;
  for (let i = 0; i < grades.length; i++) {
    sum += grades[i];
  }
  return sum / grades.length;
}

function findHighestGrade(grades) {
  let highest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] > highest) {
      highest = grades[i];
    }
  }
  return highest;
}

function findLowestGrade(grades) {
  let lowest = grades[0];
  for (let i = 1; i < grades.length; i++) {
    if (grades[i] < lowest) {
      lowest = grades[i];
    }
  }
  return lowest;
}

function countPassing(grades, passingGrade) {
  let count = 0;
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= passingGrade) {
      count++;
    }
  }
  return count;
}

const average = calculateAverage(grades);
const highest = findHighestGrade(grades);
const lowest = findLowestGrade(grades);
const passing = countPassing(grades, 70);

console.log("=== GRADE REPORT ===");
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Highest: ${highest}`);
console.log(`Lowest: ${lowest}`);
console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////////////////////////////////////////

