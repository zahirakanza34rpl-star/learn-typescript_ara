/**
 * A software company records daily employee attendance. 
 * Every attendance record stores the employee's ID, employee name, date, check-in time, check-out time, 
 * total working hours, and whether the employee was present on that day.
 * 
 * Task:
 * 1. Define a proper type for the attendance information.
 * 2. Implement a type that you defined on 3 attendance data.
 * 
 * display the attendance data using console.log.
 */

type employee ={
    employeeID: number
    name: string
    date: string
    InTime: string
    OutTime: string
    TotalWorkHours: number
    isPresent: boolean
}

const employee1: employee = {
    employeeID: 1234
    name: "Ara"
    date: "18-2-2026"
    InTime: "07.00"
    OutTime: "15.00"
    TotalWorkHours: 9
    isPresent: true
}

const employee2: employee = {
    employeeID: 1233
    name: "Arace"
    date: "18-2-2026"
    InTime: "07.00"
    OutTime: "15.00"
    TotalWorkHours: 9
    isPresent: true
}

const employee3: employee = {
    employeeID: 1235
    name: "Haneul Noyyah"
    date: "18-2-2026"
    InTime: "07.00"
    OutTime: "15.00"
    TotalWorkHours: 9
    isPresent: false
}

// employee 1
console.log("Employee 1")
console.log(`Employee ID: ${employee1.employeeID}`)
console.log(`Employee name: ${employee1.name}`)
console.log(`Date: ${employee1.date}`)
console.log(`Employee Check In Time: ${employee1.InTime}`)
console.log(`Employee Check Out Time: ${employee1.OutTime}`)
console.log(`Employee Total Work Hours: ${employee1.TotalWorkHours}`)
console.log(`Is Employee Present: ${employee1.isPresent}`)

// employee 2
console.log("Employee 2")
console.log(`Employee ID: ${employee2.employeeID}`)
console.log(`Employee name: ${employee2.name}`)
console.log(`Date: ${employee2.date}`)
console.log(`Employee Check In Time: ${employee2.InTime}`)
console.log(`Employee Check Out Time: ${employee2.OutTime}`)
console.log(`Employee Total Work Hours: ${employee2.TotalWorkHours}`)
console.log(`Is Employee Present: ${employee2.isPresent}`)

// employee 3
console.log("Employee 3")
console.log(`Employee ID: ${employee3.employeeID}`)
console.log(`Employee name: ${employee3.name}`)
console.log(`Date: ${employee3.date}`)
console.log(`Employee Check In Time: ${employee3.InTime}`)
console.log(`Employee Check Out Time: ${employee3.OutTime}`)
console.log(`Employee Total Work Hours: ${employee3.TotalWorkHours}`)
console.log(`Is Employee Present: ${employee3.isPresent}`)
