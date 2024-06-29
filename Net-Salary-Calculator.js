//Calculate NHIF Deductions, NSSF Deductions, gross salary, and net salary. 
function calculateIncomeTax(monthlySalary, benefits = 0) {
    const grossSalary = monthlySalary + benefits;

    function KraDeduction() {
        let kraDeduction;
        if (grossSalary <= 24000) {
            kraDeduction = grossSalary * 0.1;
        } else if (grossSalary > 24000 && grossSalary <= 32333) {
            kraDeduction = grossSalary * 0.25;
        } else if (grossSalary > 32333 && grossSalary <= 500000) {
            kraDeduction = grossSalary * 0.3;
        } else if (grossSalary > 500000 && grossSalary <= 800000) {
            kraDeduction = grossSalary * 0.325;
        } else {
            kraDeduction = grossSalary * 0.35;
        }
        return kraDeduction;
    }
    function nhifDedaction(){
        
        let nhifDedaction=0;
        if (grossSalary<=40000){
            nhifDedaction=1000;
        }else if (grossSalary>40000&&grossSalary<=45000)
        {nhifDedaction=1100;}else if (grossSalary>45000&&grossSalary<=70000){
            nhifDedaction=1300;
        }
            else if (grossSalary>70000&&grossSalary<=90000){
                nhifDedaction=1600;
            }else if (grossSalary>90000&&grossSalary<=100000){
                nhifDedaction=1700;
            }else{
                nhifDedaction=1900;}
        return nhifDedaction;
    }
    function
    calculateNssfDeduction() {
        const NssfRate = 0.06;
        const maxNssf = 1800;
        return Math.min(grossSalary* NssfRate,maxNssf);
    }

    const netSalary = grossSalary -(kraDeduction+nhifDedaction+nssfDeduction);
    return {
        grossSalary
        kraDeduction
        nhifDedaction
        nssfDeduction
        netSalary
    };
}

const result=calculateIncomeTax(40000, 2500);

