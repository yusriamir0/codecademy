// Mistake 1: Nesting promises instead of chaining them.

returnsFirstPromise().then((firstResolveVal) => {
    return returnsSecondValue(firstResolveVal).then((secondResolveVal) => {
        console.log(secondResolveVal);
    });
});

// Mistake 2: Forgetting to return a promise.

returnsFirstPromise()
    .then((firstResolveVal) => {
        returnsSecondValue(firstResolveVal);
    })
    .then((someVal) => {
        console.log(someVal);
    });

// two common mistakes: nesting and forgetting to return properly.
checkInventory(order).then((resolvedValueArray) => {
    processPayment(resolvedValueArray).then((resolvedValueArray) => {
        shipOrder(resolvedValueArray).then((successMessage) => {
            console.log(successMessage);
        });
    });
});

// Best Practice

checkInventory(order)
    .then((resolvedValueArray) => {
        return processPayment(resolvedValueArray);
    })
    .then((resolvedValueArray) => {
        return shipOrder(resolvedValueArray);
    })
    .then((successMessage) => {
        console.log(successMessage);
    });
