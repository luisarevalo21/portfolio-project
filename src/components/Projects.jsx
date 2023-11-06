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
        "Designed and created the Tenzies Dice game, enabling players to roll dice with the objective of matching all dice to secure victory. The game efficiently tracks user time and roll count. Upon completion, the recorded data is seamlessly posted to Firebase, while implementing React Router for navigation, showcasing top scores.",
      link: "https://tenzies-wvsb.onrender.com",
    },
    {
      id: nanoid(),
      title: "Quizzical",
      tools: ["React", "CSS", "Quiz API", "React Router"],
      img: quizzicalImage,
      description:
        "Quizzical offers an engaging general knowledge quiz game where users encounter 5 fun and diverse trivia questions, allowing them to record their answers. Upon submission, users receive immediate feedback on their performance. For added enjoyment, they can play again to explore a new set of 5 questions and continue the challenge.",
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
