/* eslint-disable react/prop-types */
import arrowOutward from "../assets/outarrow.svg";
const ExperienceList = ({ date, title, company, tools, description }) => {
  const toolsUsed = tools?.map(tool => {
    return <li key={tool}>{tool}</li>;
  });

  return (
    <div className="experience-list-container">
      <h3 className="experience-title">Experience </h3>
      <p className="date">{date}</p>

      <div className="experience-details">
        <h3>
          {title} <span>.</span> {company} <img src={arrowOutward} alt="arrow" className="projects-icon" />
        </h3>
        {/* <h3></h3> */}

        <p>{description}</p>

        <ul className="job-tools">{toolsUsed}</ul>
      </div>
    </div>
  );
};

export default ExperienceList;
