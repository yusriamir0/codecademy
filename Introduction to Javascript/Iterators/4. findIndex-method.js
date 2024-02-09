const animals = [
    "hippo",
    "tiger",
    "lion",
    "seal",
    "cheetah",
    "monkey",
    "salamander",
    "elephant",
];

const foundAnimal = animals.findIndex((animals) => {
    return animals === "elephant";
});

console.log(foundAnimal);

const startsWithS = animals.findIndex((animals) => {
    return animals.startsWith("s");
});

console.log(startsWithS);
