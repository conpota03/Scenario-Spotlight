// Get the dice and roll button elements
const dice = document.querySelector('.dice');
const rollButton = document.querySelector('#roll-button');

// Define the faces of the dice
const faces = ['front', 'back', 'top', 'bottom', 'left', 'right'];

// Define a function to roll the dice
function rollDice() {
  // Generate a random number between 0 and 5
  const randomIndex = Math.floor(Math.random() * 6);

  // Get the face that corresponds to the random number
  const face = faces[randomIndex];

  // Remove any existing face classes from the dice
  dice.classList.remove(...faces);

  // Add the new face class to the dice
  dice.classList.add(face);
}

// Add a click event listener to the roll button
rollButton.addEventListener('click', rollDice);
