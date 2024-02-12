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
        this._remainingVacationDays -= daysOff; // _remainingVacationDays (jawapan - 15) =  _remainingVacationDays (asal - 20) -  daysOff (diberi - 5)
    }
}

class Nurse extends HospitalEmployee {
    constructor(name, certifications) {
        super(name);
        this._certifications = certifications;
    }
    get certifications() {
        // Add getter
        return this._certifications;
    }
    addCertification(newCertification) {
        // Add method called addCertification that accept argument newCertification
        this._certifications.push(newCertification);
    }
}

const nurseOlynyk = new Nurse("Olynyk", ["Trauma", "Pediatrics"]);
nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

nurseOlynyk.addCertification("Genetics");
console.log(nurseOlynyk.certifications);
