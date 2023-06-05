import { useContext, useEffect, useState } from "react";
import Ideaposts from "./Ideaposts";
import { AuthContext, getCurrentUserInfo } from "./Auth";
import Header from "./Header";
import Nav from "./Navbar";

function Ideahub() {
  const [posts, setPosts] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const [tags, setTags] = useState([]);

  useEffect(() => {
    fetch("/posts?tag=idea")
      .then((r) => r.json())
      .then(setPosts);
  }, []);

  useEffect(() => {
    getCurrentUserInfo().then((data) => {
      setUserInfo(data);
    });
  }, []);

  useEffect(() => {
    fetch("/tags")
      .then((r) => r.json())
      .then(setTags);
  }, []);

  return (
    <div>
      <Header userInfo={userInfo} tags={tags} />
      <Nav userInfo={userInfo} />
      <div className="posts">
        <Ideaposts posts={posts} tags={tags} />
      </div>
    </div>
  );
}

export default Ideahub;