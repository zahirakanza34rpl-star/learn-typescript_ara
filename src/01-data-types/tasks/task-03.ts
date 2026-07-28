/**
 * SMK Telkom Malang is developing a new Student Information System. 
 * Before students can use the system, the administrator must record each student's basic information. 
 * Every student has a unique student ID, a full name, an age, and a status indicating whether they are currently an active student.
 * 
 * Task:
 * 1. Define a proper type for the student information.
 * 2. Implement a type that you defined on 3 students data.
 * 
 * display the student data using console.log.
 */

type Student = {
    studentName: string
    studentID: string
    studentAge: number
    isActive: boolean
}

const student1: Student = {
    studentID: "ST2026001",
    studentName: "Mahatma",
    studentAge: 17,
    isActive: true
}

const student2: Student = {
    studentID: "ST2026002",
    studentName: "Zahra",
    studentAge: 17,
    isActive: true
}

const student3: Student = {
    studentID: "ST2026003",
    studentName: "Ara",
    studentAge: 17,
    isActive: true
}

console.log("Student 1")
console.log(`Student id: ${student1.studentID}`)
console.log(`Student Full Name: ${student1.studentName}`)
console.log(`Student Age: ${student1.studentAge}`)
console.log(`Is Student Active: ${student1.isActive}`)

console.log("Student 2")
console.log(`Student id: ${student2.studentID}`)
console.log(`Student Full Name: ${student2.studentName}`)
console.log(`Student Age: ${student2.studentAge}`)
console.log(`Is Student Active: ${student2.isActive}`)

console.log("Student 3")
console.log(`Student id: ${student3.studentID}`)
console.log(`Student Full Name: ${student3.studentName}`)
console.log(`Student Age: ${student3.studentAge}`)
console.log(`Is Student Active: ${student3.isActive}`)