import { useState } from "react";
import ExperienceList from "./ExperienceList";
const Experience = () => {
  // eslint-disable-next-line no-unused-vars
  const [experience, setExperience] = useState([
    {
      id: 1,
      date: "January 2021 - Present",
      title: "Digital Access Instructor",
      company: "The Unity Council",
      description:
        "I am currently the instructor for digital literacy, responsible for developing course materials and providing instruction on digital literacy to clients and staff members",
      // tools: ["React", "JavaScript", "NodeJS", "Express"],
    },
  ]);

  const experienceList = experience.map(exp => {
    return (
      <ExperienceList
        key={exp.id}
        date={exp.date}
        title={exp.title}
        company={exp.company}
        description={exp.description}
        tools={exp.tools}
      />
    );
  });

  return <div className="experience-container">{experienceList}</div>;
};

export default Experience;
