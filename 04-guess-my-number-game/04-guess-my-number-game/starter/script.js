'use strict';

console.log("Game setup ready");

// Game Development Hour 1 - Game Foundation & DOM Basics
console.log("=== GAME DEVELOPMENT: GUESS MY NUMBER ===");

/*
What We're Building Today:
- A complete "Guess My Number" game
- Player guesses a number between 1-20
- Game provides feedback: "Too high!" or "Too low!"
- Score tracking and high score system
- Visual feedback and professional polish

This teaches us DOM manipulation - how JavaScript talks to HTML!
*/

console.log('Goal: Build a complete interactive game from scratch ');
console.log('Focus: DOM manipulation, events, game state, and user interaction');

// Section 1: DOM Element Selection Mastery
////////////////////////////////////
// DOM Element Selection - The Foundation
console.log("=== DOM ELEMENT SELECTION ===");

// Select elements by class name
const messageEl = document.querySelector('.message');
console.log(messageEl);

// Select elements by class name
const scoreEl = document.querySelector('.score');
console.log(scoreEl);

// Select input elements
const guessEl = document.querySelector('.guess');
console.log(guessEl);

// Reading and Modifying Element Content
// Reading element content
console.log('Current Message:', messageEl.textContent); // ✅ fixed case
console.log('Current Score:', scoreEl.textContent);

// Modifying element content
messageEl.textContent = 'Hello from Javascript!';
scoreEl.textContent =20;

console.log('Elements updated!');

// Working with Input Elements
// Input elements use .value property
const guessInput = document.querySelector('.guess');

// Reading input value
console.log("Current guess:", guessInput.value);

// Setting input value
guessInput.value = '10';
console.log('Guess set to:', guessInput.value);

// Practice DOM Manipulation
// Exercise: Element Manipulation Practice

// 1. Select the number display and change it to 15
const numberEl = document.querySelector('.number');
numberEl.textContent = 15;

// 2. Select the highscore and set it to 100
const highscoreEl = document.querySelector('.highscore');
highscoreEl.textContent = 0;

// 3. Select the guess input and set a value
// (reuse the same guessInput variable)
guessInput.value = 7;

// 4. Log all the elements to the console
console.log('Number:', numberEl);
console.log('Highscore:', highscoreEl);
console.log('Guess:', guessInput);

// Section 2: Game State Management 
////////////////////////////////////
// Game State Variables - The Game's Memory

// Step 1: Create the secret number (random between 1-20)
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Secret number:', secretNumber); 

// Step 2: Track the player's score
let score = 20;

// Step 3: Track the high score
let highscore = 0;

// Practice Game State
// Create your own game state variables:
// 1. Create a player name variable
let playerName = 'Jop';

// 2. Create an attempts counter
let attempts = 0;

// 3. Create a game active boolean
let gameActive = true;

// 4. Create a random number between 1-10 (easier for testing)
let easySecret = Math.trunc(Math.random() * 10) + 1;

// 5. Display all variables in the console
console.log('Player:', playerName);
console.log('Attempts:', attempts);
console.log('Game Active:', gameActive);
console.log('Easy secret number:', easySecret);

// Section 3: Basic Game Logic Implementation
////////////////////////////////////
// Event Listeners - Making Buttons Interactive

// Add click event to the Check button
document.querySelector('.check').addEventListener('click', function() {
    console.log('Check button clicked!');

    // Get the player's guess and convert to number
    const guess = Number(document.querySelector('.guess').value);
    console.log('Player guessed:', guess);

    // Basic game logic - check if guess is correct
    if (guess === secretNumber) {
        console.log('Correct guess!');
        document.querySelector('.message').textContent = '🎉 Correct Number!';
        document.querySelector('.number').textContent = secretNumber;

    } else if (guess > secretNumber) {
        console.log('Too high!');
        document.querySelector('.message').textContent = '📈 Too high!';
    } else if (guess < secretNumber) {
        console.log('Too low!');
        document.querySelector('.message').textContent = '📉 Too low!';
    }

    // Input Validation and Type Conversion
    console.log('Input as string:', document.querySelector('.guess').value);
    console.log('Input as number:', Number(document.querySelector('.guess').value));
    console.log('String comparison:', '15' === 15);
    console.log('Number comparison:', 15 === 15);
});

// Practice Game Logic
// Test your game logic:
// 1. Enter a number in the input field
// 2. Click the "Check!" button
// 3. Try numbers higher than the secret number
// 4. Try numbers lower than the secret number
// 5. Try to guess the correct number
// 6. Watch the console for debugging information

