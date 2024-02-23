// catch() with promise
// The catch() method provides a callback. The callback is a function to run when a promise is rejected.

// prom is a promise which randomly either resolves with 'Yay!' or rejects with 'Ohhh noooo!'.
// We pass a success handler to .then() and a failure handler to .catch().

// prom.then((resolvedValue) => {
/**If the promise resolves, .then()‘s success handler will be invoked with 'Yay!'. */
//     console.log(resolvedValue);
// }).catch((rejectionReason) => {
//     console.log(rejectionReason);
// });

// Exercise
// then: when a promise is successful, you can 'then' use the resolved data
// catch: when a promise fails, you catch the error, and do something with the error information
// finally: when a promise settles (fails or passes), you can finally do something

const { checkInventory } = require("./library.js");

const order = [
    ["sunglasses", 1],
    ["bags", 2],
];

const handleSuccess = (resolvedValue) => {
    console.log(resolvedValue);
};

const handleFailure = (rejectReason) => {
    console.log(rejectReason);
};

// Write your code below:
// Refactor functionality
checkInventory(order) /** this function will return a promise. */
    .then(handleSuccess)
    .catch(handleFailure);
