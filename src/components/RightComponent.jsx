import Experience from "./Experience";
import Projects from "./Projects";

const RightComponent = () => {
  return (
    <div className="right-header" id="about">
      <h3 className="about-header">About</h3>
      <p>
        After graduating, I found myself unsure of which career path to pursue, leading me to fall into a bit of a
        rabbit hole of applying to various jobs and facing multiple rejections. At one point, I felt so discouraged that
        I contemplated giving up, and in a way, I did.
      </p>
      <p>
        After securing a full-time job completely irrelevant to my degree, I had a conversation with a mentor that
        reignited my dreams of pursuing a full-time front-end developer position.
      </p>
      <p>
        When I&apos;m not learning, you can find me either biking around, walking my two German Shepherds/Huskies, or
        spending time with my family.
      </p>
      {/* <Experience />
      <Projects /> */}
      <Projects id="projects" />
      <Experience id="experience" />
    </div>
  );
};

export default RightComponent;
