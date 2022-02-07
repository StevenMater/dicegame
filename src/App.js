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
      setResultA(0);
      setResultB(0);
    } else if (resultA < resultB) {
      setResults('Player B wins this round!');
      setScoreB(scoreB + 1);
      setResultA(0);
      setResultB(0);
    } else {
      setResults("It's a tie!");
      setResultA(0);
      setResultB(0);
    }
  };

  // Reset
  const reset = () => {
    setScoreA(0);
    setScoreB(0);
    // setResults('Game has been reset!');
  };

  // Winner
  useEffect(() => {
    if (scoreA === 11) {
      setResults('Player A wins the game!!! Congratulations');
      reset();
    } else if (scoreB === 11) {
      setResults('Player B wins the game!!! Congratulations');
      reset();
    }
  }, [scoreA, scoreB]);

  return (
    <div className="app">
      <h1>Score</h1>
      <div>Player A: {scoreA}</div>
      <div>Player B: {scoreB}</div>
      <br />
      <div className="card">
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
      <br />
      <div className="card">
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
      <p>Results: {results}</p>
      <button onClick={compareResults}>Compare Rolls</button>
      <br />
      <br />
      <button onClick={reset}>New Game</button>
    </div>
  );
}

export default App;
