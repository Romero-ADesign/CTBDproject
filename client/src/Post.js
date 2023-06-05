import React from "react";
import { Link } from "react-router-dom";

function Post({ post }) {


    return (
        <div className="postImages">
            <Link to={`/post/${post.id}`}>
            <div class="post">
            <img src={post.image} alt="Project"/>
            <h2>{post.post_name}</h2>
            </div>
            </Link>
        </div>
    )
}

export default Post;