// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("=== VARIABLES ===");

// let firstName = "Jonas";
// console.log(firstName);

// let age = 30;
// age = 31; // We can change let variables
// console.log(age);

// const birthYear = 1991;
// console.log(birthYear);

// // birthYear = 1990; // ❌ This would cause an error!

// const PI = 3.1415;
// console.log(PI);

// var job = "programmer";
// job = "teacher";
// console.log(job);

// // Note: Modern JavaScript uses let and const
// // You'll see var in old code, but avoid it

// const country = "Portugal";
// const language = "Portuguese";
// const population = 10;

// let age = 25;
// age = 26; // This will change

// // ✅ Good names
// let firstName = "Sarah";
// let myCurrentJob = "teacher";
// let PI = 3.1415; // Constants in UPPERCASE

// // ❌ Bad names (will cause errors)
// // let 3years = 3; // Can't start with number
// // let jonas&matilda = "JM"; // No special characters
// // let new = 27; // Can't use reserved words

// console.log("=== DATA TYPES ===");

// // Number (integers and decimals)
// let age = 23;
// console.log(age);
// console.log(typeof age); // "number"

// // String (text in quotes)
// let firstName = "Jonas";
// console.log(firstName);
// console.log(typeof firstName); // "string"

// // Boolean (true or false)
// let javascriptIsFun = true;
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun); // "boolean"

// // Undefined (no value assigned yet)
// let year;
// console.log(year); // undefined
// console.log(typeof year); // "undefined"

// // Start as a number
// let dynamicVariable = 23;
// console.log(dynamicVariable, typeof dynamicVariable); // 23, "number"

// //Change to a string
// dynamicVariable = "Now I'm a string!";
// console.log(dynamicVariable, typeof dynamicVariable); // "Now I'm a string!", "string"

// //Change to a boolean
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable); // true, "boolean"

// console.log("=== EXERCISES ===");

// //Exercise 1 
// // 1. Your first name (const)
// const firstName = "Jeoffry";

// // 2. Your age (let - it changes every year!)
// let age = 20;

// // 3. Your favorite number (const)
// const favoriteNumber = 7;

// // 4. Whether you like JavaScript so far (boolean)
// let likesJavaScript = true;

// // Log each variable and its type
// console.log(firstName, typeof firstName);        // Jeoffry string
// console.log(age, typeof age);                    // 20 number
// console.log(favoriteNumber, typeof favoriteNumber); // 7 number
// console.log(likesJavaScript, typeof likesJavaScript); // true boolean

// //Exercise 2
// // 1. Create a let variable called 'score' with value 100
// let score = 100;

// // 2. Log it to the console
// console.log("Score is:", score);

// // 3. Change it to 150
// score = 150;

// // 4. Log it again
// console.log("Score is now:", score);

// // 5. Try the same with const - what happens?
// const constScore = 100;
// console.log("Const Score is:", constScore);

// constScore = 150; // This will cause an error

// //Exercise 3
// // Use typeof to check the data type of these values:
// console.log(typeof 42);        // number
// console.log(typeof "Hello");   // string
// console.log(typeof true);      // boolean
// console.log(typeof undefined); // undefined

// /////////////////////////////////////////////////////////////////////////////

// Basic Operators - Math Operators
// console.log("=== MATH OPERATORS ===");
// const now = 2037;

// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah); // 46, 19

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division:", 15 / 3);
// console.log("Exponentiation:", 2 ** 3);

// // String Concatenation

// const firstName = "Jonas";
// const lastName = "Schemdtmann";
// console.log(firstName + "" + lastName);

// console.log("Hello" + "World" + "!");
// console.log("I am" + 25 + "years old");

// // Assignment Operators

// console.log("=== ASSIGNMENT OPERATORS ===");

// let x = 10 + 5;
// console.log("x starts as:", x);

// x += 10;
// console.log("After += 10:", x);

//  x *= 4;
// console.log("After *= 4:", x);

// x /= 2;
// console.log("After /= 2:", x);

//  x++;
// console.log("After ++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);

// // Exercise: Score Calculator
// // 1. Create a variable 'score' with value 100
// let score = 100;

// // 2. Add 50 using +=
// score += 50;

// // 3. Multiply by 2 using *=
// score *= 2;

// // 4. Subtract 25 using -=
// score -= 25;

// // 5. Use ++ twice
// score++;
// score++;

// // 6. Log the final result 
// console.log(score); // 377

// // Comparison Operators
// console.log("=== COMPARISON OPERATORS ===");

// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);

// console.log("Number comparison:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);

// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);

// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);

// console.log("Complex comparison:");
// console.log(now - 1991 > now -2018);

// // Exercise: Age Verification
// const myAge = 25;

// // 1. Compare your age to 18 (>=)
// console.log(myAge >= 18); // true if age is 18 or above

// // 2. Check if 100 is greater than 99
// console.log(100 > 99); // true

// // 3. Store a comparison result in a variable
// let isAdult = myAge >= 18;
// console.log(isAdult);

// // 4. Try comparing the result of two calculations
// console.log(10 + 5 > 20 - 3); // 15 > 17 - false


// // Operator Precedence
// console.log("=== OPERATOR PRECEDENCE ===");

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x,y;
// x = y = 25 - 10 - 5;
// console.log(x, y);

// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);

// console.log("=== BMI Calculator ===");

// ////////////////////////////////////
// // Coding Challenge #1 - BMI Calculator

// // Test Data 1
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;

// // 1. Calculate BMIs
// const BMIMark = massMark / ( heightMark**2);
// const BMIJohn = massJohn / ( heightJohn**2);

// // 2. Create markHigherBMI variable
// const markHigherBMI = BMIMark > BMIJohn;

// // 3. Log results to console
// console.log(BMIMark, BMIJohn, markHigherBMI);

// The Old Way: String Concatenation
//////////////////////////////////
// Strings and Template Literal
// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);

// const jonasnew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasnew);

// Template Literal Superpowers

// Any expression works inside ${}
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`); // true

// You can use backticks for any string
// console.log(`Just a regular string...`);

//Multiline Strings Made Easy
// Old way - painful

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// New way - natural
// console.log(`String
// multiple
// lines`);

// Exercise 1: Personal Information
// Create variables for:
// const myName = "Jeoffry"; 
// const myAge = 20; 
// const myJob = "student"; 
// const currentYear = 2024;

// // Use template literals
// const introduction = `Hi, I'm ${myName}, a ${myAge} year old ${myJob}!`;

// // Log it to the console
// console.log(introduction); // Hi, I'm Jeoffry, a 20 year old student!


// // Exercise 2: Math in Templates
// const myName = "Jeoffry";
// const myAge = 20;
// const myJob = "student";
// const currentYear = 2024;

// 1. Calculates your birth year: currentYear - myAge
// 2. Shows a calculation: 10 * 5
// 3. Includes a comparison: myAge >= 18
// const info = `Born in ${currentYear - myAge}, 10*5 = ${10 * 5}, Adult: ${myAge >= 18}`;

// Log it to the console
// console.log(info); //Born in 2004, 10*5 = 50, Adult: true


////////////////////////////////////

// // Basic if/else Structure
// // Taking Decisions: if / else Statements
// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// // }

// // Variable Assignment with Decisions
// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century); // 21

// // Real-World Decision Making
// const score = 85;

// if (score >= 60) {
//   console.log(`You passed with ${score} points! 🎉`);
//   console.log("Congratulations!");
// } else {
//   const pointsNeeded = 60 - score;
//   console.log(`You failed. Need ${pointsNeeded} more points.`);
// }

// // Exercise 1: Grade Calculator
// const testScore = 78; // Change this to test different scores

// // Use if/else to determine the grade
// if (testScore >= 90) {
//   console.log("Excellent! Grade A");
// } else if (testScore >= 80) {
//   console.log("Good job! Grade B");
// } else if (testScore >= 70) {
//   console.log("Not bad! Grade C");
// } else if (testScore >= 60) {
//   console.log("You passed! Grade D");
// } else {
//   console.log("You failed! Study harder");
// }

// // Exercise 2: Age Verification
// const userAge = 20; // Change this to test

// if (userAge >= 18) {
//   console.log("Welcome! You can access all content");
// } else if (userAge >= 13) {
//   console.log("Welcome! Restricted content only");
// } else {
//   console.log("Sorry, you're too young");
// }


// ////////////////////////////////////
// // Truthy and Falsy Values

// // 5 falsy values: 0, '', undefined, null, NaN
// // console.log(Boolean(0)); // false
// // console.log(Boolean(undefined)); // false
// // console.log(Boolean("Jonas")); // true
// // console.log(Boolean({})); // true (empty object)
// // console.log(Boolean("")); // false (empty string)

// // const money = 100;
// // if (money) {
// //   console.log("Don't spend it all ;)");
// // } else {
// //   console.log("You should get a job!");
// // }

