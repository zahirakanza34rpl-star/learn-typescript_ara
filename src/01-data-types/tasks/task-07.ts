/**
 * An online learning platform allows students to register for programming courses. 
 * Every registration stores information about both the student and the selected course. 
 * Student information includes student ID, full name, and grade level. 
 * Course information includes the course ID, course title, instructor name, 
 * and total learning hours. Finally, the registration also records the registration date and whether the payment has been completed.
 * 
 * Task:
 * 1. Define a proper type for the registration information.
 * 2. Implement a type that you defined on 3 registration data.
 * 
 * display the registration data using console.log.
 */

type Student ={
    studentID: number
    FullName: string
    Grade: number
}

type Course ={
    courseID: number
    courseTitle: string
    InstructorName: string
    learningHours: string
}

type registrationst ={
    registDate: string
    isPaymentCompleted: string
}


const registration1: Registration = {
  student: {
    studentID: 3456,
    fullName: "Assalamualaikum",
    grade: 7
  },
  course: {
    courseID: 101,
    courseTitle: "TypeScript Basics",
    instructorName: "Mr. Andi",
    learningHours: "20"
  },
  registrationDate: "2026-07-24",
  isPaymentCompleted: true
}


const registration2: Registration = {
  student: {
    studentID: 3457,
    fullName: "Waalaikumsalam",
    grade: 10
  },
  course: {
    courseID: 111,
    courseTitle: "html Basics",
    instructorName: "Mr. Edo",
    learningHours: "23"
  },
  registrationDate: "2026-08-30",
  isPaymentCompleted: true
}

const registration3: Registration = {
  student: {
    studentID: 3476,
    fullName: "Bismillah",
    grade: 12
  },
  course: {
    courseID: 123,
    courseTitle: "English",
    instructorName: "Ms. Ina",
    learningHours: "20"
  },
  registrationDate: "2026-07-23",
  isPaymentCompleted: false
}

// Registration 1
console.log("Registration 1")
console.log(`Student ID: ${registration1.student.studentID}`)
console.log(`Full Name: ${registration1.student.fullName}`)
console.log(`Grade: ${registration1.student.grade}`)
console.log(`Course ID: ${registration1.course.courseID}`)
console.log(`Course Title: ${registration1.course.courseTitle}`)
console.log(`Instructor Name: ${registration1.course.instructorName}`)
console.log(`Learning Hours: ${registration1.course.learningHours}`)
console.log(`Registration Date: ${registration1.registrationDate}`)
console.log(`Payment Completed: ${registration1.isPaymentCompleted}`)

// Registration 2
console.log("Registration 2")
console.log(`Student ID: ${registration2.student.studentID}`)
console.log(`Full Name: ${registration2.student.fullName}`)
console.log(`Grade: ${registration2.student.grade}`)
console.log(`Course ID: ${registration2.course.courseID}`)
console.log(`Course Title: ${registration2.course.courseTitle}`)
console.log(`Instructor Name: ${registration2.course.instructorName}`)
console.log(`Learning Hours: ${registration2.course.learningHours}`)
console.log(`Registration Date: ${registration2.registrationDate}`)
console.log(`Payment Completed: ${registration2.isPaymentCompleted}`)

// Registration 3
console.log("Registration 3")
console.log(`Student ID: ${registration3.student.studentID}`)
console.log(`Full Name: ${registration3.student.fullName}`)
console.log(`Grade: ${registration3.student.grade}`)
console.log(`Course ID: ${registration3.course.courseID}`)
console.log(`Course Title: ${registration3.course.courseTitle}`)
console.log(`Instructor Name: ${registration3.course.instructorName}`)
console.log(`Learning Hours: ${registration3.course.learningHours}`)
console.log(`Registration Date: ${registration3.registrationDate}`)
console.log(`Payment Completed: ${registration3.isPaymentCompleted}`)