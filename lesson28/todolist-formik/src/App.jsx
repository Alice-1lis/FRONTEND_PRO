import { useState } from "react";
import "./App.css";
import TodolistForm from "./todolist-form";
import TodoItem from "../src/components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, { id: Date.now(), text, done: false }]);
  };
  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  };
  const removeTodo = (id) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className="app">
        <h1>Список справ</h1>
        <TodolistForm onAdd={addTodo} />
        <ul>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onRemove={removeTodo}
            />
          ))}
        </ul>
      </div>
    </>
  );
}
