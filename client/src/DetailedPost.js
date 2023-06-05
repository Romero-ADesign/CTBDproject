import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("/posts")
        .then((r) => r.json())
        .then(setPosts)
    }, []);

    useEffect(() => {
        const selectedPost = posts.find((post) => post.id === Number(id));
        setPost(selectedPost)
        console.log(post)
    }, [posts, id])

    if (!post) {
        return <div> </div>;
    }

    console.log(post)
    return (
        <div className="container">
          <img src={post.image} alt="Crochet project" />
          <div className="postDetails">
            <h2>{post.post_name}</h2>
            <p>{post.post_description}</p>
            <div className="difficulty">
              <span>Difficulty: {post.difficulty}</span>
            </div>
          </div>
        </div>
      );
}

export default PostDetails;