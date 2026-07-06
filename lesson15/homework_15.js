/*const form = document.querySelector('.js--form');
const input = document.querySelector('.js--form__input');
const todosWrapper = document.querySelector('.js--todos-wrapper');
const storageKey = 'todos';

form.addEventListener('submit', function (event) {
    event.preventDefault();
    const value = input.value.trim();
    if (!value) {
        return;
    }
    addTodo(value);
    saveTodos();
    input.value = '';
    input.focus();
});
function addTodo(text, checked = false) {
    const li = document.createElement('li');
    li.className = 'todo-item';
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
todosWrapper.addEventListener('click', function (event) {
    const target = event.target;
    if (target.classList.contains('todo-item__delete')) {
        const li = target.closest('.todo-item');
        li.remove();
        saveTodos();
        return;
    }
    if (target.tagName === 'INPUT' && target.type === 'checkbox') {
        const li = target.closest('.todo-item');
        li.classList.toggle('todo-item--checked', target.checked);
        saveTodos();
    }
});
function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

function saveTodos() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(function (li) {
        const span = li.querySelector('.todo-item__description');
        const checkbox = li.querySelector('input[type="checkbox"]');
        todos.push({
            text: span.textContent,
            checked: checkbox.checked
        });
    });
    localStorage.setItem(storageKey, JSON.stringify(todos));
}
function loadTodos() {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
        document.querySelectorAll('.todo-item').forEach(function (li) {
            const checkbox = li.querySelector('input[type="checkbox"]');
            if (li.classList.contains('todo-item--checked')) {
                checkbox.checked = true;
            }
        });
        return;
    }
    let todos;
    try {
        todos = JSON.parse(raw);
    } catch (error) {
        console.error('Не вдалося прочитати:', error);
        return;
    }
    todosWrapper.innerHTML = '';
    todos.forEach(function (todo) {
        addTodo(todo.text, todo.checked);
    });
};
loadTodos();
*/
