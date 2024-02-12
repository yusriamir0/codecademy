class Dog {
    constructor(name) {
        this._name = name; // underscore(_) means these properties cannot be accessed outside of the class
        this._behavior = 0; // underscore(_) means these properties cannot be accessed outside of the class
    }

    get name() {
        return this._name;
    }

    get behavior() {
        return this._behavior; // underscore(_) means these properties cannot be accessed outside of the class
    }

    incrementBehavior() {
        this._behavior++;
    }
}
// Exercise -----------------------------------------------------
class Surgeon {
    constructor(name, department, initialVacationDays) {
        this._name = name;
        this._department = department;
        this._remainingVacationDays = initialVacationDays;
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

// Create an instance of Surgeon
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular", 20);

// Print initial remaining vacation days
console.log(
    `${surgeonRomero.name} has ${surgeonRomero.remainingVacationDays} vacation days left.`
);

// Take 5 vacation days
surgeonRomero.takeVacationDays(5);

// Print remaining vacation days after taking vacation
console.log(
    `${surgeonRomero.name} has ${surgeonRomero.remainingVacationDays} vacation days left.`
);
