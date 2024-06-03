import React, { useContext } from "react";
import { LanguageContext } from "../../utils/LanguageContext";

const About = React.forwardRef(function About(props, ref) {
  const { content } = useContext(LanguageContext);

  return (
    <section className="about" id="about" ref={ref}>
      <div className="container">
        <div className="about-content">
          <div className="img-side">
            <img
              src="/images/working-emoji.png"
              alt="emoji"
              className="work-emoji"
            ></img>
            <img
              src="/images/about-main.avif"
              alt="mee"
              className="img-side__main-img"
            ></img>
            <span>
              <img src="/images/circular-text.svg" alt="text"></img>
            </span>
          </div>
          <div className="text-side">
            <h3>{content.about.title}</h3>
            <h4>{content.about.title2}</h4>
            <p>
              {content.about.description1}
              <span>
                <a href="https://www.youtube.com/@MonsieurProductions_">
                  {content.about.spanContent}
                </a>
              </span>
              {content.about.description2}
              <br />
              <br />
              {content.about.description3}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
