// Modal Development Hour 1 - Foundation & Class Toggling

'use strict';

console.log("=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===");

// /*
// What We're Building Today:
// - A complete modal window component
// - Modal opens when clicking any "Show modal" button
// - Modal closes when clicking the "×" button or overlay
// - Professional class-based show/hide functionality
// - Reusable helper functions for clean code

// Key Concepts:
// - DOM element selection and caching
// - Class manipulation for show/hide
// - Event listeners for user interaction
// - DRY (Don't Repeat Yourself) principles
// */

console.log('Modal project ready!');

// Section 1: DOM Element Selection & Caching
// First, add strict mode at the top

// Select the modal element
const modalEl = document.querySelector('.modal');

// Select the overlay element
const overlayEl = document.querySelector('.overlay');

// Select the close button element
const btnCloseModalEl = document.querySelector('.close-modal');

// Select ALL the open buttons using querySelectorAll
const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// Verify our selections worked correctly
console.log('Open buttons:', btnsOpenModalEl); 

// // Section 2: Open/Close Helpers with Class Toggling
// Create our openModal function
const openModal = function () {
    // Remove the hidden class from modal to make it visible
    modalEl.classList.remove('hidden');
    // Remove the hidden class from overlay to show dark background
    overlayEl.classList.remove('hidden');
};

// Creating closeModal function
const  closeModal = function () {
    // Add the hidden class back to overlay to hide dark background
    overlayEl.classList.add('hidden');
};

// // Section 3: Connecting Everything with Event Listeners

// Wiring Up the Open Buttons
// Attach openModal function to all show buttons
btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// Wiring Up the Close Actions
// Attach closeModal function to close button
btnCloseModalEl.addEventListener('click', closeModal);

// Attach closeModal function to overlay click
overlayEl.addEventListener('click', closeModal);

////////////////////////////////////////////////////////////////////////
// Modal Development Hour 2 - Keyboard Events & Advanced UX

// console.log("=== MODAL DEVELOPMENT: KEYBOARD EVENTS & ADVANCED UX ===");

/*
What We're Adding Today:
- ESC key functionality to close the modal
- Focus management for keyboard users
- ARIA attributes for screen reader accessibility
- Professional UX patterns

Key Concepts:
- Global keyboard event listeners
- Event object properties (e.key, e.code)
- Visibility guards to prevent unnecessary operations
- Focus management and accessibility
*/

// console.log('Enhanced modal development ready!');

// Section 1: Keyboard Event Fundamentals
// Let's start by understanding keyboard events
// console.log('Keyboard events test');

// Add a basic keyboard event listener
// document.addEventListener('keydown', function (e) {
//     // Log the event object to see what we get
//     console.log('Key pressed:', e.key);

//     // Log just the key property
//     console.log('Key name:', e.code);
// });

// // Testing Specific Keys
// // Let's modify our event listener to be more specific
// document.addEventListener('keydown', function (e) {
//     // Only respond to ESC key
//     if (e.key === 'Escape') {
//         console.log('ESC key pressed!');
//     }
// });

// // Section 2: ESC Key Implementation with Guards
// // Add ESC key functionality to close the modal
// document.addEventListener('keydown', function (e) {
//     // Check if ESC key was pressed AND modal is visible
//     if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
//         closeModal();
//     }
// });

// // Testing and Debugging
// // LEt's add some debugging to see what's happening
// document.addEventListener('keydown', function (e) {
//     // Log what's happening for debugging
//     console.log(
//         'Key pressed:',
//         e.key,
//         'Modal visible:',
//         !modalEl.classList.contains('hidden')
//     );

//     // Check if ESC key was pressed AND modal is visible
//     if (e.key === 'Escape' && !modalEl.classList.contains('hidden')) {
//         closeModal();
//     }
// });

// // Section 3: Advanced UX & Accessibility Features
// // Focus Management

// // Add focus management variables
// let lastFocusedButton = null;

// // Enhance openModal function with focus management
// const openModal = function () {
//     modalEl.classList.remove('hidden');
//     overlayEl.classList.remove('hidden');
//     // Move focus to modal
//     modalEl.focus();
//     // Store which button opened the modal
//     lastFocusedButton = document.activeElement;
// };

// // Enhance closeModal function to restore focus
// const closeModal = function () {
//     modalEl.classList.add('hidden');
//     overlayEl.classList.add('hidden');
//     // Restore focus to the button that opened the modal
//     if(lastFocusedButton) {
//         lastFocusedButton.focus();
//     }
// };

// // ARIA Attributes for Accessibility
// // Add ARIA aatributes for screen reader accessibility
// modalEl.setAttribute('role', 'dialog');
// modalEl.setAttribute('aria-modal', 'true');
// btnCloseModalEl.setAttribute('aria-label', 'Close modal');

