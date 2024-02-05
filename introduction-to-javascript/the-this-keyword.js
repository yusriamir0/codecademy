// this keyword example

const goat = {
    dietType: "herbivore",
    makeSound() {
        console.log("baaa");
    },

    diet() {
        console.log(this.dietType); //The this keyword references the calling object
    },
};

goat.diet();
// ADVANCED OBJECTS (this keyword) ======================================
const robot = {
    model: "1E78V2",
    energyLevel: 100,
    provideInfo() {
        return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
    },
};

console.log(robot.provideInfo());
