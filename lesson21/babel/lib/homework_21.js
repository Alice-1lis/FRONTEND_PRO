$(function () {
  const $form = $('.js--form');
  const $input = $('.js--form__input');
  const $todosWrapper = $('.js--todos-wrapper');
  const storageKey = 'todos';
  const taskModal = new bootstrap.Modal(document.getElementById('taskModal'));
  $form.on('submit', function (event) {
    event.preventDefault();
    const value = $input.val().trim();
    if (!value) {
      return;
    }
    addTodo(value);
    saveTodos();
    $input.val('').focus();
  });
  function addTodo(text, checked = false) {
    const $li = $('<li class="todo-item"></li>');
    if (checked) {
      $li.addClass('todo-item--checked');
    }
    $li.html(`
            <input type="checkbox" ${checked ? 'checked' : ''}>
            <span class="todo-item__description">${escapeHtml(text)}</span>
            <button class="todo-item__delete">Видалити</button>
        `);
    $todosWrapper.append($li);
  }
  $todosWrapper.on('click', '.todo-item__delete', function () {
    $(this).closest('.todo-item').remove();
    saveTodos();
  });
  $todosWrapper.on('change', 'input[type="checkbox"]', function () {
    const $li = $(this).closest('.todo-item');
    $li.toggleClass('todo-item--checked', this.checked);
    saveTodos();
  });
  $todosWrapper.on('click', '.todo-item__description', function () {
    const taskText = $(this).text();
    $('#taskModalText').text(taskText);
    taskModal.show();
  });
  function escapeHtml(str) {
    return $('<div>').text(str).html();
  }
  function saveTodos() {
    const todos = [];
    $todosWrapper.find('.todo-item').each(function () {
      const $li = $(this);
      const text = $li.find('.todo-item__description').text();
      const checked = $li.find('input[type="checkbox"]').is(':checked');
      todos.push({
        text,
        checked
      });
    });
    localStorage.setItem(storageKey, JSON.stringify(todos));
  }
  function loadTodos() {
    const raw = localStorage.getItem(storageKey);
    if (!raw) {
      $todosWrapper.find('.todo-item').each(function () {
        const $li = $(this);
        if ($li.hasClass('todo-item--checked')) {
          $li.find('input[type="checkbox"]').prop('checked', true);
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
    $todosWrapper.empty();
    todos.forEach(function (todo) {
      addTodo(todo.text, todo.checked);
    });
  }
  loadTodos();
});