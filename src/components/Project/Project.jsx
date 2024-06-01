import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Project({
  projectImgPath,
  projectImgPathSmall,
  projectName,
  projectDescription,
  projectGithubUrl,
  projectLiveDemoUrl,
  projectStack,
}) {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 576);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`pro pro__1 undefined ${isSmallScreen ? "small-screen" : ""}`}
    >
      <div className="pro__img">
        <img
          src={isSmallScreen ? projectImgPathSmall : projectImgPath}
          alt={projectName}
        ></img>
      </div>
      <div className="pro__text">
        <h3>
          {projectName}
          {/* <span className="date-class">(November 2023)</span>🏋️ */}
        </h3>
        <p>{projectDescription}</p>
        <div className="stack">
          {projectStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="links">
          {projectGithubUrl && (
            <a href={projectGithubUrl} target="_blank">
              Code
              <i
                className="text-4xl fa-brands fa-github"
                aria-hidden="true"
              ></i>
            </a>
          )}
          <a href={[projectLiveDemoUrl.url]} target="_blank">
            {projectLiveDemoUrl["buttonName"]}
            <i
              className="fa-regular fa-share-from-square"
              aria-hidden="true"
            ></i>
          </a>
        </div>
      </div>
    </div>
  );
}

Project.propTypes = {
  projectImgPath: PropTypes.string.isRequired,
  projectImgPathSmall: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectGithubUrl: PropTypes.string,
  projectLiveDemoUrl: PropTypes.object.isRequired,
  projectStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Project;
