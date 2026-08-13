import React, { useState } from "react";
import "./App.css";
import emojisDefault from "./emoji";

function App() {
  const [emojis, setEmojis] = useState(() => {
    const savedEmojis = localStorage.getItem("emojis");
    return savedEmojis ? JSON.parse(savedEmojis) : emojisDefault;
  });
  const [showResults, setShowResults] = useState(false);
  const [winner, setWinner] = useState(null);
  function handleVote(id) {
    setEmojis((prevEmojis) => {
      const updatedEmojis = prevEmojis.map((emoji) =>
        emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji,
      );
      localStorage.setItem("emojis", JSON.stringify(updatedEmojis));
      return updatedEmojis;
    });
  }
  function handleShowResults() {
    setShowResults(true);
    setWinner(
      emojis.reduce((winner, emoji) =>
        emoji.count > winner.count ? emoji : winner,
      ),
    );
  }
  function handleClear() {
    localStorage.removeItem("emojis");
    setEmojis(emojisDefault);
    setShowResults(false);
    setWinner(null);
  }

  return (
    <div className="app">
      <h1 className="title">Голосування за найкращий смайлик</h1>
      <div className="emoji-list">
        {emojis.map((emoji) => (
          <button
            key={emoji.id}
            className="emoji-item"
            onClick={() => handleVote(emoji.id)}>
            <span className="emoji-icon">{emoji.icon}</span>
            <span className="emoji-count">{emoji.count}</span>
          </button>
        ))}
      </div>
      <button className="vote-button" onClick={handleShowResults}>Показати результат</button>
      <button className="clear-button" onClick={handleClear}>Видалити результат</button>
      {showResults && (
        <div className="results">
          <h2 className="results-title">Результати голосування:</h2>
          <p className="winner-label">Переможець:</p>
          <div className="winner-icon">{winner.icon}</div>
          <p className="winner-votes">Кількість голосів: {winner.count}</p>
        </div>
      )}
    </div>
  );
}

export default App;
