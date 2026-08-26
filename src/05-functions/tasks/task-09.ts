/**
 * A hospital stores patient information in the following array.
 * The hospital director requests a daily report containing:
 * - Total patients
 * - Total admitted patients
 * - Total discharged patients
 * - Number of patients in each department
 * - Highest hospital bill
 * - Lowest hospital bill
 * - Average hospital bill
 * - Total hospital revenue
 * - Names of admitted patients
 * 
 * Student Tasks
 * Design a program using multiple reusable functions.
 * 
 * Requirements
 * - Create at least 8 non-void functions.
 * - Create 1 void function to print the report.
 * - Each function should perform only one responsibility.
 * - printHospitalReport() must only display results.
 * - No duplicated calculations.
 */
const patients = [
    {
        id: "PT001",
        name: "Ara",
        age: 17,
        department: "Pediatrics",
        admitted: true,
        bill: 850000
    },
    {
        id: "PT002",
        name: "Farhan",
        age: 45,
        department: "Cardiology",
        admitted: false,
        bill: 1200000
    },
    {
        id: "PT003",
        name: "Nafi",
        age: 68,
        department: "Cardiology",
        admitted: true,
        bill: 2500000
    },
    {
        id: "PT004",
        name: "Irfan",
        age: 33,
        department: "Orthopedics",
        admitted: true,
        bill: 640000
    },
    {
        id: "PT005",
        name: "Bilal",
        age: 19,
        department: "Pediatrics",
        admitted: false,
        bill: 350000
    }
];

function countTotalPatients(patients: any[]): number {
    return patients.length;
}

function countAdmittedPatients(patients: any[]): number {
    let total = 0;

    for (const patient of patients) {
        if (patient.admitted === true) {
            total++;
        }
    }

    return total;
}

function countDischargedPatients(patients: any[]): number {
    let total = 0;

    for (const patient of patients) {
        if (patient.admitted === false) {
            total++;
        }
    }

    return total;
}

function countPatientsByDepartment(
    patients: any[],
    department: string
): number {
    let total = 0;

    for (const patient of patients) {
        if (patient.department === department) {
            total++;
        }
    }

    return total;
}

function findHighestBill(patients: any[]): number {
    let highest = patients[0].bill;

    for (const patient of patients ){
        if(patient.bill > highest){
            highest = patient.bill;
        }
    }

    return highest;
}

function findLowestBill(patients: any[]): number {
    let lowest = patients[0].bill;

    for (const patient of patients) {
        if (patient.bill < lowest) {
            lowest = patient.bill;
        }
    }

    return lowest;
}

function calculateAverageBill(patients: any[]): number {
    let total = 0;

    for (const patient of patients) {
        total += patient.bill;
    }

    return total / patients.length;
}

function calculateTotalRevenue(patients: any[]): number {
    let total = 0;

    for (const patient of patients) {
        total += patient.bill;
    }

    return total;
}

function getAdmittedPatientNames(patients: any[]): string {
    let names = "";

    for (const patient of patients) {
        if (patient.admitted === true) {
            names += patient.name + " ";
        }
    }

    return names;
}

function printHospitalReport(patients: any[]): void {
    console.log("Total Patients:", countTotalPatients(patients));
    console.log("Total Admitted Patients:", countAdmittedPatients(patients));
    console.log("Total Discharged Patients:", countDischargedPatients(patients));

    console.log(
        "Pediatrics:",
        countPatientsByDepartment(patients, "Pediatrics")
    );

    console.log(
        "Cardiology:",
        countPatientsByDepartment(patients, "Cardiology")
    );

    console.log(
        "Orthopedics:",
        countPatientsByDepartment(patients, "Orthopedics")
    );

    console.log("Highest Hospital Bill:", findHighestBill(patients));
    console.log("Lowest Hospital Bill:", findLowestBill(patients));
    console.log("Average Hospital Bill:", calculateAverageBill(patients));
    console.log("Total Hospital Revenue:", calculateTotalRevenue(patients));
    console.log("Admitted Patients:", getAdmittedPatientNames(patients));
}

printHospitalReport(patients);