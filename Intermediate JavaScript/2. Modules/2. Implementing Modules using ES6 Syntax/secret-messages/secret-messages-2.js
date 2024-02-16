// Here is a reference snippet of code from module\dom-functions.js:
// ES6 Import Syntax

/* secret-messages-2.js */
import {
    toggleHiddenElement,
    changeToFunkyColor,
} from "../module/dom-functions.js";

const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

buttonElement.addEventListener("click", () => {
    toggleHiddenElement(pElement);
    changeToFunkyColor(buttonElement);
});
