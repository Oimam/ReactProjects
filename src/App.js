import { useState } from "react";
import "./App.css";

function Counter(steps) {
  const [counter, setcounter] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + counter);
  return (
    <div>
      <div>
        <button onClick={() => setcounter((c) => c - steps.steps)}>-</button>
        <span style={{ paddingLeft: "15px" }}>
          <input
            type="text"
            value={counter}
            onChange={(e) => setcounter(Number(e.target.value))}
          ></input>
        </span>
        <span style={{ paddingLeft: "15px" }}></span>
        <button onClick={() => setcounter((c) => c + steps.steps)}>+</button>
      </div>
      <span>
        <p>
          {counter === 0
            ? "Today is "
            : counter > 0
            ? `${counter} days from today is `
            : `${Math.abs(counter)}  days ago was `}
        </p>
        <span>{date.toDateString()}</span>
      </span>
    </div>
  );
}
function Steps() {
  const [step, setstep] = useState(1);
  return (
    <div>
      <div>
        <span style={{ paddingLeft: "40px" }}></span>
        <input
          type="range"
          min={1}
          max={10}
          value={step}
          onChange={(e) => setstep(Number(e.target.value))}
        ></input>
        <span style={{ paddingLeft: "20px" }}>Steps:{step}</span>
        {/* <button onClick={() => setstep((s) => s - 1)}>-</button>
        <span style={{ paddingLeft: "20px" }}>Steps:{step}</span>
        <span style={{ paddingLeft: "20px" }}></span>
        <button onClick={() => setstep((s) => s + 1)}>+</button> */}
      </div>
      <div>
        <Counter steps={step} />
      </div>
      {step !== 1 && (
        <div>
          <button onClick={(e) => setstep(1)}>RESET</button>
        </div>
      )}
    </div>
  );
}
// function HandleReset() {
//   setcounter(0);
//   setstep(1);
// }

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Date Counter</h1>
        <Steps />
      </header>
    </div>
  );
}

export default App;
