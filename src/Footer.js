import React from "react";
import SlackLogo from "./Assets/slack.svg";
import GitHubLogo from "./Assets/github-icon.svg";
import ZuriLogo from "./Assets/zuri-logo.svg";
import IngressiveLogo from "./Assets/I4G.svg";

export const Footer = () => {
  return (
    <React.Fragment>
      <div className="icons-container">
        <div className="icon-cont">
          <img src={SlackLogo} alt="slack logo" className="logo" />
        </div>
        <div className="icon-cont">
          <img src={GitHubLogo} alt="GitHub logo" className="logo" />
        </div>
      </div>
      <footer className="footer">
        <div className="zuri-cont">
          <img src={ZuriLogo} alt="Zuri Internship Logo" className="zuri" />
        </div>
        <p className="footer-text">HNG Internship 9 Frontend Task</p>
        <div className="ing-cont">
          <img
            src={IngressiveLogo}
            alt="Ingressive for Good Logo"
            className="zuri"
          />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
