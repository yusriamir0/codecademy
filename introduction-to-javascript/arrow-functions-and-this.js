// ES6 shorthand
// const goat = {
//     name: "Billy",
//     color: "biege",
//     giveDetails() {
//         console.log(`${this.name} is a ${this.color} goat.`);
//     },
// };

// LongHand Format
// const goat = {
//     name: "Billy",
//     color: "biege",
//     giveDetails: function () {
//         console.log(`${this.name} is a ${this.color} goat.`);
//     },
// };

const robot = {
    energyLevel: 100,

    checkEnergy() {
        console.log(`Energy is currently at ${this.energyLevel}%`);
    },
};
robot.checkEnergy();
