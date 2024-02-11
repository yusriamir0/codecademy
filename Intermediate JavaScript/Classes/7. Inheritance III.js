class Animal {
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

class Cat extends Animal {
    // The extends keyword makes the methods of the animal class available inside the cat class.
    constructor(name, usesLitter) {
        // In a constructor(), you must always call the super method before you can use the this keyword
        super(name); // The super keyword calls the constructor of the parent class. In this case, super(name) passes the name argument of the Cat class to the constructor of the Animal class
        this._usesLitter = usesLitter;
    }
}
const bryceCat = new Cat("Bryce", false);
console.log(bryceCat._name); // output: Bryce

// EXERCISE

class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }

    get name() {
        return this._name;
    }

    get remainingVacationDays() {
        return this._remainingVacationDays;
    }

    takeVacationDays(daysOff) {
        this._remainingVacationDays -= daysOff;
    }
}
// Create a class called Nurse that extends HospitalEmployee and has a constructor that takes a _name, _remainingVacationDays, _certifications
class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
console.log(nurseOlynyk._name);
console.log(nurseOlynyk._certifications);
