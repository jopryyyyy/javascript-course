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

///////////////////////////////////////////////////////////////////////////////

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

// x *= 4;
// console.log("After *= 4:", x);

// x /= 2;
// console.log("After /= 2:", x);

// x++;
// console.log("After ++:", x);

// x--;
// x--;
// console.log("After x-- twice:", x);


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

// Operator Precedence
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



