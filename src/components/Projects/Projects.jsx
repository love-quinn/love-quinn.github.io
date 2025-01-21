import React, { useContext } from "react";
import Project from "../Project/Project";
import { DataContext } from "../../utils/DataContext";
import { LanguageContext } from "../../utils/LanguageContext";
import SlideshowProject from "../SlideshowProject/SlideshowProject";

// eslint-disable-next-line no-unused-vars
const Projects = React.forwardRef(function About(props, ref) {
  const { content } = useContext(LanguageContext);
  const { projectsContent } = useContext(DataContext);

  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <div className="project-content">
          <p>{content.portfolio.title}</p>
          <h3>{content.portfolio.highlight} 🧩</h3>
          <div className="projects-grid">
            {projectsContent.map((project, index) =>
              project.isSlideshow ? (
                <SlideshowProject
                  key={index}
                  projectImgPath1={project.projectImgPath}
                  projectImgPathSmall={project.projectImgPathSmall}
                  projectImgPathSmallMobile={project.projectImgPathSmallMobile}
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectGithubUrl={project.githubProjectUrl}
                  projectGithubButtonName={project.githubButtonName}
                  projectButtonFaClass={
                    project.projectLiveDemoUrl.projectButtonFaClass
                      ? project.projectLiveDemoUrl.projectButtonFaClass
                      : "fa fa-code"
                  }
                  projectLiveDemoUrl={project.projectLiveDemoUrl}
                  projectStack={project.stack}
                />
              ) : (
                <Project
                  key={index}
                  projectImgPath={project.projectImgPath}
                  projectImgPathSmall={project.projectImgPathSmall}
                  projectName={project.projectName}
                  projectDescription={project.projectDescription}
                  projectGithubUrl={project.githubProjectUrl}
                  projectGithubButtonName={project.githubButtonName}
                  projectButtonFaClass={
                    project.projectLiveDemoUrl.projectButtonFaClass
                      ? project.projectLiveDemoUrl.projectButtonFaClass
                      : "fa fa-code"
                  }
                  projectLiveDemoUrl={project.projectLiveDemoUrl}
                  projectStack={project.stack}
                />
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
