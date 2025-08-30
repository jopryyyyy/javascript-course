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

// const grades = [78, 85, 92, 67, 88, 95, 73, 82];

// function calculateAverage(grades) {
//   let sum = 0;
//   for (let i = 0; i < grades.length; i++) {
//     sum += grades[i];
//   }
//   return sum / grades.length;
// }

// function findHighestGrade(grades) {
//   let highest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] > highest) {
//       highest = grades[i];
//     }
//   }
//   return highest;
// }

// function findLowestGrade(grades) {
//   let lowest = grades[0];
//   for (let i = 1; i < grades.length; i++) {
//     if (grades[i] < lowest) {
//       lowest = grades[i];
//     }
//   }
//   return lowest;
// }

// function countPassing(grades, passingGrade) {
//   let count = 0;
//   for (let i = 0; i < grades.length; i++) {
//     if (grades[i] >= passingGrade) {
//       count++;
//     }
//   }
//   return count;
// }

// const average = calculateAverage(grades);
// const highest = findHighestGrade(grades);
// const lowest = findLowestGrade(grades);
// const passing = countPassing(grades, 70);

// console.log("=== GRADE REPORT ===");
// console.log(`Average: ${average.toFixed(2)}`);
// console.log(`Highest: ${highest}`);
// console.log(`Lowest: ${lowest}`);
// console.log(`Passing students: ${passing} out of ${grades.length}`);

////////////////////////////////////////////////////////////////////////

// console.log("=== OBJECTS AND DATA STRUCTURES ===");

// The Array Problem
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"]
// ];

// console.log(jonasArray[0]);
// console.log(jonasArray[1]);
// console.log(jonasArray[2]);
// console.log(jonasArray[3]);
// console.log(jonasArray[4]);

//////////////////////////////////////////////////////////////
// Objects - Creation with Object Literal Syntax
// console.log("=== OBJECTS ===");

// Object literal syntax - curly braces create objects
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 2037 - 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"] 
// };
// console.log(jonas);

//  Array approach (hard to understand)
// const jonasArray = [
//   "Jonas",
//   "Schmedtmann",
//   2037 - 1991,
//   "teacher",
//   ["Michael", "Peter", "Steven"]
// ];
// console.log(jonasArray);

// Object approach (self-documenting)
// const jonasObject = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   age: 46,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"]
// };
// console.log(jonasObject);

// DOT Notation - clear and readable
// console.log(jonas.firstName);
// console.log(jonas.lastName);
// console.log(jonas.age);
// console.log(jonas.job);
// console.log(jonas.friends);

// Bracket Notation - uses strings
// console.log(jonas["firstName"]);
// console.log(jonas["lastName"]);
// console.log(jonas["age"]);
// console.log(jonas["job"]);
// console.log(jonas["friends"]);

// Bracket notation with expressions - compute property names!
// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// Modifying Existing Properties
// Both notations work for modification
// jonas.job = "programmer";
// jonas["age"] = 35;
// console.log(jonas);

// Adding New Properties
// Objects can grow - add properties after creation
// jonas.location = "Portugal";
// jonas['twitter'] = '@jonasschmedtman';
// jonas.hasDriversLicense = true;
// console.log(jonas);

// Exercise 1: Personal Object
// 1. Create a 'book' object with title, author, pages, and isRead properties
// const book = {
//   title: "Harry Potter and the Half-Blood Prince",
//   author: "J.K. Rowling",
//   pages: 607,
//   isRead: true
// };

// 2. Create a 'playlist' object with name, creator, songs array, and genre
// const playlist = {
//   name: "Chill Vibes",
//   creator: "Jeoffry",
//   songs: ["Lucid Dreams", "No Role Modelz", "God's Plan"],
//   genre: "Lo-fi Rap"
// };

// 3. Access and log different properties using both dot and bracket notation
// console.log(book.title);
// console.log(playlist["creator"]);

