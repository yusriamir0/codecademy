//  setTimeout()
// After two seconds, delayedHello() is added to a line of code waiting to be run. Before it can run, any synchronous code from the program will run. Next, any code in front of it in the line will run. This means it might be more than two seconds before delayedHello() is actually executed.
const delayedHello = () => {
    console.log("Hi! This is an asynchronous greeting!");
};

setTimeout(delayedHello, 2000 /* 2000 equals to at least 2 seconds */);

// Promise and setTimeout()

const returnPromiseFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I resolved!");
        }, 1000);
    });
};

const prom = returnPromiseFunction();

console.log(prom);

// Exercise

// Keep the line above as the first line of code
// Write your code here:
const usingSTO = () => {
    console.log("This is the custom string app.js.");
};

setTimeout(usingSTO, 3000);
// Keep the line below as the last line of code:
console.log("This is the last line of code in app.js.");
