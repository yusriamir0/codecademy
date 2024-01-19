// The .forEach() Method
const groceries = ["brown sugar", "salt", "cranberries", "walnuts"];

groceries.forEach(function (groceryItem) {
    console.log("- " + groceryItem);
});

// Define a function beforehand to be used as the callback function
function printGrocery(element) {
    console.log(element);
}

groceries.forEach(printGrocery);

// Exercise ================================

const fruits = ["mango", "papaya", "pineapple", "apple"];

// Iterate over fruits below

fruits.forEach(function (fruitsItem) {
    console.log("I want to eat a " + fruitsItem);
});
