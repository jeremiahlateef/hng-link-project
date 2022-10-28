import React from "react";
import ProfileImage from "./Images/jeremiah-lateef.jpeg";

import SlackLogo from "./Assets/slack.svg";
import GitHubLogo from "./Assets/github-icon.svg";
import ZuriLogo from "./Assets/zuri-logo.svg";
import ShareMobile from "./Assets/share.svg";
import ShareDesktop from "./Assets/share-button.svg";
import IngressiveLogo from "./Assets/I4G.svg";
import Camera from "./Assets/camera.svg";
import "./App.css";

const linksContent = [
  {
    linkName: "Twitter Link",
    id: "twitter",
    link: "https://twitter.com/jeremiahlateef",
  },
  {
    linkName: "Zuri Team",
    id: "btn__zuri",
    link: "https://training.zuri.team/",
  },
  {
    linkName: "Zuri Books",
    id: "books",
    link: "http://books.zuri.team/",
  },
  {
    linkName: "Python Books",
    id: "btn__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=JeremiahLateef",
  },
  {
    linkName: "Background Check for Coders",
    id: "pitch",
    link: "https://background.zuri.team",
  },
  {
    linkName: "Design Books",
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
  },
];

const Profile = () => {
  return (
    <React.Fragment>
      <div className="image-cont">
        <img
          src={ProfileImage}
          alt="Jeremiah Lateef"
          className="profile-image"
          id="profile__img"
        />
        <img src={Camera} alt="camera" className="camera-img" />
      </div>
      <div className="header">
        <h1 className="title-header username">Jeremiah Lateef</h1>
        <h2 className="slack-title username" id="slack">
          JeremiahLateef
        </h2>
      </div>
    </React.Fragment>
  );
};
const Links = (props) => {
  const { linkName, link, id } = props.links;
  return (
    <div className="links-header">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="links-btn"
        id={id}
      >
        {linkName}
      </a>
    </div>
  );
};

function App() {
  return (
    <section className="App">
      <div className="section-center">
        <div className="share-cont">
          <img src={ShareDesktop} alt="share button" className="share mobile" />
          <img src={ShareMobile} alt="share button" className="share desktop" />
        </div>

        <Profile />
        {linksContent.map((link) => {
          return <Links key={link.id} links={link} />;
        })}
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
      </div>
    </section>
  );
}

export default App;
