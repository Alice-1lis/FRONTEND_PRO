import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo, editTodo } from "../store/todo";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);
  const handleToggle = () => dispatch(toggleTodo(todo.id));
  const handleDelete = () => dispatch(deleteTodo(todo.id));
  const handleSave = () => {
    if (!text.trim()) return;
    dispatch(editTodo({ id: todo.id, text }));
    setIsEditing(false);
  };
  return (
    <li className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      {isEditing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={handleSave}>Зберегти</button>
        </>
      ) : (
        <span
          style={{ textDecoration: todo.completed ? "line-through" : "none" }}
        >
          {todo.text}
        </span>
      )}
      <button onClick={() => setIsEditing(!isEditing)}>Редагувати</button>
      <button onClick={handleDelete}>Видалити</button>
    </li>
  );
};

export default TodoItem;
