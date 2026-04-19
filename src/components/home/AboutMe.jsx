import React from "react";

import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, link, imgSize, resume, roadmap }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const showPic = Boolean(link);
  React.useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-12 col-md-5 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          {showPic && (
            <img
              className="border border-secondary rounded-circle"
              src={profilePicUrl?.default || profilePicUrl}
              alt="profilepicture"
              style={{ width: imgSize, height: imgSize, objectFit: "cover", objectPosition: "center" }}
            />
          )}
        </div>
        <div className={`col-md-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {(resume || roadmap) && (
            <p className="lead text-center">
              {resume && (
                <a
                  className="btn btn-outline-dark btn-lg mx-1"
                  href={resume}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="Resume/CV"
                >
                  Resume
                </a>
              )}
              {roadmap && (
                <a
                  className="btn btn-outline-dark btn-lg mx-1"
                  href={roadmap}
                  target="_blank"
                  rel="noreferrer noopener"
                  role="button"
                  aria-label="SimonKola Roadmaps"
                >
                  SimonKola Roadmaps
                </a>
              )}
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
