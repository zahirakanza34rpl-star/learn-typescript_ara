/**
<<<<<<< HEAD
 * Module 06: OOP — Task 01
 *
 * Instructions:
 * 1. Create the classes and methods as described.
 * 2. Run: npm run example src/06-oop/tasks/task-01.ts
 */

interface Animal {
    name: string;
    species: string;
    speak(): string;
}


class Dog implements Animal {
    name: string;
    species: string;

    constructor(name: string, species: string = "Dog") {
        this.name = name;
        this.species = species;
    }

    speak(): string {
        return `${this.name} says: Woof!`;
    }
}


class Cat implements Animal {
    name: string;
    species: string;

    constructor(name: string, species: string = "Cat") {
        this.name = name;
        this.species = species;
    }

    speak(): string {
        return `${this.name} says: Meow!`;
    }
}


abstract class Vehicle {
    protected brand: string;

    constructor(brand: string) {
        this.brand = brand;
    }

    abstract getInfo(): string;

    getBrand(): string {
        return this.brand;
    }
}


class Car extends Vehicle {
    private model: string;

    constructor(brand: string, model: string) {
        super(brand);
        this.model = model;
    }

    getInfo(): string {
        return `${this.brand} ${this.model}`;
    }
}


const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");
const car = new Car("Toyota", "Camry");


console.log(dog.speak());
console.log(cat.speak());
console.log(car.getInfo());
console.log(car.getBrand());

//  =======
//  * A school wants to create a simple student profile system. 
//  * Every student has a student ID, name, age, major, and current grade level. 
//  * The school also wants the system to display a student's profile.
//  * For example, a student named Lionel Messi has the following information:
//  * | Property   | Value                |
//  * | ---------- | -------------------- |
//  * | Student ID | ST001                |
//  * | Name       | Lionel Messi         |
//  * | Age        | 17                   |
//  * | Major      | Software Engineering |
//  * | Grade      | 11                   |
//  * 
//  * The program should allow the school to create multiple student objects with different information.
//  * Student Tasks
//  * Create a class named with "Student"
//  * 
//  * The class should have:
//  * studentId
//  * name
//  * age
//  * major
//  * grade
//  * 
//  * Use a constructor to initialize all properties.
//  * Create a method: showProfile()
//  * that displays the student's information.
//  * Then create at least three student objects.
//  */