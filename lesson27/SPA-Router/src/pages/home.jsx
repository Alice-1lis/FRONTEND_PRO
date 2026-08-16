import { useState, useEffect } from "react";

const STORAGE_KEY = "todos";

function Home() {
  const [todos, setTodos] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  });
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  function handleSubmit(event) {
    event.preventDefault();
    const value = inputValue.trim();
    if (!value) return;
    const newTodo = {
      _id: crypto.randomUUID(),
      text: value,
      checked: false,
    };
    setTodos((prev) => [...prev, newTodo]);
    setInputValue("");
  }
  function handleDelete(id) {
    setTodos((prev) => prev.filter((t) => t._id !== id));
  }
  function handleToggle(id, checked) {
    setTodos((prev) => prev.map((t) => (t._id === id ? { ...t, checked } : t)));
  }

  return (
    <>
      <section id="center">
        <div className="container">
          <h1>Ваші замітки на сьогодні</h1>
          <form className="form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="value"
              required
              className="form__input"
              placeholder="new text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit" className="form__btn">
              Додати
            </button>
          </form>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo._id}
                className={
                  todo.checked ? "todo-item todo-item--checked" : "todo-item"
                }
              >
                <input
                  aria-label="checkbox"
                  type="checkbox"
                  checked={todo.checked}
                  onChange={(e) => handleToggle(todo._id, e.target.checked)}
                />
                <span className="todo-item__description">{todo.text}</span>
                <button
                  type="button"
                  className="todo-item__delete"
                  onClick={() => handleDelete(todo._id)}
                >
                  Видалити
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
