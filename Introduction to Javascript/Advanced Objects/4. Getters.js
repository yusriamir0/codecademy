const person = {
    _firstName: "John",
    _lastName: "Doe",
    get fullName() {
        if (this._firstName && this._lastName) {
            return `${this._firstName} ${this._lastName}`;
        } else {
            return "Missing a first name or a last name.";
        }
    },
};

// To call the getter method:
console.log(person.fullName);

// To call the getter method with an object:
const robot = {
    _model: "1E78V2",
    _energyLevel: 100,
    get energyLevel() {
        if (this._energyLevel == 100) {
            return `My current energy level is ${this._energyLevel}`;
        } else {
            return "System malfunction: cannot retrieve energy level";
        }
    },
};
console.log(robot.energyLevel);
