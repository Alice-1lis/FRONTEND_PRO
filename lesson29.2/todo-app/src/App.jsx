import { useState } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "./store/todo";
import Todolist from "./components/todolist";

function App() {
  const [text, setText] = useState("");
  const todos = useSelector((state) => state.todos.todos || []);
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  return (
    <>
      <div>
        <h1>Todo</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Добавить новую задачу..."
            />
            <button type="submit">Добавить</button>
          </form>
          <h2>Todos</h2>
          <Todolist todos={todos} />
        </div>
        <footer>
          <span>Всего элементов: {todos.length}</span>
        </footer>
      </div>
    </>
  );
}

export default App;
