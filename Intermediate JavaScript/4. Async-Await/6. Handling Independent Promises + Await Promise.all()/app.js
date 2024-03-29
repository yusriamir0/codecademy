// Lesson (Handling Independent Promises)
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
// let {
//     cookBeans,
//     steamBroccoli,
//     cookRice,
//     bakeChicken,
// } = require("./library.js");

// Write your code below:
// async function serveDinner() {
//     const vegetablePromise = steamBroccoli();
//     const starchPromise = cookRice();
//     const proteinPromise = bakeChicken();
//     const sidePromise = cookBeans();
//     console.log(
//         `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
//     );
// }
// serveDinner();
// //! Exercise ends

// Lesson (Await Promise.all())
async function asyncPromAll() {
    const resultArray = await Promise.all([
        asyncTask1(),
        asyncTask2(),
        asyncTask3(),
        asyncTask4(),
    ]);
    for (let i = 0; i < resultArray.length; i++) {
        console.log(resultArray[i]);
    }
}

// ! EXERCISE begins
let {
    cookBeans,
    steamBroccoli,
    cookRice,
    bakeChicken,
} = require("./library.js");

// Write your code below:
async function serveDinnerAgain() {
    const foodArray = await Promise.all([
        steamBroccoli(),
        cookRice(),
        bakeChicken(),
        cookBeans(),
    ]);
    let vegetable = foodArray[0];
    let starch = foodArray[1];
    let protein = foodArray[2];
    let side = foodArray[3];
    console.log(
        `Dinner is served. We're having ${vegetable}, ${starch}, ${protein}, and ${side}.`
    );
}

serveDinnerAgain();