// 4. Add a new property to each object
// book.year = 2005;
// playlist.duration = "2 hours";

// 5. Modify an existing property in each object
// book.isRead = false;
// playlist.genre = "Hip-hop";

// console.log(book);
// console.log(playlist);

/////////////////////////////////////////////////////////
// Use Arrays For:
// Ordered, indexed data - think lists
// const listOfYears = [1991, 1984, 2008, 2020];
// const shoppingList =["apples", "bananas", "milk", "bread"];
// const testScores = [85, 92, 78, 90, 88];

// console.log(listOfYears);
// console.log(shoppingList);
// console.log(testScores);

// Use objects For:
// Named, descriptive data - think entities
// const person = {
//   name: "Jonas",
//   age: 46,
//   occupation: "teacher",
// };

// console.log(person);

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2020,
//   color: "blue",
// };

// console.log(car);

// Combining Objects and Arrays
// Objects can contain arrays, arrays can contain objects
// const student = {
//   name: "Sarah",
//   grades: [85, 92, 78],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//   },
// };

// console.log(student.grades[0]);
// console.log(student.address.city);

// Simple Object Methods
// Object Methods
// const jonas = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // Method - function inside object
//   calcAge: function (birthYear) {
//     return 2037 - birthYear;
//   },
// };

// Call methods using dot notation
// console.log(jonas.calcAge(1991));
// console.log(jonas.calcAge(jonas.birthYear));

// The 'this' Keyword - Accessing Own Properties
// const jonasImproved = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     console.log(this);
//     return 2037 - this.birthYear;
//   },
// };

// console.log(jonasImproved.calcAge());

// Advanced: Storing Calculated Values
// const jonasAdvanced  = {
//   firstName: "Jonas",
//   lastName: "Schmedtmann",
//   birthYear: 1991,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2037 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is a ${this.calcAge()}-year old ${this.job
//     }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`;
//   },
// };

// console.log(jonasAdvanced.calcAge());
// console.log(jonasAdvanced.age);
// console.log(jonasAdvanced.getSummary());

//Exercise 2: Calculator Object
// 1. Properties: num1, num2, operator
// const calculator = {
//   num1: 10,
//   num2: 5,
//   operator: "+",

// 2. Methods: add(), subtract(), multiply(), divide()
  // add: function () {
  //   return this.num1 + this.num2;
  // },

  // subtract: function () {
  //   return this.num1 - this.num2;
  // },

  // multiply: function () {
  //   return this.num1 * this.num2;
  // },

  // divide: function () {
  //   return this.num1 / this.num2;
  // },

  // 3. Method: calculate() that uses the operator to perform the right operation
  // calculate: function () {
  //   if (this.operator === "+") return this.add();
  //   if (this.operator === "-") return this.subtract();
  //   if (this.operator === "*") return this.multiply();
  //   if (this.operator === "/") return this.divide();
  // },

  // 4. Method: getResult() that returns a formatted string
  // 5. Use 'this' to access the object's own properties
//   getResult: function () {
//     return `${this.num1} ${this.operator} ${this.num2} = ${this.calculate()}`;
//   },
// };

// Test your calculator
// console.log(calculator.calculate());
// console.log(calculator.getResult());

//////////////////////////////////////////////////////////////
// Coding Challenge #3: User Profile System
// console.log("=== CC#3: USER PROFILE SYSTEM ===");

