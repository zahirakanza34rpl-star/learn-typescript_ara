/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    {
        student: "Alya",
        submitted: true,
        score: 90
    },
    {
        student: "Budi",
        submitted: false,
        score: 0
    },
    {
        student: "Citra",
        submitted: true,
        score: 84
    },
    {
        student: "Dimas",
        submitted: true,
        score: 72
    },
    {
        student: "Eka",
        submitted: false,
        score: 0
    },
    {
        student: "Fajar",
        submitted: true,
        score: 96
    }
];

function countTotalStudents(submissions: any[]): number {
    return submissions.length;
}

function countSubmittedAssignments(submissions: any[]): number {
    let total = 0;

    for (const submission of submissions) {
        if (submission.submitted === true) {
            total++;
        }
    }

    return total;
}

function countMissingAssignments(submissions: any[]): number {
    let total = 0;

    for (const submission of submissions) {
        if (submission.submitted === false) {
            total++;
        }
    }

    return total;
}

function countPassedStudents(submissions: any[]): number {
    let total = 0;

    for (const submission of submissions) {
        if (submission.score >= 75) {
            total++;
        }
    }

    return total;
}

function countRevisionStudents(submissions: any[]): number {
    let total = 0;

    for (const submission of submissions) {
        if (submission.submitted === true && submission.score < 75) {
            total++;
        }
    }

    return total;
}

function calculateAverageScore(submissions: any[]): number {
    let total = 0;

    for (const submission of submissions) {
        total += submission.score;
    }

    return total / submissions.length;
}

function findHighestScore(submissions: any[]): number {
    let highest = submissions[0].score;

    for (const submission of submissions) {
        if (submission.score > highest) {
            highest = submission.score;
        }
    }

    return highest;
}

function findLowestScore(submissions: any[]): number {
    let lowest = submissions[0].score;

    for (const submission of submissions) {
        if (submission.score < lowest) {
            lowest = submission.score;
        }
    }

    return lowest;
}

function printReport(submissions: any[]): void {
    console.log("=== LMS Submission Report ===");
    console.log("Total Students:", countTotalStudents(submissions));
    console.log("Submitted Assignments:", countSubmittedAssignments(submissions));
    console.log("Missing Assignments:", countMissingAssignments(submissions));
    console.log("Passed Students:", countPassedStudents(submissions));
    console.log("Students Requiring Revision:", countRevisionStudents(submissions));
    console.log("Average Score:", calculateAverageScore(submissions));
    console.log("Highest Score:", findHighestScore(submissions));
    console.log("Lowest Score:", findLowestScore(submissions));
}

printReport(submissions);