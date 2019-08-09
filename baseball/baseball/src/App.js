import React, { useState } from 'react';
import './App.css';
import Display from './Display.js';
import Controls from './Controls';

function App() {
  const [strikes, setStrikes] = useState(0);
  const [balls, setBalls] = useState(0);


  const scoreStrike = () => {
    if (strikes === 2) {
      setStrikes(0);
      setBalls(0);
    } else {
      setStrikes(strikes+1);
    }
  };
  const scoreBall = () => {
    if (balls === 3) {
      setStrikes(0);
      setBalls(0);
    } else {
      setBalls(balls+1);
    }
  };
  const scoreFoul = () => {
    if (strikes !== 2) {
      setStrikes(strikes+1);
    }
  };
  const scoreHit = () => {
    setStrikes(0);
    setBalls(0);
  };
  return (
    <div className="App">
      <Display strikes={strikes} balls={balls} />
      <Controls strike={scoreStrike}
                ball={scoreBall}
                foul={scoreFoul}
                hit={scoreHit} />
    </div>
  );
}

export default App;
