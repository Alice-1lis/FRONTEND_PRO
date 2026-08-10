import React from "react";
import "./App.css";

const emojisDefault = [
  { id: "grin", icon: "😀", count: 5 },
  { id: "smile", icon: "😊", count: 7 },
  { id: "cool", icon: "😎", count: 11 },
  { id: "star-eyes", icon: "🤩", count: 6 },
  { id: "heart-eyes", icon: "😍", count: 3 },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    const savedEmojis = localStorage.getItem("emojis");
    this.state = {
      emojis: savedEmojis ? JSON.parse(savedEmojis) : emojisDefault,
      showResults: false,
      winner: null,
    };
    this.handleVote = this.handleVote.bind(this);
    this.handleShowResults = this.handleShowResults.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }
  handleVote(id) {
    this.setState(
      (prevState) => ({
        emojis: prevState.emojis.map((emoji) =>
          emoji.id === id ? { ...emoji, count: emoji.count + 1 } : emoji,
        ),
      }),
        () => {
        localStorage.setItem("emojis", JSON.stringify(this.state.emojis));
      },
    );
  }
  handleShowResults() {
    this.setState((prevState) => ({
      showResults: true,
      winner: prevState.emojis.reduce((winner, emoji) =>
        emoji.count > winner.count ? emoji : winner,
      ),
    }));
  }
  handleClear() {
    localStorage.removeItem("emojis");
    this.setState({
      emojis: emojisDefault,
      showResults: false,
      winner: null,
    });
  }


  render() {
    const { emojis, showResults, winner } = this.state;
    return (
      <div className="app">
        <h1 className="title">Голосування за найкращий смайлик</h1>
        <div className="emoji-list">
          {emojis.map((emoji) => (
            <button
              key={emoji.id}
              className="emoji-item"
              onClick={() => this.handleVote(emoji.id)}>
              <span className="emoji-icon">{emoji.icon}</span>
              <span className="emoji-count">{emoji.count}</span>
            </button>
          ))}
        </div>
        <button className="vote-button" onClick={this.handleShowResults}>Показати результат?</button>
        <button className="clear-button" onClick={this.handleClear}>Видалити результат</button>
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
}

export default App;
