import ProfileImage from "./Images/jeremiah-lateef.jpeg";
import "./App.css";

const profileContent = [
  {
    id: "profile__img",
    profileImg: { ProfileImage },
  },
  {
    id: "twitter",
    userName: "Jeremiah Lateef",
  },
  {
    id: "slack",
    slackName: "Jeremiah Lateef",
  },
];

const linksContent = [
  {
    linkName: "Jeremiah Lateef",
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
    link: "https://books.zuri.team/python-for-beginners?ref_id=<jeremiahlateef>",
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

const Profile = (props) => {
  const { userName, slackName } = props.profiles;
  return (
    <div className="header">
      <h1 className="title-header">{userName}</h1>
      <h2 className="slack-title">{slackName}</h2>
    </div>
  );
};
const Links = (props) => {
  const { linkName, link } = props.links;
  return (
    <div className="links-header">
      <button className="links-btn">
        <a href={link} target="_blank" rel="noreferrer" className="link">
          {linkName}
        </a>
      </button>
    </div>
  );
};

function App() {
  return (
    <section className="App">
      <div className="section-center">
        <div className="image-cont">
          <img
            src={ProfileImage}
            alt="Jeremiah Lateef"
            className="profile-image"
            id={profileContent[0].id}
          />
        </div>
        {profileContent.map((profile) => {
          return <Profile key={profile.id} profiles={profile} />;
        })}
        {linksContent.map((link) => {
          return <Links key={link.id} links={link} />;
        })}
      </div>
    </section>
  );
}

export default App;
