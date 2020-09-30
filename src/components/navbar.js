import React from "react";
import FacebookIcon from "../Assets/icons/facebook";
import InstagramIcon from "../Assets/icons/instagram";
import TwitterIcon from "../Assets/icons/twitter";
import LoginIcon from "../Assets/icons/log-in";
import "../Assets/css/navbar.css";

export default () => {
  return (
    <nav className="navbar">
      <header>Site Name</header>
      <nav>
        <div className="icons">
          <FacebookIcon className="icon icon-facebook"></FacebookIcon>
          <InstagramIcon className="icon icon-twitter"></InstagramIcon>
          <TwitterIcon className="icon icon-instagram"></TwitterIcon>
        </div>
        <div className="navigations">
          <ul className="font-2">
            <li className="active">Home</li>
            <li>Releases</li>
            <li>About Author</li>
          </ul>
        </div>
        <div className="actions">
          <div className="login font-2">
            <LoginIcon />
            <span> Log in</span>
          </div>
        </div>
      </nav>
    </nav>
  );
};
