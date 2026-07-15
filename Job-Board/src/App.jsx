import "./App.css";
import { useState } from "react";

const ITEMS_PER_PAGE = 6;
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0";
const EXAMPLE_RESPONSE = {
  by: "jamilbk",
  id: 35908337,
  score: 1,
  time: 1683838872,
  title: "Firezone (YC W22) is hiring Elixir and Rust engineers",
  type: "job",
  url: "https://www.ycombinator.com/companies/firezone/jobs",
};

function JobPosting({ url, title, by, time }) {
  const formattedTime = new Date(time * 1000).toLocaleString();
  return (
    <div className="post" role="listItem">
      <h2 className="post__title">
        <a
          className={url ? "" : "inactiveLink"}
          href={url}
          target="_blank"
          rel="noopener"
        >
          {title}
        </a>
      </h2>
      <span>
        By {by} . {formattedTime}
      </span>
    </div>
  );
}

function App() {
  const [items, setItems] = useState([EXAMPLE_RESPONSE, EXAMPLE_RESPONSE]);

  return (
    <div className="app">
      <h1>Hacker News Job Board</h1>
      {items.length < 1 ? (
        <p className="loading">loading...</p>
      ) : (
        <div>
          <div className="items" role="list">
            {items.map((item) => {
              return <JobPosting key={item.id} {...item} />;
            })}
          </div>
          <button>Load more jobs</button>
        </div>
      )}
    </div>
  );
}

export default App;
