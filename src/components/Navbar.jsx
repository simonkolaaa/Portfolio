import React, { useState } from "react";
import { useScrollPosition } from "../hooks/useScrollPosition";
import useResizeObserver from "../hooks/useResizeObserver";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { mainBody, about, repos, skills, experiences } from "../editable-stuff/config.js";
import { NavLink } from "./home/migration";
import { LanguageContext } from "../context/LanguageContext";

const Navigation = React.forwardRef((props, ref) => {
  const { language, setLanguage } = React.useContext(LanguageContext);
  // const { showBlog, FirstName } = config;
  const [isTop, setIsTop] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const navbarMenuRef = React.useRef();
  const navbarDimensions = useResizeObserver(navbarMenuRef);
  const navBottom = navbarDimensions ? navbarDimensions.bottom : 0;
  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!navbarDimensions) return;
      currPos.y + ref.current.offsetTop - navbarDimensions.bottom > 5
        ? setIsTop(true)
        : setIsTop(false);
      setScrollPosition(currPos.y);
    },
    [navBottom]
  );

  React.useEffect(() => {
    if (!navbarDimensions) return;
    navBottom - scrollPosition >= ref.current.offsetTop
      ? setIsTop(false)
      : setIsTop(true);
  }, [navBottom, navbarDimensions, ref, scrollPosition]);

  return (
    <Navbar
      ref={navbarMenuRef}
      className={`px-3 fixed-top  ${!isTop ? "navbar-white" : "navbar-transparent"
        }`}
      expand="lg"
      expanded={expanded}
    >
      <Navbar.Brand className="navbar-brand" href={process.env.PUBLIC_URL + "/#home"}>
        {`<${mainBody.firstName} />`}
      </Navbar.Brand>
      <Navbar.Toggle 
        aria-controls="basic-navbar-nav" 
        className="toggler" 
        onClick={() => setExpanded(!expanded)}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="navbar-nav mr-auto">
          {repos.show && (
            <NavLink
              href={process.env.PUBLIC_URL + "/#projects"}
              onClick={() => setExpanded(false)}
            >
              {language === "it" ? "Progetti GitHub" : "GitHub Projects"}
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={process.env.PUBLIC_URL + "/#aboutme"}
            onClick={() => setExpanded(false)}
          >
            About
          </NavLink>
          {about.roadmap && (
            <NavLink
              className="nav-item lead"
              href={about.roadmap}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setExpanded(false)}
            >
              Roadmaps
            </NavLink>
          )}
          {experiences.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#experience"}
              onClick={() => setExpanded(false)}
            >
              {language === "it" ? "Esperienze" : "Experiences"}
            </NavLink>
          )}
          {skills.show && (
            <NavLink
              className="nav-item lead"
              href={process.env.PUBLIC_URL + "/#skills"}
              onClick={() => setExpanded(false)}
            >
              Skills
            </NavLink>
          )}
          <NavLink
            className="nav-item lead"
            href={process.env.PUBLIC_URL + "/#contact"}
            onClick={() => setExpanded(false)}
          >
            {language === "it" ? "Contatti" : "Contact"}
          </NavLink>
          
          <div className="d-flex align-items-center ml-lg-4 mt-3 mt-lg-0">
            <img 
              src="https://flagcdn.com/24x18/it.png" 
              alt="Italiano" 
              title="Italiano"
              height="18"
              width="24"
              style={{ cursor: "pointer", opacity: language === "it" ? 1 : 0.5, marginRight: "10px", borderRadius: "2px", transition: "opacity 0.2s" }}
              onClick={() => { setLanguage("it"); setExpanded(false); }}
            />
            <img 
              src="https://flagcdn.com/24x18/gb.png" 
              alt="English" 
              title="English"
              height="18"
              width="24"
              style={{ cursor: "pointer", opacity: language === "en" ? 1 : 0.5, borderRadius: "2px", transition: "opacity 0.2s" }}
              onClick={() => { setLanguage("en"); setExpanded(false); }}
            />
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
});

export default Navigation;
