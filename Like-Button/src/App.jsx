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
      console.log(await response.json());
    } finally {
      SetIsFetching(false);
    }

    setLiked(!liked);
  };
  return (
    <div>
      <button
        className={`LikeBtn ${liked ? "liked" : ""}`}
        onClick={handleLikeUnLike}
      >
        <HeartIcon /> {liked ? "Liked" : "Like"}
      </button>
    </div>
  );
}

export default App;
