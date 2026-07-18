import { useState } from "react";
import Notes from "./components/notes";
import "./App.css";

function App() {
  const [notes, setNotes] = useState([
    { id: 1, text: "Chekc the description" },
    { id: 2, text: "i am sakar manandhar" },
  ]);

  return (
    <div className="App">
      <Notes notes={notes} setNotes={setNotes}></Notes>
    </div>
  );
}

export default App;
