let counter = 87;
let interval;

const display = document.querySelector("span");
const button = document.querySelector("button");

button.addEventListener("click", handleButtonClick);
function handleButtonClick() {
    if (!interval) {
        interval = setInterval(decreaseCounter, 1000);
    }
}
function decreaseCounter() {
    if (counter > 0) {
        counter--;
        let minutes = Math.floor(counter / 60);
        let seconds = counter % 60;
        display.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
    if (counter <= 0) {
        clearInterval(interval);
        interval = null;
        console.log("Таймер зупинився");
        alert("Таймер зупинився");
    }
}