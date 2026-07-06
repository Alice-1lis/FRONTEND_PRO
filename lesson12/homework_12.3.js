const todoList = document.querySelector('.block-todo');
const inputText = document.querySelector('.input-text');
const inputButton = document.querySelector('.input-button');
const existingButtons = document.querySelectorAll('.button-todo');

existingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        btn.closest('li').remove();
    });
});
inputButton.addEventListener('click', () => {
    const taskText = inputText.value.trim();
    if (taskText !== "") {
        const li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button type="button" class="button-todo item">Видалити</button>`;
        const deleteBtn = li.querySelector('.button-todo');
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
        todoList.appendChild(li);
        inputText.value = "";
    }
});








