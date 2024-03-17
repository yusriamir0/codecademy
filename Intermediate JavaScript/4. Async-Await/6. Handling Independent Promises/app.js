// Lesson
async function waiting() {
    const firstValue = await firstAsyncThing(); //! await akan halt execution of the async
    const secondValue = await secondAsyncThing(); //! await akan halt execution of the async
    console.log(firstValue, secondValue);
}

async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}

// ! Exercise begins
let {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken,
} = require("./library.js");

// Write your code below:
async function serveDinner() {
    const vegetablePromise = steamBroccoli();
    const starchPromise = cookRice();
    const proteinPromise = bakeChicken();
    const sidePromise = cookBeans();
    console.log(
        `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
    );
}
//! Exercise ends
serveDinner();
