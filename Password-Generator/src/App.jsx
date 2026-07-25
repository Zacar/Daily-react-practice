import { useState } from "react";
import "./App.css";
import usePasswordGenerator from "./hooks/use-password-generator";
import PasswordStrengthIndicator from "./components/StrengthChecker";

function App() {
  const [length, setLength] = useState(4);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase Letters", state: false },
    { title: "Include LowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);

  const [copied, setCopied] = useState(false);

  const handleCheckboxChange = (i) => {
    const updatedCheckboxData = [...checkboxData];
    updatedCheckboxData[i].state = !updatedCheckboxData[i].state;
    setCheckboxData(updatedCheckboxData);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  return (
    <>
      <div className="container">
        {password && (
          <div className="header">
            <div className="title">{password}</div>
            <button
              className="copyBtn"
              onClick={() => {
                handleCopy();
              }}
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        )}
        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label htmlFor="">{length}</label>
          </span>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, index) => {
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  onChange={() => {
                    handleCheckboxChange(index);
                  }}
                  checked={checkbox.state}
                />
                <label htmlFor="">{checkbox.title}</label>
              </div>
            );
          })}
        </div>

        <PasswordStrengthIndicator password={password} />

        {errorMessage && <div className="errorMessage">{errorMessage}</div>}

        <button
          className="generateBtn"
          onClick={() => {
            generatePassword(checkboxData, length);
          }}
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
