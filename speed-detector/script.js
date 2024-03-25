// Define variables for speed limit and demerit points per kilometer
const speedLimit = 70;
const demeritPerKm = 5;

// Get a reference to the HTML element for displaying results
const pointsElement = document.getElementById("result");

// This function calculates the deduction points based on the car's speed and displays the corresponding message (points or license suspension) on the webpage.
function checkSpeed() {
   // Get the car's speed entered by the user and convert it to a number
  const carSpeed = parseInt(document.getElementById("carSpeed").value);

  // Check for invalid input
  if (isNaN(carSpeed)) {
    pointsElement.textContent = "Please enter a valid number.";
    return;
  }

  // Calculate the deduction points using a formula and ensure it's non-negative
  const deductionPoints = Math.max(
    0,
    Math.floor((carSpeed - speedLimit) / demeritPerKm)
  );

  // Determine the message to display based on the calculated deduction points
  if (carSpeed <= speedLimit) {
    pointsElement.textContent = "Ok";
  } else if (deductionPoints > 12) {
    pointsElement.textContent = "License suspended";
  } else {
    pointsElement.textContent = `Points: ${deductionPoints}`;
  }
}
