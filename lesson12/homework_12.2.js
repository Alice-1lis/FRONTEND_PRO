
/* lesson 12. Homework 12.2 */
const buttonsBox = document.querySelector('.buttons-box');

buttonsBox.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    console.log(`Натиснута кнопка: ${button.textContent}`);
   
  }
});
