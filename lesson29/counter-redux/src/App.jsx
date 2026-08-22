import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/counter";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <p>
          Value: <span>{count}</span>
        </p>
        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            +
          </button>
          <button
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
