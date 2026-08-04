/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];

let gradeA = 0
let gradeB = 0
let gradeC = 0
let gradeD = 0

let highestScore = students[0].score
let lowestScore = students[0].score
let totalScore = 0

for (const student of students) {
    totalScore += student.score

    if(student.score > highestScore){
        highestScore = student.score
    }
    if(student.score < lowestScore){
        lowestScore = student.score
    }

    if (student.score >= 90 ){
        gradeA++
    } else if (student.score >= 80){
        gradeB++
    } else if (student.score >= 70){
        gradeC++
    } else {
        gradeD++
    }
}

const averageScore = totalScore / students.length

console.log("GRADE A: ", gradeA)
console.log("GRADE B: ", gradeB)
console.log("GRADE C: ", gradeC)
console.log("GRADE D: ", gradeD)
console.log("Highest Score: ", highestScore)
console.log("Lowest Score: ", lowestScore)
console.log("Average Score: ", averageScore)