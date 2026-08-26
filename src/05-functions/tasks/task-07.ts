/**
 * A university stores enrollment information at following array
 * The university needs a report containing:
 * - Total students
 * - Active students
 * - Inactive students
 * - Software Engineering students
 * - Networking students
 * - Multimedia students
 * 
 * Complete following functions!
 */

const students = [
  {
    name: "Alya",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Budi",
    major: "Networking",
    active: false
  },
  {
    name: "Citra",
    major: "Software Engineering",
    active: true
  },
  {
    name: "Dimas",
    major: "Multimedia",
    active: true
  },
  {
    name: "Eka",
    major: "Networking",
    active: false
  }
];

function countActiveStudents(students: any[]): number {
  let totalActive = 0;

  for (const student of students) {
    if (student.active === true) {
      totalActive++;
    }
  }

  return totalActive;
}

function countInactiveStudents(students: any[]): number {
  let totalInactive = 0;

  for (const student of students) {
    if (student.active === false) {
      totalInactive++;
    }
  }

  return totalInactive;
}

function countStudentsByMajor(students: any[], major: string): number {
  let total = 0;

  for (const student of students) {
    if (student.major === major) {
      total++;
    }
  }

  return total;
}

function printEnrollmentReport(students: any[]): void {
  console.log("Total Students:", students.length);
  console.log("Active Students:", countActiveStudents(students));
  console.log("Inactive Students:", countInactiveStudents(students));
  console.log(
    "Software Engineering Students:",
    countStudentsByMajor(students, "Software Engineering")
  );
  console.log(
    "Networking Students:",
    countStudentsByMajor(students, "Networking")
  );
  console.log(
    "Multimedia Students:",
    countStudentsByMajor(students, "Multimedia")
  );
}

printEnrollmentReport(students);