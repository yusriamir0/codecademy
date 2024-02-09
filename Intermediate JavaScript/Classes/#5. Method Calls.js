class Dog {
    constructor(name) {
        this._name = name;
        this._behavior = 0;
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior;
    }

    incrementBehavior() {
        this._behavior++;
    }
}

const halley = new Dog("Halley");

let nikko = new Dog("Nikko"); // Create dog named Nikko
nikko.incrementBehavior(); // Add 1 to nikko instance's behavior

let bradford = new Dog("Bradford"); // Create dog name Bradford

console.log(nikko.behavior); // Logs 1 to the console
console.log(bradford.behavior); // Logs 0 to the console

// Exercise -----------------------------
class Surgeon {
    constructor(name, department) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get department() {
        return this._department;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}

const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular");
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics");

console.log(surgeonRomero.name); // Logs <NAME> to the console

surgeonRomero.takeVacationDays(3);
console.log(surgeonRomero.remainingVacationDays);