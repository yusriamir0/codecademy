const { checkInventory, processPayment, shipOrder } = require("./library.js");

 

const order = {
    items: [
        ["sunglasses", 1],
        ["bags", 2],
    ],
    giftcardBalance: 79.82,
};

// chaining promises together is called Composition

firstPromiseFunction()
    .then((firstResolveVal) => {
        return secondPromiseFunction(firstResolveVal);
    })
    .then((secondResolveVal) => {
        console.log(secondResolveVal);
    });

checkInventory(order)
    .then((resolvedValueArray) => {
        // Write the correct return statement here:
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        // Write the correct return statement here:
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
