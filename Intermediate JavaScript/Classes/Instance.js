class Dog {
    constructor(name) {
        this.name = name;
        this.behavior = 0;
    }
}

const halley = new Dog("Halley"); // Create new Dog instance
console.log(halley.name); // Log the name value saved to halley
console.log(halley.behavior); // Log the behavior value saved to halley

// Exercise ----------------------------------------------------------------------
class Surgeon {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }
}
const surgeonRomero = new Surgeon("Francisco Romero", "Cardiovascular"); // Create new Surgeon instance
const surgeonJackson = new Surgeon("Ruth Jackson", "Orthopedics"); // Create new Surgeon instance

console.log(surgeonRomero.name); // Log the name value saved to surgeonRomero
