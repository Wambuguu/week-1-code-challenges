// This function calculates the net salary of an employee based on their basic salary, benefits, 
// and various deductions (PAYE, NSSF, NHIF)
function calculateNetSalary() {
  // Get basic salary and benefits from user input
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value) || 0;
  
  // Calculate gross salary by adding basic salary and benefits
  const grossSalary = basicSalary + benefits;

  // Calculate deductions using separate functions (PAYE, NSSF, NHIF)
  const payee = calculatePAYE(grossSalary);
  const nssfDeduction = calculateNSSF(grossSalary);
  const nhifDeduction = calculateNHIF(grossSalary);

  // Calculate total deductions by summing individual deductions
  const totalDeductions = payee + nssfDeduction + nhifDeduction;
  
  // Calculate net salary by subtracting total deductions from gross salary
  const netSalary = grossSalary - totalDeductions;

  // Get the results element from the HTML document
  const results = document.getElementById("results");
  results.innerHTML = `
      <p>Gross Salary: Ksh ${grossSalary.toFixed(2)}</p>
      <ul>
        <li>PAYE: Ksh ${payee.toFixed(2)}</li>
        <li>NSSF Deduction: Ksh ${nssfDeduction.toFixed(2)}</li>
        <li>NHIF Deduction: Ksh ${nhifDeduction.toFixed(2)}</li>
        <li>Total Deductions: Ksh ${totalDeductions.toFixed(2)}</li>
      </ul>
      <p>Net Salary: Ksh ${netSalary.toFixed(2)}</p>
    `;
}

// This function calculates the Pay As You Earn (PAYE) tax based on the provided gross salary
function calculatePAYE(grossSalary) {
  if (grossSalary > 800000) {
    return grossSalary * 0.35;
  } else if (grossSalary > 500000) {
    return grossSalary * 0.325;
  } else if (grossSalary > 32333) {
    return grossSalary * 0.3;
  } else if (grossSalary > 24000) {
    return grossSalary * 0.25;
  } else {
    return grossSalary * 0.1;
  }
}

// This function calculates the National Social Security Fund (NSSF) deduction, which is a fixed 6% of the gross salary.
function calculateNSSF(grossSalary) {
  return grossSalary * 0.06;
}

// This function calculates the National Hospital Insurance Fund (NHIF) deduction  
function calculateNHIF(grossSalary) {
  if (grossSalary >= 100000) {
    return 1700;
  } else if (grossSalary > 90000) {
    return 1600;
  } else if (grossSalary > 80000) {
    return 1500;
  } else if (grossSalary > 70000) {
    return 1400;
  } else if (grossSalary > 60000) {
    return 1300;
  } else if (grossSalary > 50000) {
    return 1200;
  } else if (grossSalary > 45000) {
    return 1100;
  } else if (grossSalary > 40000) {
    return 1000;
  } else if (grossSalary > 35000) {
    return 950;
  } else if (grossSalary > 30000) {
    return 900;
  } else if (grossSalary > 25000) {
    return 850;
  } else if (grossSalary > 20000) {
    return 750;
  } else if (grossSalary > 15000) {
    return 600;
  } else if (grossSalary > 12000) {
    return 500;
  } else if (grossSalary > 8000) {
    return 400;
  } else if (grossSalary > 6000) {
    return 300;
  } else {
    return 150;
  }
}
