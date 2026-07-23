import "./App.css";

function App() {
  const checkboxData = [
    { title: "Include UppercaseLetters", state: false },
    { title: "Include LowerCase Letters", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ];
  return (
    <>
      <div className="container">
        <div className="header">
          <div className="title">kh6#hjafd$</div>
          <button className="copyBtn" onClick={() => {}}>
            Copy
          </button>
        </div>

        <div className="charlength">
          <span>
            <label>Character Length</label>
            <label htmlFor="">4</label>
          </span>
          <input type="range" min="4" max="20" />
        </div>
        <div className="checkboxes">
          {checkboxData.map((checkbox, i) => {
            return (
              <div key={i}>
                <input type="checkbox" checked={checkbox.state} />
                <label htmlFor="">{checkbox.title}</label>
              </div>
            );
          })}
        </div>

        <button className="generateBtn" onClick={() => {}}>
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App;
