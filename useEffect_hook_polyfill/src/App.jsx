import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      if (!response.ok) {
        throw new Error("Response no Ok");
      }
      const fetchedData = await response.json();
      setData(fetchedData);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="App">
        <h1>Sakar Manandhar</h1>
        <h2>67</h2>
        <ul>
          {data.map((post) => {
            return <li key={post.id}>{post.title}</li>;
          })}
        </ul>
      </div>
    </>
  );
}

export default App;
