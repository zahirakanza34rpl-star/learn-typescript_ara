/**
 * An LMS stores student performance data below.
 * The school wants to analyze students using different criteria.
 * A student is considered academically successful if:
 * - Score ≥ 75
 * - Attendance ≥ 90%
 * 
 * 
 * The teacher wants to generate:
 *  - Pass/fail status.
 *  - Academic performance category.
 *  - Attendance status.
 *  - Final recommendation.
 * 
 * Recommendation Rules:
 * ----------------------------------------------------------------|
 * | Condition                      | Recommendation               |
 * | ------------------------------ | ---------------------------- |
 * | Score ≥ 90 AND attendance ≥ 90 | Excellent                    |
 * | Score ≥ 75 AND attendance ≥ 90 | Good                         |
 * | Score ≥ 75 BUT attendance < 90 | Improve Attendance           |
 * | Score < 75                     | Improve Academic Performance |
 * ----------------------------------------------------------------|
 * 
 * Challenge:
 * - processStudents() should know nothing about these rules.
 * - It should only process the students and execute the callback.
 */

const students = [
    { name: "Alya", score: 92, attendance: 96 },
    { name: "Budi", score: 68, attendance: 88 },
    { name: "Citra", score: 84, attendance: 91 },
    { name: "Dimas", score: 73, attendance: 95 },
    { name: "Eka", score: 95, attendance: 82 },
    { name: "Fajar", score: 79, attendance: 97 }
];

function processStudents<T>(
    student: typeof students,
    callback: (student: typeof students[number]) => T
): T []{
    return students.map(callback);
}

function getPassFailStatus(
    student: typeof students[number]
): string {

    if(student.score >= 75 && student.attendance >= 90){
        return `${student.name}: Passed`;
    } else {
        return `${student.name}: Failed`;
    }
}

function getAcademicPerformance(
    student: typeof students[number]
): string {

    if(student.score >= 90){
        return `${student.name}: Excellent`;
    } else if (student.score >= 75) {
        return `${student.name}: Good`;
    } else {
        return `${student.name}: Needs Improvement`;
    }
}

function getAttendanceStatus(
    student: typeof students[number]
): string {

    if (student.attendance >= 90) {
        return `${student.name}: Good Attendance`;
    } else {
        return `${student.name}: Poor Attendance`;
    }
}


function getFinalRecommendation(
    student: typeof students[number]
): string {

    if (student.score >= 90 && student.attendance >= 90) {
        return `${student.name}: Excellent`;
    } else if (student.score >= 75 && student.attendance >= 90) {
        return `${student.name}: Good`;
    } else if (student.score >= 75 && student.attendance < 90) {
        return `${student.name}: Improve Attendance`;
    } else {
        return `${student.name}: Improve Academic Performance`;
    }
}



console.log("====== PASS / FAIL STATUS ======");
console.log(
    processStudents(students, getPassFailStatus)
);

console.log("====== ACADEMIC PERFORMANCE ======");
console.log(
    processStudents(students, getAcademicPerformance)
);

console.log("====== ATTENDANCE STATUS ======");
console.log(
    processStudents(students, getAttendanceStatus)
);

console.log("====== FINAL RECOMMENDATION ======");
console.log(
    processStudents(students, getFinalRecommendation)
);