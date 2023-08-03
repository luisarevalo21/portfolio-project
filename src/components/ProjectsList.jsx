import ArrowOutward from "../assets/outarrow.svg";
/* eslint-disable react/prop-types */

const ProjectsList = ({ title, description, tools, img, id, link }) => {
  const handleTitleClicked = () => {
    window.open(link);
  };
  return (
    <div className="project-list-container" onClick={handleTitleClicked}>
      <h3 className="projects">Projects</h3>
      <div className="image-container">
        <img src={img} alt="project" className="project-image" />
      </div>
      <div className="project-details">
        <h3>
          {title}

          {/* <span className="projects-icon"> */}
          <img src={ArrowOutward} alt="arrow" className="projects-icon" />
          {/* </span> */}
        </h3>

        <p>{description}</p>

        <div className="project-tools">
          <ul>
            {tools.map(tool => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
