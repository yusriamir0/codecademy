const robot = {
    model: "SAL-1000",
    mobile: true,
    sentient: false,
    armor: "Steel-plated",
    energyLevel: 75,
};

// grab the property names, known as keys, and save the keys in an array
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// return an array that have both the key and value of the properties in an object
const robotEntries = Object.entries(robot);
console.log(robotEntries);

// Object.assign(target, source1, source2, /* …, */ sourceN)

const newRobot = Object.assign(
    {
        laserBlaster: true,
        voiceRecognition: true,
    },
    robot
);
console.log(newRobot);
