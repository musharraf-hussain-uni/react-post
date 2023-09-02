import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import ThemeToggle from "./themeToggle/Theme";

// profileImg
import profile1 from "./profile.png";
import profile2 from "./profile1.png";
import contentImg1 from "./contentimg1.webp";
import contentImg2 from "./contentimg2.webp";

// postImg

function Post({ userName, postTime, content, profileImg, contentImg }) {
  const [liked, setLiked] = useState(false);

  const handleLikeClick = () => {
    setLiked(!liked);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={profileImg} alt="" className="prImg" />
        {/* Use profile1 as a variable */}
        <div className="post-info">
          <p className="user-name">{userName}</p>
          <p className="post-time">{postTime}</p>
        </div>
      </div>
      <p className="post-content">{content}</p>
      <img src={contentImg} alt="" className="cnImg" />
      <div className="post-actions">
        <button
          className={`like-button ${liked ? "liked" : ""}`}
          onClick={handleLikeClick}
        >
          {liked ? "Liked" : "Like"}
        </button>
        <button className="comment-button">Comment</button>
        <button className="share-button">Share</button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Post
        userName="Musharraf Hussain"
        postTime="14-August-2023 2 hours ago"
        profileImg={profile1}
        content="In the face of adversity, remember that your strength is limitless. Challenges may test your resolve, but they also reveal your true potential. Embrace each day as an opportunity to grow, learn, and inch closer to your aspirations. With unwavering determination, you'll pave your own path to success."
        contentImg={contentImg1}
      />
      <br />
      <Post
        userName="M. Arham Khan"
        postTime="19-June-2021 24 hours ago"
        profileImg={profile2}
        content="React.js, a powerful JavaScript library, has revolutionized web development. Its component-based architecture simplifies UI creation, enhancing reusability and maintainability. With a thriving community and extensive ecosystem, React empowers developers to build dynamic, interactive web applications efficiently. Whether you're a beginner or an experienced coder, React.js is a versatile tool that continues to shape the future of web development."
        contentImg={contentImg2}
      />
      <div>
        <ThemeToggle />
      </div>
    </div>
  );
}

const root = createRoot(document.querySelector("#root"));
root.render(<App />);
