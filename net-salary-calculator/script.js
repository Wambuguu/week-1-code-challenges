function calculateNetSalary() {
    const basicSalary = parseFloat(document.getElementById("basicSalary").value);
    const benefits = parseFloat(document.getElementById("benefits").value) || 0;
    const grossSalary = basicSalary + benefits;
  
    const payee = calculatePAYE(grossSalary);
    const nssfDeduction = calculateNSSF(grossSalary);
    const nhifDeduction = calculateNHIF(grossSalary);
  
    const totalDeductions = payee + nssfDeduction + nhifDeduction;
    const netSalary = grossSalary - totalDeductions;
}