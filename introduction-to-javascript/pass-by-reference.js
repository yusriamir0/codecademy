let spaceship = {
    "Fuel Type": "Turbo Fuel",
    homePlanet: "Earth",
};

// Write your code below
// Hint
// let functionName = objectParam => {
//     objectParam['Property Name'] = 'New Property Value';
//   };

let greenEnergy = (obj) => (obj["Fuel Type"] = "avocado oil");

let remotelyDisable = (obj) => (obj["disabled"] = true);

console.log(greenEnergy(spaceship));
console.log(remotelyDisable(spaceship));

console.log(spaceship);
