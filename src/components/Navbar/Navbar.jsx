// import "./Navbar.scss";
import { useState } from "react";
import PropTypes from "prop-types";

function Navbar({ heroRef, aboutRef, projectsRef, contactRef }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  function abrirMenuMobile() {
    setMenuVisible(true);
  }

  function fecharMenuMobile() {
    setMenuVisible(false);
  }

  return (
    <>
      <nav className={menuVisible ? "hidden" : ""}>
        <h3 className="logo">Lucas.dev</h3>
        <ul>
          <li>
            <a onClick={() => scrollToSection(heroRef)}>Home</a>
          </li>
          <li onClick={() => scrollToSection(aboutRef)}>
            <a>About</a>
          </li>
          <li onClick={() => scrollToSection(projectsRef)}>
            <a>Projects</a>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>
            <a>Contact</a>
          </li>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mobile-menu"
              onClick={abrirMenuMobile}
            >
              <path d="M4 6l16 0"></path>
              <path d="M4 12l16 0"></path>
              <path d="M4 18l16 0"></path>
            </svg>
          </li>
        </ul>
      </nav>
      <div className={`mobile-nav ${menuVisible ? "open-menu" : ""}`}>
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-x"
            onClick={fecharMenuMobile}
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </span>
        <ul>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(heroRef);
            }}
          >
            <a>Home</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(aboutRef);
            }}
          >
            <a>About</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(projectsRef);
            }}
          >
            <a>Projects</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(contactRef);
            }}
          >
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

Navbar.propTypes = {
  heroRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  aboutRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  projectsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Navbar;
