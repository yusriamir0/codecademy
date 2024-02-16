// Implementing Modules in the Browser

/* secret-messages.js */
const buttonElement = document.getElementById("secret-button");
const pElement = document.getElementById("secret-p");

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display === "none") {
        domElement.style.display = "block";
    } else {
        domElement.style.display = "none";
    }
};

buttonElement.addEventListener("click", () => {
    toggleHiddenElement(pElement);
});
