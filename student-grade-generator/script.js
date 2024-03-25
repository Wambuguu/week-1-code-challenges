// This function calculates the letter grade based on the entered student marks.
function calculateGrade() {
   // Get the user-entered marks from the input field
  const marksInput = document.getElementById("marks");
  const marks = parseInt(marksInput.value);
  const gradeResult = document.getElementById("grade-result");

  // Determines the letter grade based on the marks using a series of conditional statements
  if (marks >= 80) {
    grade = "A";
  } else if (marks >= 60) {
    grade = "B";
  } else if (marks >= 50) {
    grade = "C";
  } else if (marks >= 40) {
    grade = "D";
  } else {
    grade = "E";
  }
  // Display the calculated grade on the web page
  gradeResult.textContent = `The grade is ${grade}`;
 
  // Ensures it's a number between 0 and 100
  if (isNaN(marks) || marks < 0 || marks > 100) {
    gradeResult.textContent =
      "Invalid marks. Please enter a number between 0 and 100.";
    return;
  }
}
