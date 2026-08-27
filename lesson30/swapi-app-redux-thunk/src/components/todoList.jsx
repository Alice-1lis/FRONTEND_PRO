import { useDispatch, useSelector } from "react-redux";
import { toggleTodo } from "../store/todo";

const TodoList = () => {
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();
  return (
    <ol className="todo-list">
      {items.map((item) => (
        <li
          key={item.id}
          onClick={() => dispatch(toggleTodo(item.id))}
          style={{ textDecoration: item.done ? "line-through" : "none" }}
        >
          {item.text}
        </li>
      ))}
    </ol>
  );
};

export default TodoList;