// // let height = 0; // This is a valid height!
// // if (height) {
// //   console.log("YAY! Height is defined");
// // } else {
// //   console.log("Height is UNDEFINED"); // This runs even though height IS defined!
// // }

// // // Better approach for checking if defined:
// // if (height !== undefined) {
// //   console.log("Height is defined");
// // }

// // Exercise: Truth Detector
// const values = [0, 1, "", "hello", undefined, null, NaN, {}, []];

// for (let i = 0; i < values.length; i++) {
//   let value = values[i];

//   console.log("Value:", value);
//   console.log("Boolean:", Boolean(value));

//   if (value) {
//     console.log("Truthy!");
//   } else {
//     console.log("Falsy!");
//   }
// }

// //////////////////////////////////
// // Coding Challenge #2

// // Reuse your BMI calculation from Challenge #1
// // const massMark = 78;
// // const heightMark = 1.69;
// // const massJohn = 92;
// // const heightJohn = 1.95;

// // const BMIMark = massMark / heightMark ** 2;
// // const BMIJohn = massJohn / (heightJohn * heightJohn);
// // console.log(BMIMark, BMIJohn);

// // // Your if/else statement here:
// // if (BMIMark > BMIJohn) {
// //   console.log(`HOORAY!!! The BMI of Mark (${BMIMark}) is higher than John's (${BMIJohn})!`);
// // } else {
// //   console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
// // }

// // // Compare BMIs and create intelligent messages
// // // Use template literals for beautiful output

// // //////////////////////////////////////////////////
// // console.log("=== TYPE CONVERSION AND COERCION ===");

// // //Manual Type Conversion
// // const inputYear = "1991";
// // console.log(Number(inputYear), inputYear);
// // console.log(Number(inputYear) + 18);
// // console.log(Number("Jonas")); // NaN (Not a Number)
// // console.log(typeof NaN); // "number"

// // console.log(String(23), 23);
// // console.log(typeof String(23)); // "string"

// // //Automatic Type Coercion
// // console.log("I am" + 23 + "years old");
// // console.log("23" - "10" - 3);
// // console.log("23" / "2");
// // console.log("23" * "2");

// //Tricky Examples
// // let n = "1" +1;
// // n = n - 1;
// // console.log(n);

// // console.log(2 + 3 + 4 + "5");
// // console.log("10" - "4" - "3" - 2 + "5");

// // Exercise 1: Conversion Detective
// Predict the output, then test:
console.log("5" + 2); // Your guess: "52"
console.log("5" - 2); // Your guess: 3
console.log("5" * 2); // Your guess: 10
console.log("5" / 2); // Your guess: 2.5

// Convert these explicitly:
const userAge = "25"; // Convert to number
console.log(Number(userAge)); // 25 (number)

const userScore = 95; // Convert to string
console.log(String(userScore)); // "95" (string)

// Exercise 2: Fix the Bug
const num1 = prompt("First number:"); // Returns string!
const num2 = prompt("Second number:"); // Returns string!

const sum = Number(num1) + Number(num2);

console.log(`Sum: ${sum}`);

// //Strict Equality (===) - The Professional Way
// //////////////////////////////////////////////
// //Equality Operators: == vs. ===

// // const age = "18";
// // if (age === 18) console.log("You just became an adult :D (strict)");
// // if (age == 18) console.log("You just became an adult :D (loose)");

// // console.log("18" === 18); // false
// // console.log("18" == 18); // true
// // console.log(18 === 18);




// //Loose Equality (==)- The Dangerous One
// ////////////////////////////////////////
// // console.log("0" == 0);
// // console.log (0 == false);
// // console.log("0" == false);
// // console.log(null == undefined);

// // console.log("" == 0);
// // console.log("  " == 0);

// //Best Practice Example
// // const favourite = Number(prompt("What's your favourite number?"));
// // console.log(favourite);
// // console.log(typeof favourite);

// // if (favourite === 23) {
// //   console.log("Cool! 23 is an amazing number!");
// // } else if (favourite === 7) {
// //   console.log("7 is also a cool number!");
// // } else if (favourite === 9) {
// //   console.log("9 is also a cool number!");
// // } else {
// //   console.log("Number is not 23 or 7 or 9");
// // }

// //Not-equal operator
// // if (favourite !== 23) console.log("Why not 23?");

// // Exercise 1: Equality Detective
// // Test these comparisons - predict first, then run:
// console.log(5 === "5"); // false
// console.log(5 == "5");  // true
// console.log(true === 1); // false
// console.log(true == 1);  // true
// console.log(false === 0); // false
// console.log(false == 0);  // true

// // Exercise 2: Fix the Login System

