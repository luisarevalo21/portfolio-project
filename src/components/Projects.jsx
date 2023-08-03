import { useState } from "react";
import ProjectsList from "./ProjectsList";
import { nanoid } from "nanoid";
import tenziesImage from "../assets/Tenzies.png";
import quizzicalImage from "../assets/Quizzical.png";
const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: nanoid(),
      title: "Tenzies",
      tools: ["React", "CSS", "Firebase", "React Router"],
      img: tenziesImage,
      description:
        "Developed Tenzies Dice game, allowing players to roll dice. The objective is to match all dice to win. The game records the user's time and the number of rolls made. Upon completion, the data is posted to Firebase, and React Router is used for navigation to display the top scores.",
      link: "https://tenzies-wvsb.onrender.com",
    },
    {
      id: nanoid(),
      title: "Quizzical",
      tools: ["React", "CSS", "Quiz API", "React Router"],
      img: quizzicalImage,
      description:
        "Quizzical is an entertaining general knowledge quiz game. Users are presented with 5 trivial questions and can record their responses. Once submitted, users will promptly receive their results. For more enjoyment, they can play again to receive a fresh set of 5 new questions.",
      link: "https://quizzical-0m74.onrender.com",
    },
  ]);

  return (
    <div className="projects-container">
      {projects.map(project => {
        return <ProjectsList key={project.id} {...project} />;
      })}
    </div>
  );
};

export default Projects;
