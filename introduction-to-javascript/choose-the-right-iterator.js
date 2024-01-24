const cities = [
    "Orlando",
    "Dubai",
    "Edinburgh",
    "Chennai",
    "Accra",
    "Denver",
    "Eskisehir",
    "Medellin",
    "Yokohama",
];

const nums = [1, 50, 75, 200, 350, 525, 1000];

//  Choose a method that will return undefined
cities.forEach((cities) => console.log("Have you visited " + cities + "?"));

// Choose a method that will return a new array
const longCities = cities.filter((city) => city.length > 7);
console.log(longCities);

// Choose a method that will return a single value
const word = cities.reduce((acc, currVal) => {
    return acc + currVal[0];
}, "C");

console.log(word);

// Choose a method that will return a new array
const smallerNums = nums.map((num) => num - 5);
console.log(smallerNums);
// Choose a method that will return a boolean value
nums.some((num) => num < 0);
