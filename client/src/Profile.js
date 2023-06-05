import React, { useState, useEffect } from "react";
import { getCurrentUserInfo } from "./Auth";
import { Link } from "react-router-dom";
import Edit from "./Edit";

function Profile() {
  const [userInfo, setUserInfo] = useState(null);
  const [userPosts, setUserPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null)

  useEffect(() => {
    getCurrentUserInfo().then((data) => {
      setUserInfo(data);

      fetch(`/users/${data.id}/user_posts`, {
        headers: {
          Authorization: `Bearer ${data.access_token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setUserPosts(data);
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error);
        });
    });
  }, []);

  useEffect(() => {
    fetch("/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleEditPost = (id) => {
    setUserPosts(
      userPosts.map((userPost) =>
        userPost.id === id ? { ...userPost, isEditing: true } : { ...userPost, isEditing: false }
      )
    );
    setEditingPost(id);
  };

  const handleDeletePost = (userPostId) => {
        fetch(`/posts/${userPostId}`, {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${userInfo.access_token}`,
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            const updatedUserPosts = userPosts.filter((post) => post.id !== userPostId);
            setUserPosts(updatedUserPosts);
          })
          .catch((error) => {
            console.error("Error deleting user post:", error);
          });
  };


  useEffect(() => {
    const postIds = userPosts.map((post) => post.id);
    const updatedPosts = posts.filter((post) => postIds.includes(post.id));
    setPosts(updatedPosts);
  }, []);

  function changePost(changedPost) {
    const filteredPost = userPosts.filter((post) => post.id !== changedPost.id)
    setUserPosts([...filteredPost,  changedPost])
  }

  return (
    <div className="profileDetails">
        <div className="user-details">
      <img
        className="profile-picture-profilepage"
        src={userInfo?.profile_picture_url}
        alt={userInfo?.name}
      />
      <h1>{userInfo ? `${userInfo.name}'s Profile` : "Loading..."}</h1>
      <Link to={"/"}>Logout</Link>
      </div>
      <div className="profilePosts">
        <h1>User Projects</h1>
      <ul>
        {userPosts.map((userPost) => (
          <li key={userPost.id}>
            {userPost.isEditing ? (
              <Edit
                post={userPost}
                changePost={changePost}
              />
            ) : (
              <div>
                <img src={userPost.image} alt={userPost.name} />
                <p>{userPost.post_name}</p>
                <div>
                  <button className="edit" onClick={() => handleEditPost(userPost.id)}>
                    Edit
                  </button>
                  <button className="delete" onClick={() => handleDeletePost(userPost.id)}>
                    Delete
                  </button>
                  <Link to={`/post/${userPost.id}`}>
                    View Details
                  </Link>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

  export default Profile