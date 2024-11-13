import one from "./images/clock.png"
import { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0);
    const [history, setHistory] = useState([]); 
  
    
    const increase = () => {
      const newCounter = counter + 1;
      setCounter(newCounter);
      setHistory([...history, newCounter]);
    };
  
  
    const decrease = () => {
      if (counter === 0) {
        alert("Counter cannot go below zero!");
        return;
      }
      const newCounter = counter - 1;
      setCounter(newCounter);
      setHistory([...history, newCounter]);
    };
  
    
    const reset = () => {
      setCounter(0);
      setHistory([]);
    };
  
    return (
      <div className="app">
        <h1>Counter App</h1>
        <div className="counter-value">
          <strong>{counter}</strong>
        </div>
        <div className="buttons">
          <button onClick={increase}>+</button>
          <button onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
        </div>
  
      
        <div className="history">
          <h2 style={{color:"white"}}><img src={one} alt='his'></img>History</h2>
          <div className="history-list">
            {history.length === 0 ? (
              <p>No history yet.</p>
            ) : (
              <ul>
                {history.map((value, index) => (
                  <li key={index}> {value}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
export default Counter  