// const user = {
//   firstName: "Sarah",
//   lastName: "Johnson",
//   birthYear: 1995,
//   location: "New York",
//   interests: ["photography", "travel", "coding"],
//   friends: [
//     { name: "Michael", status: "active" },
//     { name: "Emma", status: "inactive" },
//     { name: "David", status: "active" }
//   ],
//   isActive: true,

  // Calculate age
  // calcAge: function () {
  //   this.age = new Date().getFullYear() - this.birthYear;
  //   return this.age;
  // },

  // // Add a new friend
  // addFriend: function (name, status) {
  //   this.friends.push({ name: name, status: status });
  // },

  // Count active friends
  // getActiveFriends: function () {
  //   let count = 0;
  //   for (let i = 0; i < this.friends.length; i++) {
  //     if (this.friends[i].status === "active") {
  //       count++;
  //     }
  //   }
  //   return count;
  // },

  // Change active/inactive status
  // toggleStatus: function () {
  //   this.isActive = !this.isActive;
  // },

  // Show profile summary
//   getSummary: function () {
//     this.calcAge();
//     return "User Profile: " +
//       "Name: " + this.firstName + " " + this.lastName + ", " +
//       "Age: " + this.age + ", " +
//       "Location: " + this.location + ", " +
//       "Status: " + (this.isActive ? "Active" : "Inactive") + ", " +
//       "Total Friends: " + this.friends.length + ", " +
//       "Active Friends: " + this.getActiveFriends() + ", " +
//       "Interests: " + this.interests.join(", ");
//   }
// };

// Test the user profile system
// console.log(user.getSummary());
// user.addFriend("Alex", "active");
// user.toggleStatus();
// console.log("After updates:");
// console.log(user.getSummary());

//////////////////////////////////////////////////////////////

console.log("=== DOM MANIPULATION AND INTERACTIVITY ===");

/////////////////////////////////////////////////////////////
// Selecting DOM Elements

// querySelector - works with any CSS selector
// const message = document.querySelector(".message");
// const button = document.querySelector("#btn");
// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");

// console.log(message);
// console.log(button);
// console.log(heading);
// console.log(input);

// querySelector Examples
// Different selector types
// document.querySelector(".className");
// document.querySelector("#idName");
// document.querySelector("tagName");
// document.querySelector('input[type="text"]');
// document.querySelector("div p");

// getElementById - Classic Method
// getElementById - only works with IDs
// const buttonById = document.getElementById("btn");
// console.log(buttonById);
// console.log(buttonById === button);

// querySelectorAll - Select Multiple Elements
// querySelectorAll - get ALL matching elements
// const allParagraphs = document.querySelectorAll("p");
// console.log(allParagraphs);
// console.log(allParagraphs[0]);
// console.log(allParagraphs.length);

// Exercise 1: Element Selection Practice

// 1. Select the element with class 'guess' and log it
// const guessInput = document.querySelector(".guess");
// console.log(guessInput);

// 2. Select the element with ID 'btn' using both querySelector 
// const buttonQuery = document.querySelector("#btn");
// const buttonById = document.getElementById("btn");
// console.log(buttonQuery);

// 3. Select all span elements and log the collection
// const allSpans = document.querySelectorAll("span");
// console.log(allSpans);

// 4. Select the first span element and log its textContent
// const firstSpan = document.querySelector("span");
// console.log(firstSpan.textContent);

// 5. Experiment with different CSS selectors
// console.log(document.querySelector("p"));
// console.log(document.querySelector(".container"));
// console.log(document.querySelector("#header"));
// console.log(document.querySelector("div span"));
// console.log(document.querySelector('input[type="text"]'));

//Modifying Element Content
// const message  = document.querySelector(".message");

// textContent - gets/sets just the text, no HTML
// console.log(message.textContent);
// message.textContent = "Hello from JavaScript!";

// innerHTML - includes HTML tags (more powerful but be careful)
// message.innerHTML = "<strong>Bold text from JS!</strong>";

// innerText - respects styling (what use actually sees)
// console.log(message.innerText);

// Working with Input Elements
// Input elements use .value property, not textContent
// const input = document.querySelector(".guess");

// console.log(input.value);
// input.value = "Default text";
// input.placeholder = "Type here";

// Dynamic Style Changes
// Changing  element styles with the style property
// const heading = document.querySelector("h1");

