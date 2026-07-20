import { useState } from "react";

import "./App.css";

function App() {
  const [cost, setCost] = useState(0);
  const [interest, setInterest] = useState(10);
  const [fee, setFee] = useState(1);
  const [downPayment, setDownPayment] = useState(0);
  const [tenure, setTenure] = useState(12);
  const [emi, setEmi] = useState(0);

  const updateEMI = () => {};
  const updateDownPayment = () => {};

  return (
    <div className="App">
      <span className="title" style={{ fontSize: 30, marginTop: 10 }}>
        EMI Calculator
      </span>

      <span className="title">Total Cost of Asset</span>
      <input
        type="number"
        value={cost}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Total Cost of Assets"
      />
      <span className="title">Interest Rate (in %)</span>
      <input
        type="number"
        value={interest}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Interest Rate (in %)"
      />
      <span className="title">Processing Fee (in %)</span>
      <input
        type="number"
        value={fee}
        onChange={(e) => setCost(e.target.value)}
        placeholder="Processing Fee (in %)"
      />

      <span className="title">Down Payment</span>
      <input
        type="range"
        min={0}
        max={cost}
        className="slider"
        value={downPayment}
        onChange={updateEMI}
      />

      <span className="title">Loan per Month</span>

      <input
        type="range"
        min={0}
        max={cost}
        className="slider"
        value={emi}
        onChange={updateDownPayment}
      />

      <span className="title">Tenure</span>
    </div>
  );
}

export default App;
