import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const [addBy, setAddBy] = useState(0);
  const [showText, setShowText] = useState(false);

  const DoSomething = (num) => {
    setNumber((number) => number + num);
  };

  return (
    <div className="App">
      <div>
        {showText ? (
          <>
            <h1>You will add by {addBy}</h1>
            <h1>{number}</h1>
            <button onClick={() => DoSomething(addBy)}>Add</button>
          </>
        ) : (
          <>
            <h1>Enter a Number</h1>
            <input
              type="text"
              onChange={(e) => setAddBy(Number(e.target.value))}
            />
            <button onClick={() => (addBy > 0 ? setShowText(true) : "")}>
              OK
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
