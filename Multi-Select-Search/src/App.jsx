import { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="user-search-container">
      <div className="user-search-input">
        {/* {pills} */}

        {/* inputfield with search suggestions */}
        <div>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            placeholder="Search for a User...."
          />
          {/* search suggestions */}
        </div>
      </div>
    </div>
  );
}

export default App;
