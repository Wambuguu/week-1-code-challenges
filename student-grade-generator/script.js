function calculateGrade() {
  const marksInput = document.getElementById("marks");
  const marks = parseInt(marksInput.value);
  const gradeResult = document.getElementById("grade-result");

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
  gradeResult.textContent = `The grade is ${grade}`;

  if (isNaN(marks) || marks < 0 || marks > 100) {
    gradeResult.textContent =
      "Invalid marks. Please enter a number between 0 and 100.";
    return;
  }
}
