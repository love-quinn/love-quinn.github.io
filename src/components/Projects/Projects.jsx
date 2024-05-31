import React from "react";
import Project from "../Project/Project";
const data = {
  projectName: "Moviefy",
  projectImgPath: "/images/moviefy_ipad_pro_fullsize.png",
  projectDescription:
    "Discover the daily-most popular movies on earth , with a beautiful responsive and mordern experience, the movie list's updated hourly",
  githubProjectUrl: "https://github.com",
  projectLiveDemoUrl: "https://brazilianbeast.github.io/moviefy/",
  stack: ["React", "Bootstrap 5"],
};

// eslint-disable-next-line no-unused-vars
const Projects = React.forwardRef(function About(props, ref) {
  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <div className="project-content">
          <p>Portfolio</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <div className="projects-grid">
            <Project
              projectImgPath={data.projectImgPath}
              projectName={data.projectName}
              projectDescription={data.projectDescription}
              projectGithubUrl={data.githubProjectUrl}
              projectLiveDemoUrl={data.projectLiveDemoUrl}
              projectStack={data.stack}
            />
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
