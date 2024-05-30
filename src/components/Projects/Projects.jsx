import React from "react";

// eslint-disable-next-line no-unused-vars
const Projects = React.forwardRef(function About(props, ref) {
  return (
    <section id="projects" className="project" ref={ref}>
      <div className="container">
        <h2 className="new-projects">New projects coming soon... 🤠</h2>
      </div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
