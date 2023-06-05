import { Link } from "react-router-dom";
import { useState } from "react";

function Header({ userInfo }) {

  return (
    <div className="header">
      <nav>
        <div className="logo">
          <h1>CrochetTBD</h1>
        </div>
        <div className="user-info">
          <Link to={userInfo?.id ? `/profile` : "/"}>
            <div className="profile-picture-container">
              <img
                className="profile-picture"
                src={userInfo?.profile_picture_url}
                alt="profile picture"
              />
            </div>
            <div className="username">{userInfo?.name || "Not logged in"}</div>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;