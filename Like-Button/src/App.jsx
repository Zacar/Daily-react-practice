import "./App.css";
import { HeartIcon } from "@sanity/icons/Heart";
import { SpinnerIcon } from "@sanity/icons/Spinner";
import { useState } from "react";

function App() {
  const [liked, setLiked] = useState(false);
  const [isFetching, SetIsFetching] = useState(false);
  const [error, setError] = useState(null);

  // https://www.greatfrontend.com/api/questions/like-button
  const handleLikeUnLike = async () => {
    SetIsFetching(true);
    setError(null);
    try {
      const response = await fetch(
        "https://questions.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: liked ? "unlike" : "like",
          }),
        }
      );
      if (response.status >= 200 && response.status < 300) {
        setLiked(!liked);
      } else {
        const res = await response.json();
        setError(res.message);
        return;
      }
    } finally {
      SetIsFetching(false);
    }
  };
  return (
    <div>
      <button
        disabled={isFetching}
        className={`LikeBtn ${liked ? "liked" : ""}`}
        onClick={handleLikeUnLike}
      >
        {isFetching ? <SpinnerIcon /> : <HeartIcon />}{" "}
        {liked ? "Liked" : "Like"}
      </button>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default App;
