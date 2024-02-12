// /* celsius-to-fahrenheit.js */
// function celsiusToFahrenheit(celsius) {
//     return celsius * (9 / 5) + 32;
// }

// const celsiusInput = process.argv[2]; // process.argv[2] means it will Get the 3rd input from the argument list which from these array of arguments that you code on terminal : ["node", "celsius-to-fahrenheit.js", "100"]
// const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

// console.log(
//     `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
// );
// // execute above file in terminal to see the result => node celsius-to-fahrenheit.js 100

// ==========================
// LESSON => Object Destructuring
// Using Object Destructuring to be more Selective With require()
/* celsius-to-fahrenheit.js */
const { celsiusToFahrenheit } = require("./converters.js");

const celsiusInput = process.argv[2];
const fahrenheitValue = celsiusToFahrenheit(celsiusInput);

console.log(
    `${celsiusInput} degrees Celsius = ${fahrenheitValue} degrees Fahrenheit`
);
