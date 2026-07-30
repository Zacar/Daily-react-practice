import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  //https://dummyjson.com/users/search?q=John

  useEffect(() => {
    const fetchUsers = () => {
      if (searchTerm.trim() === "") {
        setSuggestions([]);
        return;
      }

      fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
        .then((res) => res.json())
        .then((data) => {
          setSuggestions(data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchUsers();
  }, [searchTerm]);

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
          <ul className="suggestions-list">
            {suggestions?.users?.map((user, index) => {
              return (
                <li key={user.email}>
                  <img
                    src={user.image}
                    alt={`${user.firstName} ${user.lastName}`}
                  />
                  <span>
                    {user.firstName} {user.lastName}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
