import React from "react";

import ShareMobile from "./Assets/share.svg";
import ShareDesktop from "./Assets/share-button.svg";

import "./App.css";

import { Footer } from "./Footer";
import { Profile } from "./Profile";

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
    title: "You'll fnd books about coding and designs here",
  },
  {
    linkName: "Python Books",
    id: "btn__python",
    link: "https://books.zuri.team/python-for-beginners?ref_id=JeremiahLateef",
    title:
      "Stuck in python? Purchase this book to help you understand the fundamentals of coding",
  },
  {
    linkName: "Background Check for Coders",
    id: "pitch",
    link: "https://background.zuri.team",
    title:
      "Worried about who you're hiring? Leave that to us, we'll help screen the best for your organization!",
  },
  {
    linkName: "Design Books",
    id: "book__design",
    link: "https://books.zuri.team/design-rules",
    title:
      "Download the free books to take your design skills to a higher level",
  },
];

const Links = (props) => {
  const { linkName, link, id, title } = props.links;
  return (
    <div className="links-header">
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        className="links-btn"
        title={title}
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
        <Footer />
      </div>
    </section>
  );
}

export default App;