// Your game should now respond to button clicks!
// Check the console to see the secret number for testing

////////////////////////////////////
// Game Foundation Verification
console.log('🎮 Game Foundation Complete!');
console.log('✅ DOM element selection working');
console.log('✅ Game state variables initialized');
console.log('✅ Event listeners responding');
console.log('✅ Basic game logic implemented');
console.log('Ready for advanced features in Hour 2!');

// Test your game one more time
console.log('Secret number for testing:', secretNumber);
console.log('Try to guess it!');

////////////////////////////////////////////////////////////////////////////////////
// EVENT HANDLING AND USER INTERACTION
// Section 1: Score Tracking and Decrementing
////////////////////////////////////
// Score tracking - reduce score for wrong guesses
// ❗ This block should only run inside events, not at load time
// So I’ll comment this out to prevent "guess is not defined" errors
/*
if (guess === secretNumber) {
  // ... existing win logic ...
} else if (guess > secretNumber) {
  console.log('Too high!');
  document.querySelector('.message').textContent = '📈 Too high!';
  score--;
} else if (guess < secretNumber) {
  console.log('Too low!');
  document.querySelector('.message').textContent = '📉 Too low!';
  score--;
}
document.querySelector('.score').textContent = score;
*/

// Practice Score Tracking
// Exercise: Add Score Decrementing to Your Game
// Add click event to the Check button
document.querySelector('.check').addEventListener('click', function () {
  console.log('Check button clicked!');

  // Get the player's guess and convert to number
  const guess = Number(document.querySelector('.guess').value);
  console.log('Player guessed:', guess);

  // Basic game logic - check if guess is correct
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--; // decrement score
    document.querySelector('.score').textContent = score; // update score display
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too low!';
    score--; // decrement score
    document.querySelector('.score').textContent = score; // update score display
  }

  // Win condition
  if (guess === secretNumber) {
    console.log('Correct guess!');
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    document.querySelector('.message').textContent = '🎉 You won!';
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'green';
  }

  // Lose condition
  if (score <= 0) {
    document.querySelector('.message').textContent = '💥 You lost!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.guess').disabled = true;
    document.querySelector('.check').disabled = true;
    document.body.style.backgroundColor = 'red';
  }
});

// Section 3: Game Restart & Reset Functionality
////////////////////////////////////
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('.guess').disabled = false;
  document.querySelector('.check').disabled = false;
});

// Enhanced Game Verification
console.log('🎮 Enhanced Game Complete!');
console.log('✅ Score tracking working');
console.log('✅ Win/lose conditions implemented');
console.log('✅ Game restart functionality working');
console.log('✅ Complete game experience ready');
console.log('Test: Try to win, try to lose, then restart!');

////////////////////////////////////////////////////////////////////////////////
// ADVANCED GAME FEATURES AND POLISH
// Section 1: Visual Feedback and Style Changes
////////////////////////////////////
// Visual feedback - change styles based on game state

// WIN: set background to green
if (guess === secretNumber) {
  // ... your existing win logic ...
  document.body.style.backgroundColor = 'green';
}

// LOSE: set background to red (place inside your lose condition)
if (score < 1) {
  // ... your existing lose logic ...
  document.body.style.backgroundColor = 'red';
}

// RESTART: clear inline background so CSS default applies (inside the Again! handler)
document.querySelector('.again').addEventListener('click', function () {
  // ... your existing restart logic ...
  document.body.style.backgroundColor = '';
});

// Section 2: Input Validation & Error Handling
////////////////////////////////////
// Input validation - check for valid input

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // 1) Missing input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
    return; // stop here
  }

  // 2) Out of range
  if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent =
      'Number must be between 1 and 20!';
    return; // stop here
  }

  // ... your existing game logic (win / too high / too low / update score / lose) ...
});

// Section 3: Final Polish & Professional Touches
////////////////////////////////////
// Final polish - professional finishing touches

// In WIN block
if (guess === secretNumber) {
  // ... existing win logic ...
  document.querySelector('.message').textContent = '🎉 Game Over!';
  document.querySelector('.guess').value = '';
}

// In LOSE block
if (score < 1) {
  // ... existing lose logic ...
  document.querySelector('.message').textContent = '💀 Game Over!';
  document.querySelector('.guess').value = '';
}

// In RESTART handler
// (Already resetting background, also ensure inputs/score/message are reset)

////////////////////////////////////////////////////////////////////////////////////
