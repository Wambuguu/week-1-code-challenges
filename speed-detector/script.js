const speedLimit = 70;
const demeritPerKm = 5;
const pointsElement = document.getElementById("result");

function checkSpeed() {
  const carSpeed = parseInt(document.getElementById("carSpeed").value);

  if (isNaN(carSpeed)) {
    pointsElement.textContent = "Please enter a valid number.";
    return;
  }

  const deductionPoints = Math.max(
    0,
    Math.floor((carSpeed - speedLimit) / demeritPerKm)
  );

  if (carSpeed <= speedLimit) {
    pointsElement.textContent = "Ok";
  } else if (deductionPoints > 12) {
    pointsElement.textContent = "License suspended";
  } else {
    pointsElement.textContent = `Points: ${deductionPoints}`;
  }
}


