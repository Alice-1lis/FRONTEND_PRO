import { useState } from "react";
import HeroImg from "./assets/gamer2.jpg";
import HeroImg2 from "./assets/gamer1.jpg";
import Card from "./card";
import Header from "./header";
import "./App.css";

function Person1() {
  return (
    <div className="col">
      <Card />
    </div>
  );
}
function Person2() {
  return (
    <div className="col">
      <div className="card bg-secondary text-light h-100">
        <div className="card-body">
          <h3>gamer 2</h3>
          <h5 className="card-title text-warning">Tom Skywalker</h5>
          <p className="card-text">
            <strong>Рік народження:</strong> 19BBY
            <br />
            <strong>Колір волосся:</strong> blond
            <br />
            <strong>Колір очей:</strong> blue
            <br />
            <strong>Стать:</strong> male
          </p>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <h2>Welcome</h2>
      <div className="hero-container">
        <a href="https://vitejs.dev" target="_blank">
          <img src={HeroImg} alt="Hero" className="hero" />
        </a>

        <a href="https://vitejs.dev" target="_blank">
          <img src={HeroImg2} alt="Hero" className="hero" />
        </a>
      </div>
      <div className="container">
        <div className="row">
          <Person1 />
          <Person2 />
        </div>
      </div>
    </div>
  );
}
export default App;
