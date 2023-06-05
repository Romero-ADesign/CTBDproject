import { useContext, useEffect, useState } from "react";
import Posts from "./Posts";
import { AuthContext, getCurrentUserInfo } from "./Auth";
import Header from "./Header";
import Nav from "./Navbar";

function Home() {
    const [posts, setPosts] = useState([]);
    const [userInfo, setUserInfo] = useState(null);
    const [tags, setTags] = useState([]);
    
  
    useEffect(() => {
      fetch("/posts")
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
            <Posts posts={posts} tags={tags} />
        </div>
      </div>
    );
  }

export default Home;