// LESSON => module.exports

function celsiusToFahrenheit(celsius) {
    return celsius * (9 / 5) + 32;
}
module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

// Alternative approach for exporting a function from a module
module.exports.fahrenheitToCelsius = function (fahrenheit) {
    return (fahrenheit - 32) * (5 / 9);
};
