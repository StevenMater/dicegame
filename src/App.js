import './App.css';
import { useState, useEffect } from 'react';

// Random # generator
const randomGenerator = () => {
  return Math.ceil(Math.random() * 6);
};

function App() {
  const [resultA, setResultA] = useState(0);
  const [resultB, setResultB] = useState(0);
  const [results, setResults] = useState('');
  const [scoreA, setScoreA] = useState(0);
  const [scoreB, setScoreB] = useState(0);

  const compareResults = () => {
    if (!resultA || !resultB) {
      return setResults('Both players have to roll!');
    }

    if (resultA > resultB) {
      setResults('Player A wins this round!');
      setScoreA(scoreA + 1);
      resetResults();
    } else if (resultA < resultB) {
      setResults('Player B wins this round!');
      setScoreB(scoreB + 1);
      resetResults();
    } else {
      setResults("It's a tie!");
      resetResults();
    }
  };

  // Reset
  const resetGame = () => {
    setScoreA(0);
    setScoreB(0);
    setResults('Game has been reset!');
  };

  const resetResults = () => {
    setResultA(0);
    setResultB(0);
  };

  // Winner
  useEffect(() => {
    if (scoreA === 11) {
      alert('Player A wins the game!!! Congratulations');
      resetGame();
    } else if (scoreB === 11) {
      alert('Player B wins the game!!! Congratulations');
      resetGame();
    }
  }, [scoreA, scoreB]);

  return (
    <div className="app">
      <h1>Dice Game</h1>
      <button onClick={resetGame}>New Game</button>
      <div className="card">
        <h3>Scoreboard</h3>
        <p>
          <b>Player A:</b> {scoreA}
        </p>
        <p>
          <b>Player B:</b> {scoreB}
        </p>
      </div>
      <div className="cardRollA">
        Player A<br />
        {resultA}
        <br />
        {!resultA ? (
          <button
            onClick={() => {
              setResultA(randomGenerator());
            }}
          >
            Roll
          </button>
        ) : (
          <button>Rolled</button>
        )}
      </div>
      <div className="card">
        <p>Results: {results}</p>
        <button onClick={compareResults}>Compare Rolls</button>
      </div>
      <div className="cardRollB">
        Player B<br />
        {resultB}
        <br />
        {!resultB ? (
          <button
            onClick={() => {
              setResultB(randomGenerator());
            }}
          >
            Roll
          </button>
        ) : (
          <button>Rolled</button>
        )}
      </div>
    </div>
  );
}

export default App;
