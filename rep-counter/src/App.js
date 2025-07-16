import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('repCount');
    return storedCount ? parseInt(storedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('repCount', count);
  }, [count]);

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  return (
    <div className="container">
      <h1>🏋️ Rep Counter</h1>
      <div className="counter">{count}</div>
      <div className="controls">
        <button onClick={decrement}>–</button>
        <button onClick={increment}>+</button>
      </div>
      <button className="reset" onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
