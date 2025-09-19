// Modal Development Hour 1 - Foundation & Class Toggling

// 'use strict';

// console.log("=== MODAL DEVELOPMENT: FOUNDATION & CLASS TOGGLING ===");

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

// console.log('Modal project ready!');

// // Section 1: DOM Element Selection & Caching
// // First, add strict mode at the top

// // Select the modal element
// const modalEl = document.querySelector('.modal');

// // Select the overlay element
// const overlayEl = document.querySelector('.overlay');

// // Select the close button element
// const btnCloseModalEl = document.querySelector('.close-modal');

// // Select ALL the open buttons using querySelectorAll
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Verify our selections worked correctly
// console.log('Open buttons:', btnsOpenModalEl); 

// // Section 2: Open/Close Helpers with Class Toggling
// // Create our openModal function
// const openModal = function () {
//     // Remove the hidden class from modal to make it visible
//     modalEl.classList.remove('hidden');
//     // Remove the hidden class from overlay to show dark background
//     overlayEl.classList.remove('hidden');
// };

// // Creating closeModal function
// const  closeModal = function () {
//     // Add the hidden class back to overlay to hide dark background
//     overlayEl.classList.add('hidden');
// };

// // Section 3: Connecting Evverything with Event Listeners

// // Wiring Up the Open Buttons
// // Attach openModal function to all show buttons
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));

// // Wiring Up the Close Actions
// // Attach closeModal function to close button
// btnCloseModalEl.addEventListener('click', closeModal);

// // Attach closeModal function to overlay click
// overlayEl.addEventListener('click', closeModal);

// Final Verification

// 'use strict';

// // Selections
// const modalEl = document.querySelector('.modal');
// const overlayEl = document.querySelector('.overlay');
// const btnCloseModalEl = document.querySelector('.close-modal');
// const btnsOpenModalEl = document.querySelectorAll('.show-modal');

// // Helper functions
// const openModal = function () {
//   modalEl.classList.remove('hidden');
//   overlayEl.classList.remove('hidden');
// };

// const closeModal = function () {
//   modalEl.classList.add('hidden');
//   overlayEl.classList.add('hidden');
// };

// // Event listeners
// btnsOpenModalEl.forEach(btn => btn.addEventListener('click', openModal));
// btnCloseModalEl.addEventListener('click', closeModal);
// overlayEl.addEventListener('click', closeModal);

////////////////////////////////////////////////////////////////////////

