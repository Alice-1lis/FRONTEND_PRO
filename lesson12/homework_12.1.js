/* lesson 12. Homework 12.1 */


const btnUrlInput = document.querySelector(".btn-input");
const btnGo = document.querySelector(".btn-go");

let userUrl = "";
let savedUrl = "";

btnUrlInput.addEventListener('click', () => {
    const url = prompt("Введіть адресу посилання:");

    if (url) {
        savedUrl = url.startsWith('http') ? url : `https://${url}`;
        prompt("Посилання збережено:", savedUrl);
    }
});

btnGo.addEventListener('click', () => {
    if (savedUrl) {
        window.location.href = savedUrl;
    }
    else {
        alert("Будь ласка, спочатку введіть посилання.");
    }

});

/* lesson 12. Homework 12.1 end */