// Example

let prom = new Promise((resolve, reject) => {
    let num = Math.random();
    if (num < 0.5) {
        resolve("Yay!");
    } else {
        reject("Ohhh noooo!");
    }
});

const handleBerjaya = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleGagal = (rejectionReason) => {
    console.log(rejectionReason);
};

// Promise.then() takes two arguments, a callback for success and another for failure.
prom.then(handleBerjaya, handleGagal);

// Exercise
const { checkInventory } = require("./library.js");
const order = [
    ["sunglasses", 1],
    ["bags", 2],
];

// Write your code below:

const handleSuccess = (resolve) => {
    console.log(resolve);
};

const handleFailure = (reject) => {
    console.log(reject);
};
checkInventory(order).then(handleSuccess, handleFailure);
