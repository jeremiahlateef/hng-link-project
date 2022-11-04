import React from "react";
import ProfileImage from "./Images/jeremiah-lateef.jpeg";
import Camera from "./Assets/camera.svg";

export const Profile = () => {
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
        <h2 className="slack-title" id="slack">
          JeremiahLateef
        </h2>
      </div>
    </React.Fragment>
  );
};
