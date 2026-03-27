import React from "react";

import { Jumbotron } from "./migration";

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const showPic = Boolean(link);
  React.useEffect(() => {
    setProfilePicUrl(link);
  }, [link]);



  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-12 col-lg-5 d-flex justify-content-center align-items-center mb-4 mb-lg-0">
          {showPic && (
            <img
              className="border border-secondary rounded-circle img-fluid"
              src={profilePicUrl?.default || profilePicUrl}
              alt="profilepicture"
              style={{ maxWidth: imgSize, maxHeight: imgSize, objectFit: 'cover' }}
            />
          )}
        </div>
        <div className={`col-lg-${showPic ? "7" : "12"}`}>
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
