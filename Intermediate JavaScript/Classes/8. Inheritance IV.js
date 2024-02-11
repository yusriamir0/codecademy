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
    constructor(name, usesLitter) {
        super(name);
        this._usesLitter = usesLitter;
    }
}

const bryceCat = new Cat("Bryce", false); // Cat Instance
console.log(bryceCat.name);

bryceCat.incrementBehavior(); // Call .incrementBehavior() on Cat instance - The first line of code calls the inherited .incrementBehavior() method, which increases the bryceCat _behavior value from zero to one.
console.log(bryceCat.behavior); // Log value saved to behavior - The second line logs the updated bryceCat._behavior value to the console.

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

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);

nurseOlynyk.takeVacationDays(5); // Call inherited .takeVacationDays() method to deduct vacation
console.log(nurseOlynyk.remainingVacationDays);
