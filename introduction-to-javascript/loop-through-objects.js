let spaceship = {
    crew: {
        captain: {
            name: "Lily",
            degree: "Computer Engineering",
            cheerTeam() {
                console.log("You got this!");
            },
        },
        "chief officer": {
            name: "Dan",
            degree: "Aerospace Engineering",
            agree() {
                console.log("I agree, captain!");
            },
        },
        medic: {
            name: "Clementine",
            degree: "Physics",
            announce() {
                console.log(`Jets on!`);
            },
        },
        translator: {
            name: "Shauna",
            degree: "Conservation Science",
            powerFuel() {
                console.log("The tank is full!");
            },
        },
    },
};

// Write your code below

for (let crewName in spaceship.crew) {
    console.log(`${crewName}: ${spaceship.crew[crewName].name}`);
}

// Hint
// for (let variableName in outerObject.innerObject) {
//     console.log(`${outerObject.innerObject[variableName].propertyName}: ${outerObject.innerObject[variableName].differentPropertyName}`)
//   };

for (let crewRole in spaceship.crew) {
    console.log(
        `${spaceship.crew[crewRole].name}: ${spaceship.crew[crewRole].degree}`
    );
}
