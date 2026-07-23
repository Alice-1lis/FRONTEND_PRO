const form = document.querySelector('#js--form');
const input = document.querySelector('#js--form__input');
const todosWrapper = document.querySelector('#js--todos-wrapper');
const storageKey = 'todos';

const API_URL = 'http://localhost:3000/todos';

form.addEventListener('submit', async function (event) {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) {
        return;
    }
    const res = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text: value })
    });
    const todo = await res.json();

    addTodo(todo.text, todo.checked, todo._id);
    input.value = '';
    input.focus();
});
function addTodo(text, checked = false, id) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = id;
    if (checked) {
        li.classList.add('todo-item--checked');
    }
    li.innerHTML = `
        <input type="checkbox" ${checked ? 'checked' : ''}>
        <span class="todo-item__description">${escapeHtml(text)}</span>
        <button class="todo-item__delete">Видалити</button>
    `;
    todosWrapper.appendChild(li);
}
todosWrapper.addEventListener('click', async function (event) {
    const target = event.target;
    if (target.classList.contains('todo-item__delete')) {
        const li = target.closest('.todo-item');
        const id = li.dataset.id;
        await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
        li.remove();
        return;
    }
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const li = target.closest('.todo-item');
        const id = li.dataset.id;
        li.classList.toggle('todo-item--checked', target.checked);
        await fetch(`${API_URL}/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ checked: target.checked })
        });
    }
});
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

async function loadTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();
    todosWrapper.innerHTML = '';
    todos.forEach(function (todo) {
        addTodo(todo.text, todo.checked, todo._id);
    });
}
loadTodos();
