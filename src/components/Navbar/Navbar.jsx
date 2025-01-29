// import "./Navbar.scss";
import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { LanguageContext } from "../../utils/LanguageContext";
import { DataContext } from "../../utils/DataContext";

function Navbar({ heroRef, aboutRef, projectsRef, testimonialsRef, contactRef }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const { content, toggleLanguage, isEnglishLanguage } =
    useContext(LanguageContext);

  const { toggleProjectsLanguage } =
    useContext(DataContext);

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
        <h3 className="logo" onClick={() => scrollToSection(heroRef)}>
          Quinn.dev
        </h3>

        {/* Navbar */}
        <ul>
          <li>
            <a onClick={() => scrollToSection(heroRef)}>
              {content.navbar.home}
            </a>
          </li>
          <li onClick={() => scrollToSection(aboutRef)}>
            <a>{content.navbar.about}</a>
          </li>
          <li onClick={() => scrollToSection(projectsRef)}>
            <a>{content.navbar.projects}</a>
          </li>
          <li onClick={() => scrollToSection(testimonialsRef)}>
            <a>{content.navbar.testimonials}</a>
          </li>
          <li onClick={() => scrollToSection(contactRef)}>
            <a>{content.navbar.contact}</a>
          </li>
          <li>
            <a
              className="lang"
              onClick={() => {
                toggleLanguage();
                toggleProjectsLanguage();
              }}
            >
              <i
                className={`fa-solid ${
                  isEnglishLanguage ? "fa-toggle-on" : "fa-toggle-off"
                }`}
              ></i>
              <img
                className="flag-img"
                src={isEnglishLanguage ? "/images/us.svg" : "/images/br.svg"}
              />
            </a>
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
            <a>{content.navbar.home}</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(aboutRef);
            }}
          >
            <a>{content.navbar.about}</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(projectsRef);
            }}
          >
            <a>{content.navbar.projects}</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(testimonialsRef);
            }}
          >
            <a>{content.navbar.testimonials}</a>
          </li>
          <li
            onClick={() => {
              fecharMenuMobile();
              scrollToSection(contactRef);
            }}
          >
            <a>{content.navbar.contact}</a>
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
  testimonialsRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  contactRef: PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
};

export default Navbar;
