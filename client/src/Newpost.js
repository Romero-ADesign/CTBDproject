import React, { useState, useEffect, useContext } from "react";
import { AuthContext, getCurrentUserInfo } from "./Auth";

function Newpost() {
  const { access_token } = useContext(AuthContext);
  const [postName, setPostName] = useState("");
  const [postDescription, setPostDescription] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [tags, setTags] = useState([]);
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  useEffect(() => {
    fetch('/tags')
      .then((r) => r.json())
      .then(setAllTags);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const postData = {
      post_name: postName,
      post_description: postDescription,
      image: imageURL,
      difficulty: difficulty
    };
    getCurrentUserInfo().then((userInfo) => {
      fetch(`/users/${userInfo.id}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${access_token}`
        },
        body: JSON.stringify(postData)
      })
        .then((r) => r.json())
        .then((newPost) => {
            const postTagData = {
                post_id: newPost.id,
                tag_id: selectedTag
              };
          fetch(`/post_tags`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${access_token}`
            },
            body: JSON.stringify({ post_tag: postTagData })
          })
            .then(() => {
              // Refresh the list of posts and the list of tags here
              window.location.replace('/home');
            })
            .catch((error) => {
              console.error("Error creating post tags:", error);
            });
        })
        .catch((error) => {
          console.error("Error creating post:", error);
        });
    });
  };

  return (
    <div className="formParent">
        <h1>Create a project</h1>
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="postName">Name:</label>
      <input type="text" id="postName" value={postName} onChange={(e) => setPostName(e.target.value)} />
      <label htmlFor="postDescription">Description:</label>
      <input type="text" id="postDescription" value={postDescription} onChange={(e) => setPostDescription(e.target.value)} />
      <label htmlFor="imageURL">Image URL:</label>
      <input type="text" id="imageURL" value={imageURL} onChange={(e) => setImageURL(e.target.value)} />
      <label htmlFor="difficulty">Difficulty:</label>
      <input type="number" id="difficulty" min="1" max="5" value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
      <label htmlFor="tags">Tags:</label>
      <select value={selectedTag} onChange={(e) => setSelectedTag(e.target.value)}>
            {allTags.map((tag) => (
        <option key={tag.id} value={tag.id}>{tag.name}</option>
        ))}
        </select>
      <button type="submit">Create Post</button>
    </form>
    </div>
  );
}

export default Newpost