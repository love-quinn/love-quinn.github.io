import React from "react";
import Project from "../Project/Project";
import data from "../../utils/data";

// eslint-disable-next-line no-unused-vars
const Projects = React.forwardRef(function About(props, ref) {
  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <div className="project-content">
          <p>Portfolio</p>
          <h3>Each project is a different work 🧩</h3>
          <div className="projects-grid">
            {data.map((project, index) => (
              <Project
                key={index}
                projectImgPath={project.projectImgPath}
                projectName={project.projectName}
                projectDescription={project.projectDescription}
                projectGithubUrl={project.githubProjectUrl}
                projectLiveDemoUrl={project.projectLiveDemoUrl}
                projectStack={project.stack}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
