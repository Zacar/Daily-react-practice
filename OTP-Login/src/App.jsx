import { useState } from "react";
import PhoneOtpForm from "./components/phone-login";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>Login with Phone</h1>
      <PhoneOtpForm />
    </div>
  );
}

export default App;
