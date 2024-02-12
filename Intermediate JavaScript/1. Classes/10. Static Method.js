// class Animal {
//     constructor(name) {
//         this._name = name;
//         this._behavior = 0;
//     }
//     // Because of Static keyword, we can only access .generateName() by appending it to the Animal class.
//     static generateName() {
//         const names = ["Angel", "Spike", "Buffy", "Willow", "Tara"];
//         const randomNumber = Math.floor(Math.random() * 5);
//         return names[randomNumber];
//     }
// }
// console.log(Animal.generateName()); // returns a name

// // The example below will result in an error, because you cannot call static methods (.generateName()) on an instance (tyson).
// const tyson = new Animal("Tyson");
// tyson.generateName();

// EXERCISE --------------------------------
class HospitalEmployee {
    constructor(name) {
        this._name = name;
        this._remainingVacationDays = 20;
    }
    // Static methods are called on the class, but not on instances of the class.
    static generatePassword() {
        const randomNumber = Math.floor(Math.random() * 10000); // The following code will compute a random integer between 0 and 10,000:
        return randomNumber;
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

    get certifications() {
        return this._certifications;
    }

    addCertification(newCertification) {
        this.certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);
nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);

console.log(HospitalEmployee.generatePassword());
