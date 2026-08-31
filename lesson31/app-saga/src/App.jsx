import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <h1>TODO-LIST</h1>
      <TodoForm />
      <TodoList />
      <Footer />
    </div>
  );
};

export default App;
