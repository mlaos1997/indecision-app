
// Setup constructor to take name and age, default age = 0;
// Setup getDesctiption - Marcelo Laos is 21 year(s) old.
class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi! my name is ${this.name}!`
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        // Refers to parent class, exactly same as calling Person constructor
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` My major is ${this.major}`
        }
        return description
    }
}

// Traveler => Person
// Add support for homeLocation
// Override getGreeting 
// 1. Hi, I am Marcelo Laos. I'm visiting from Atlanta.
// 2. Hi, I am Marcelo Laos. 

class Traveler extends Person {

    constructor(name, location) {
        super(name);
        this.location = location;
    }

    getGreeting() {
        let greeting = super.getGreeting();

        if (this.location) {
            greeting += ` I am visiting from ${this.location}`
        }
        return greeting;
    }
}

const me = new Traveler('Marcelo David Laos');
const wife = new Traveler('Ana Maria Laos', 'Atlanta');
console.log(me.getGreeting());
console.log(wife.getGreeting());