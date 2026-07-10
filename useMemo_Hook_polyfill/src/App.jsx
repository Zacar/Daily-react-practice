import "./App.css";

import { useState, useMemo } from "react";
import useCustomMemo from "./hooks/use-custom-memo";

function App() {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);
  function increase() {
    setCounter(counter + 1);
  }

  const squaredValue = () => {
    console.log("Expensive Caluclation....");
    return counter * counter;
  };

  const memoisedSquaredValue = useCustomMemo(squaredValue, [counter]);

  return (
    <div className="App">
      <h2>Counter : {counter}</h2>
      <h2>Squared Counter: {memoisedSquaredValue}</h2>
      <button onClick={increase}>Increment</button>
      <h2>Counter : {counter2}</h2>
      <button
        onClick={() => {
          setCounter2(counter2 - 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default App;
