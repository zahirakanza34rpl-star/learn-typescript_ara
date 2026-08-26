/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

const enrollments = [
    {
        student: "Alya",
        course: "TypeScript",
        completed: true,
        score: 91,
        duration: 38
    },
    {
        student: "Budi",
        course: "TypeScript",
        completed: false,
        score: 45,
        duration: 12
    },
    {
        student: "Citra",
        course: "Database",
        completed: true,
        score: 87,
        duration: 42
    },
    {
        student: "Dimas",
        course: "Backend",
        completed: true,
        score: 96,
        duration: 40
    },
    {
        student: "Eka",
        course: "Database",
        completed: false,
        score: 60,
        duration: 18
    },
    {
        student: "Fajar",
        course: "Backend",
        completed: true,
        score: 82,
        duration: 35
    },
    {
        student: "Gita",
        course: "TypeScript",
        completed: true,
        score: 88,
        duration: 36
    },
    {
        student: "Hana",
        course: "Backend",
        completed: false,
        score: 70,
        duration: 20
    }
];

function countTotalEnrollments(enrollments: any[]): number {
    return enrollments.length;
}

function countCompletedEnrollments(enrollments: any[]): number {
    let total = 0;

    for(const enrollment of enrollments){
        if(enrollment.completed === true ){
            total++;
        }
    }
    return total;
}

function countIncompleteEnrollments(enrollments: any[]): number {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.completed === false) {
            total++;
        }
    }

    return total;
}

function calculateCompletionPercentage(enrollments: any[]): number {
    const total = countTotalEnrollments(enrollments);
    const completed = countCompletedEnrollments(enrollments);

    return (completed / total) * 100;
}

function findHighestScore(enrollments: any[]): number {
    let highest = enrollments[0].score;

    for (const enrollment of enrollments) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }

    return highest;
}

function findLowestScore(enrollments: any[]): number {
    let lowest = enrollments[0].score;

    for (const enrollment of enrollments) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }

    return lowest;
}

function calculateAverageScore(enrollments: any[]): number {
    let total = 0;

    for (const enrollment of enrollments) {
        total += enrollment.score;
    }

    return total / enrollments.length;
}

function countPassingStudents(enrollments: any[]): number {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.score >= 75) {
            total++;
        }
    }

    return total;
}

function countStudentsByCourse(
    enrollments: any[],
    course: string
): number {
    let total = 0;

    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            total++;
        }
    }

    return total;
}

function calculateAverageScoreByCourse(
    enrollments: any[],
    course: string
): number {
    let total = 0;
    let count = 0;

    for (const enrollment of enrollments) {
        if (enrollment.course === course) {
            total += enrollment.score;
            count++;
        }
    }

    return total / count;
}

function calculateTotalLearningHours(enrollments: any[]): number {
    let total = 0;

    for (const enrollment of enrollments) {
        total += enrollment.duration;
    }

    return total;
}

function calculateAverageLearningDuration(enrollments: any[]): number {
    const total = calculateTotalLearningHours(enrollments);

    return total / enrollments.length;
}

function printCompletionStatistics(enrollments: any[]): void {
    console.log("=== Completion Statistics ===");
    console.log("Total Enrollments:", countTotalEnrollments(enrollments));
    console.log("Completed Enrollments:", countCompletedEnrollments(enrollments));
    console.log("Incomplete Enrollments:", countIncompleteEnrollments(enrollments));
    console.log(
        "Completion Percentage:",
        calculateCompletionPercentage(enrollments) + "%"
    );
}

function printAcademicStatistics(enrollments: any[]): void {
    console.log("\n=== Academic Statistics ===");
    console.log("Highest Score:", findHighestScore(enrollments));
    console.log("Lowest Score:", findLowestScore(enrollments));
    console.log("Average Score:", calculateAverageScore(enrollments));
    console.log("Passing Students:", countPassingStudents(enrollments));
}

function printCourseStatistics(enrollments: any[]): void {
    console.log("\n=== Course Statistics ===");

    console.log(
        "TypeScript Students:",
        countStudentsByCourse(enrollments, "TypeScript")
    );

    console.log(
        "TypeScript Average Score:",
        calculateAverageScoreByCourse(enrollments, "TypeScript")
    );

    console.log(
        "Database Students:",
        countStudentsByCourse(enrollments, "Database")
    );

    console.log(
        "Database Average Score:",
        calculateAverageScoreByCourse(enrollments, "Database")
    );

    console.log(
        "Backend Students:",
        countStudentsByCourse(enrollments, "Backend")
    );

    console.log(
        "Backend Average Score:",
        calculateAverageScoreByCourse(enrollments, "Backend")
    );
}

function printLearningStatistics(enrollments: any[]): void {
    console.log("\n=== Learning Statistics ===");
    console.log(
        "Total Learning Hours:",
        calculateTotalLearningHours(enrollments)
    );
    console.log(
        "Average Learning Duration:",
        calculateAverageLearningDuration(enrollments)
    );
}

printCompletionStatistics(enrollments);
printAcademicStatistics(enrollments);
printCourseStatistics(enrollments);
printLearningStatistics(enrollments);