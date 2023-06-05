import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Edit({ post, changePost}) {
    const [name, setName] = useState(post.name)
    const [description, setDescription] = useState(post.description)
    const [image, setImage] = useState(post.image)
    const [difficulty, setDifficulty] = useState(post.difficulty)
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = {
        post_name: name,
        post_description: description,
        image: image,
        difficulty: difficulty
      };
      fetch(`/posts/${post.id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        if (r.ok) {
            r.json().then((changedPost) => {
                changePost(changedPost)
            })
        }
      })
    };
  
    return (
      <div>
        <h1>Edit Post</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="post_name">Post Name:</label>
          <input
            type="text"
            id="post_name"
            name="post_name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor="post_description">Post Description:</label>
          <textarea
            id="post_description"
            name="post_description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          ></textarea>
          <label htmlFor="image">Image URL:</label>
          <input
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={(event) => setImage(event.target.value)}
          />
          <label htmlFor="difficulty">Difficulty (out of 5):</label>
          <input
            type="number"
            id="difficulty"
            name="difficulty"
            min="1"
            max="5"
            value={difficulty}
            onChange={(event) => setDifficulty(event.target.value)}
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
  
  export default Edit;