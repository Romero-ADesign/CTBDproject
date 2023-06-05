import React, { useState, useEffect } from "react";
import Post from "./Post";

function Ideaposts({ posts, tags }) {
  const [selectedTagId, setSelectedTagId] = useState(3);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedTagId) {
      fetch(`/posts/tag/${selectedTagId}`)
        .then((res) => res.json())
        .then((data) => {
          setFilteredPosts(data);
        })
        .catch((error) => {
          console.error("Error setting filtered posts:", error);
        });
    } else {
      setFilteredPosts(posts);
    }
  }, [selectedTagId]);

  return (
    <div>
      <h1>Ideas/Requests</h1>
      <div className="posts">
        {filteredPosts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Ideaposts;