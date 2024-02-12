// LESSON => require()

/* water-limits.js */

// When you use require(), the entire module.exports object is returned and stored in the variable converters
const converters = require("./converters.js");

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`The freezing point of water in Fahrenheit is ${freezingPointF}`);
console.log(`The boiling point of water in Fahrenheit is ${boilingPointF}`);

// Execute this file in terminal => node water-limits-require.js
