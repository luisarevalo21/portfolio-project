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
        "I currently hold the role of a digital literacy instructor, where my responsibilities include crafting course materials and delivering comprehensive instruction on digital literacy to both clients and staff members.", // tools: ["React", "JavaScript", "NodeJS", "Express"],
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
