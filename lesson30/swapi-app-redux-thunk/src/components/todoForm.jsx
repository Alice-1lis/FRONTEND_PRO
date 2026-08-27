import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todo";

const TodoForm = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Нова задача..."
      />
      <button type="submit">Додати</button>
    </form>
  );
};

export default TodoForm;