export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={todo.done ? "done" : ""}>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
      />
      <span>{todo.text}</span>
      <button onClick={() => onRemove(todo.id)}>✕</button>
    </li>
  );
}
