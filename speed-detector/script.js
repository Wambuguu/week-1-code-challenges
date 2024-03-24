const speedLimit = 70;
const demeritPerKm = 5;
const pointsElement = document.getElementById("result");

function checkSpeed() {
  const carSpeed = parseInt(document.getElementById("carSpeed").value);