// const username = "admin";
// const password = "1234";

// if (username === "admin" && password === "1234") {
//   console.log("Welcome admin!");
// } else {
//   console.log("Access denied");
// }

// ///////////////////////////////////////////////
// // console.log("=== LOGICAL OPERATORS ===");

// // //Basic Logical Operators
// // const hasDriversLicense = true; // A
// // const hasGoodVision = true; // B

// // console.log(hasDriversLicense && hasGoodVision); // true
// // console.log(hasDriversLicense || hasGoodVision); // true
// // console.log(!hasDriversLicense); // false

// // //Real-World Example
// // const isTired = false; // C
// // console.log(hasDriversLicense && hasGoodVision && isTired); // false

// // if (hasDriversLicense && hasGoodVision && !isTired) {
// //   console.log("Sarah is able to drive!");
// // }  else {
// //   console.log ("Someone else should drive...");
// // }

// // //Complex Logic with Parentheses
// // const age = 20;
// // const hasPermission = true;
// // const hasExperience = false;

// // if ((age >= 18 && hasPermission) || hasExperience) {
// //   console.log("Approved to drive!");
// // } else {
// //   console.log("Not approved to drive.");
// // }

// // Exercise 1: Club Entry System
// // Create a club entry system with these rules:
// // Entry allowed if: (age >= 21 AND hasID) OR isVIP

// const age = 19;
// const hasID = true;
// const isVIP = false;

// if ((age >= 21 && hasID) || isVIP) {
//   console.log("Welcome to the club!");
// } else {
//   console.log("Sorry, you cannot enter");
// }

// // Exercise 2: Weather Advisor
// const temperature = 25; 
// const isRaining = false;
// const isWindy = true;

// if (temperature >= 20 && temperature <= 30 && !isRaining && !isWindy) {
//   console.log("Perfect day!");
// } else if (temperature >= 15 && temperature <= 35 && !isRaining) {
//   console.log("Good day!");
// } else {
//   console.log("Stay inside");
// }

// // Ternary Operators (Elegant One-Liners)
// // ////////////////////////////////////////////////////////////

// // Basic Ternary Syntax
// // const age = 23;

// // const drink = age >= 18 ? "wine 🍷" : "water 💧";
// // console.log(drink);

// // let drink2;
// // if(age >= 18) {
// //   drink2 = "wine 🍷";
// // } else {
// //   drink2 = "water 💧";
// // }
// // console.log(drink2);

// // // Ternary in Template Literals
// // console.log(`I like to drink ${age >= 18 ? "wine 🍷" : "water 💧"}`);

// // // When to Use Ternary vs if/else
// // const status = score >= 60 ? "passed" : "failed";
// // const message = isLoggedIn ? "Welcome back!" : "Please log in.";
// // const discount = isPremium ? 0.2 : 0.1;

// // if(score >= 90) {
// //   console.log("Excellent!");
// //   grade = "A";
// //   bonus = "true";
// // } else if (score >= 80) {
// //   console.log("Good job!");
// //   grade = "B";
// // }

// // Exercise: Status Massage
// // 1. Login status
// const isLoggedIn = true;
// let welcomeMessage = isLoggedIn ? "Welcome back!" : "Please sign in";
// console.log(welcomeMessage);

// // 2. Price with discount
// const isPremium = false;
// let price = isPremium ? 100 * 0.8 : 100;
// console.log(price);

// // Exercise 2: Smart Responses
// const score = 85;
// const weather = "sunny";
// const battery = 15;

// // Score message
// const scoreMessage = `Your score: ${score} (${score >= 75 ? "Passed" : "Failed"})`;
// console.log(scoreMessage);

// // Weather message
// const weatherMessage = `Weather is ${weather} (${weather === "sunny" ? "Great for outdoor activities" : "Stay inside"})`;
// console.log(weatherMessage);

// // Battery message
// const batteryMessage = `Battery: ${battery}% (${battery < 20 ? "Low battery warning" : "Battery OK"})`;
// console.log(batteryMessage);

// //////////////////////////////////
// // Coding Challenge #4: Tip Calculator

// // const bill = 275; // Test with 275, 40, and 430

// // // Step 1: Create the tip calculation using ternary operator
// // // Rule: 15% if between 50-300, otherwise 20%
// // // Hint: bill >= 50 && bill <= 300

// // const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// // // Step 2: Create beautiful output with template literal
// // console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}.`);

// // // Expected outputs:
// // // Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// // // Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// // // Bill 430: "The bill was 430, the tip was 86, and the total value 516"