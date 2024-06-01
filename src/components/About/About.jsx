import React from "react";
const About = React.forwardRef(function About(props, ref) {
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
            <h3>About me</h3>
            <h4>
              Front-end Developer <br /> based in Sao Paulo, Brazil 📍
            </h4>
            <p>
              Hey, my name is Lucas Santana, and I&#39;m a Frontend Developer.
              My passion is to create and develop a clean UI/UX for my users, in
              order to help them in their daily life with technology, I also
              have a{" "}
              <span>
                <a href="https://www.youtube.com/@MonsieurProductions_">
                  Youtube channel
                </a>
              </span>{" "}
              where I like to share my knoledge with the community.
              <br />
              <br />
              My main stack currently is React/Vite in combination with
              Bootstrap 5 and TypeScript.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

About.displayName = "About";

export default About;
