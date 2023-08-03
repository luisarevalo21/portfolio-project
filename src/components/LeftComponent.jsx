import headShot from "../assets/40.jpg";
import linkedIn from "../assets/linkedin.svg";
import github from "../assets/github.svg";
import { Link } from "react-router-dom";
const LeftComponent = () => {
  return (
    <header className="header">
      <div>
        <h1>Luis Arevalo</h1>
        <h3>Aspiring Front End Developer / Full Stack Developer</h3>

        <p>I build SPA, that are rich, responsive, and digtial experiences for the web.</p>

        <img src={headShot} alt="headshot" className="headshot" width="200px" />

        {/* <div className="image-container">
          <img src={headShot} alt="headshot" />
        </div> */}

        <nav className="nav">
          <ul className="ul-left">
            <li>
              <a href="#about">
                {/* //add bar to left of the text */}
                <div className="nav-bar"></div> <span className="nav-text">About</span>
              </a>
            </li>

            <li>
              <a href="#projects">
                <div className="nav-bar"></div> <span className="nav-text">Projects</span>
              </a>
            </li>
            <li>
              <a href="#experience">
                <div className="nav-bar"></div> <span className="nav-text">Experience</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <ul className="social">
        <li>
          <a href="https://www.linkedin.com" rel="noopener noreferrer" target="_blank">
            <img src={linkedIn} alt="linkedin" />
          </a>
        </li>
        <li>
          <a href="https://www.github.com" rel="noopener noreferrer" target="_blank">
            <img src={github} alt="github" />
          </a>
        </li>
      </ul>
    </header>
  );
};

export default LeftComponent;
