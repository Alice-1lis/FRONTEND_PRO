import { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import SwapiList from "./components/swapiList";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import "./App.css";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <main className="main">
          <section>
            <h2>Star Wars персонажі</h2>
            <SwapiList />
          </section>
          <section>
            <h2>Мої задачі</h2>
            <TodoForm />
            <TodoList />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
