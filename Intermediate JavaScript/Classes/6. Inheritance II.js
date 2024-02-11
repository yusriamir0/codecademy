// When multiple classes share properties or methods, they become candidates for INHERITANCE

// Define HospitalEmployee class with basic properties and methods
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

// Define Doctor class which extends HospitalEmployee
class Doctor {
    constructor(name, insurance) {
        this._name = name;
        this._insurance = insurance;
    }
    get insurance() {
        return this._insurance;
    }
}

// Define Nurse class which extends HospitalEmployee
class Nurse {
    constructor(name, certifications) {
        this._name = name;
        this._certifications = certifications;
    }
    get certifications() {
        return this._certifications;
    }

    addCertification(certification) {
        this._certification = certification;
    }
}
