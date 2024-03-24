function calculateNetSalary() {
  const basicSalary = parseFloat(document.getElementById("basicSalary").value);
  const benefits = parseFloat(document.getElementById("benefits").value) || 0;
  const grossSalary = basicSalary + benefits;

  const payee = calculatePAYE(grossSalary);
  const nssfDeduction = calculateNSSF(grossSalary);
  const nhifDeduction = calculateNHIF(grossSalary);

  const totalDeductions = payee + nssfDeduction + nhifDeduction;
  const netSalary = grossSalary - totalDeductions;

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
