import React, { useState, useEffect } from "react";
import Post from "./Post";

function Posts({ posts, tags }) {
    const [selectedTagId, setSelectedTagId] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const [numFilteredPosts, setNumFilteredPosts] = useState(posts.length);
  
    useEffect(() => {
      setFilteredPosts(posts);
      setNumFilteredPosts(posts.length);
    }, [posts]);
  
    useEffect(() => {
      if (selectedTagId) {
        fetch(`/posts/tag/${selectedTagId}`)
          .then((res) => res.json())
          .then((data) => {
            setFilteredPosts(data);
            setNumFilteredPosts(data.length);
          })
          .catch((error) => {
            console.error("Error setting filtered posts:", error);
          });
      } else {
        setFilteredPosts(posts);
        setNumFilteredPosts(posts.length);
      }
    }, [selectedTagId, posts]);
  
    const handleTagClick = (tagId) => {
      if (selectedTagId === tagId) {
        setSelectedTagId(null);
      } else {
        setSelectedTagId(tagId);
      }
    };
  
    return (
      <div>
        <div className="tags">
          <h2>Filter by Tags</h2>
          <select onChange={(event) => handleTagClick(event.target.value)}>
          <option value="">All Tags</option>
          {tags.map((tag) => {
            if (tag.name !== "Idea") {
              return (
                <option key={tag.id} value={tag.id}>
                  {tag.name}
                </option>
              );
            } else {
              return null;
            }
          })}
        </select>
        </div>
        <h1>All Posts</h1>
        <div className={`posts ${numFilteredPosts > 2 ? "justify-start" : "justify-between"}`}>
          {filteredPosts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </div>
      </div>
    );
  }

export default Posts;