// heading.style.color = "blue";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "3rem";
// heading.style.padding = "20px";
// heading.style.borderRadius = "10px";

// Exercise 2: Content and style Manipulation
// const heading = document.querySelector("h1");
// const button = document.querySelector("#btn");
// const input = document.querySelector(".guess");
// const message = document.querySelector(".message");
// const scoreValue = document.querySelector(".score-value");

// 1. Change the h1 text to your name
// heading.textContent = "Your Name Here";

// 2. Make the button's background color blue and text white
// button.style.backgroundColor = "blue";
// button.style.color = "white";

// 3. Set a placeholder text in the input field
// input.placeholder = "Avid fan of JavaScript";

// 4. Change the message text to include HTML bold formatting
// message.innerHTML = "This is <strong>bold</strong> a text from JavaScript!";

// 5. Make the score display larger and a different color
// scoreValue.style.fontSize = "2rem";
// scoreValue.style.color = "green";
// scoreValue.style.fontWeight = "bold";

// Click Events
// Event Listeners - User Interaction
// const button = document.querySelector("#btn");
// const messsage = document.querySelector(".message");

// // addEventListener - the modern way to handle events
// button.addEventListener("click", function() {
//     console.log("Button was clicked!");
//     message.textContent = "You clicked the button!";
//     message.style.color = "green";
// });

// Event Listener Syntax
// element.addEventListener("eventType", function() {
//     // Code to run when event happens
// });

// Click Counter Example
// let clickCount = 0;

// button.addEventListener("click", function() {
//     clickCount++;
//     button.textContent = `Clicked ${clickCount} times`;
//     button.style.backgroundColor = `hsl(${clickCount * 10}, 70%, 50%)`;
// });

// Input Events - Real-time Typing Response
// Input events fire every time user types
// const input = document.querySelector(".guess");

// input.addEventListener("input", function () {
//     const userText = input.value;
//     message.textContent = `You typed: ${userText}`;
//     message.style.fontSize = `${userText.length + 10}px`;
// });

// Keyboard events - responding to specific keys
// input.addEventListener("keydown", function (event) {
//   console.log(`Key pressed: ${event.key}`);

//   if (event.key === "Enter") {
//     message.textContent = `You pressed Enter! Text was: ${input.value}`;
//     input.value = "";
//   }
// });

// Global keyboard events
// document.addEventListener("keydown", function (event) {
//   if (event.key === "Escape") {
//     //Reset everything
//     message.textContent = "Reset with Escape key!";
//     input.value = "";
//     clickCount = 0;
//     button.textContent = "Click me!";
//   }
// });

// Exercise 3: Event Listener Practice

// const heading = document.querySelector("h1");
// const input = document.querySelector(".guess");
// const button = document.querySelector("#btn");
// const message = document.querySelector(".message");

// 1. Add a click event to the h1 that changes its color
// heading.addEventListener("click", function () {
//   heading.style.color = "purple";
// });

// 2. Create an input event that displays character count as user types
// input.addEventListener("input", function () {
//   const count = input.value.length;
//   message.textContent = `Character count: ${count}`;
// });

// 3. Add a keydown event that responds to the spacebar
// document.addEventListener("keydown", function (event) {
//   if (event.key === " ") {
//     message.textContent = "Spacebar pressed!";
//   }
// });

// 4. Make the button change its text when hovered (mouseover event)
// button.addEventListener("mouseover", function () {
//   button.textContent = "Hovering!";
// });
// button.addEventListener("mouseout", function () {
//   button.textContent = "Click Me!";
// });

// 5. Create a double-click event that does something special
// heading.addEventListener("dblclick", function () {
//   heading.textContent = "Double-clicked!";
//   heading.style.backgroundColor = "lightblue";
// });

////////////////////////////////////////////////////

// Final Project Interactive Score Tracker
// console.log("=== Final Project: INTERACTIVE SCORE TRACKER ===");



