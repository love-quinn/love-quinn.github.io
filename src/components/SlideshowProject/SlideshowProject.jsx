import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SlideshowProject = ({
  projectImgPath1,
  projectImgPathSmall,
  projectImgPathSmallMobile,
  projectName,
  projectDescription,
  projectGithubUrl,
  projectGithubButtonName,
  projectButtonFaClass,
  projectLiveDemoUrl,
  projectStack,
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = isSmallScreen ? [projectImgPath1, projectImgPathSmallMobile] : [projectImgPath1, projectImgPathSmall];

  useEffect(() => {
    if (projectImgPath1 && projectImgPathSmall) {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 576);
      };

      window.addEventListener("resize", handleResize);
      handleResize();

      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 3000); // Change image every 3 seconds

      return () => {
        window.removeEventListener("resize", handleResize);
        clearInterval(interval); // Clear interval on unmount
      };
    }
  }, [projectImgPath1, projectImgPathSmall, images.length]);

  return (
    <div
      className={`proslide proslide__1 undefined ${
        isSmallScreen ? "small-screen" : ""
      }`}
    >
      <div className="proslide__img">
        {projectImgPath1 && projectImgPathSmall && (
        <div id="circles-container">
          {images.map((_, index) => (
            <div key={index} className={`circle ${currentImageIndex === index ? 'active' : ''}`}></div>
          ))}
        </div>
        )}
        <img src={images[currentImageIndex]} alt={projectName} style={{'objectFit': 'contain'}}></img>
      </div>
      <div className="proslide__text">
        <h3>{projectName}</h3>
        <p>{projectDescription}</p>
        <div className="stack">
          {projectStack.map((tech, index) => (
            <p key={index}>{tech}</p>
          ))}
        </div>
        <div className="links">
          {projectGithubUrl && (
            <a href={projectGithubUrl} target="_blank">
              {projectGithubButtonName}
              <i className="fa-brands fa-github" aria-hidden="true"></i>
            </a>
          )}
          <a href={[projectLiveDemoUrl.url]} target="_blank">
            {projectLiveDemoUrl["buttonName"]}
            <i className={projectButtonFaClass} aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

SlideshowProject.propTypes = {
  projectImgPath1: PropTypes.string.isRequired,
  projectImgPathSmall: PropTypes.string.isRequired,
  projectImgPathSmallMobile: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
  projectGithubUrl: PropTypes.string,
  projectGithubButtonName: PropTypes.string,
  projectButtonFaClass: PropTypes.string,
  projectLiveDemoUrl: PropTypes.object.isRequired,
  projectStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default SlideshowProject;
