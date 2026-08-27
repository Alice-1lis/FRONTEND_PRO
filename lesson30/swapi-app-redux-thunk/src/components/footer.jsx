import { useDispatch } from "react-redux";
import { clearTodos } from "../store/todo";

const Footer = () => {
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearTodos());
  };
  return (
    <footer className="footer">
      <button className="clear-btn" onClick={handleClear}>
        Очистити
      </button>
    </footer>
  );
};

export default Footer;
