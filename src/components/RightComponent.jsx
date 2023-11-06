import Experience from "./Experience";
import Projects from "./Projects";

const RightComponent = () => {
  return (
    <div className="right-header" id="about">
      <h3 className="about-header">About</h3>
      <p>
        After graduation, I found myself uncertain about which career path to pursue, which led me into a cycle of
        applying to various jobs and encountering multiple rejections. At one point, the continuous setbacks left me
        feeling so disheartened that I contemplated giving up, and, in a sense, I did.
      </p>
      <p>
        Upon securing a full-time job unrelated to my degree, a conversation with a mentor reignited my ambition to
        pursue a full-time position as a front-end developer.
      </p>
      <p>
        When I&apos;m not engaged in learning, you can often find me either biking around, walking my two German
        Shepherds/Huskies, or enjoying quality time with my family.
      </p>
      {/* <Experience />
      <Projects /> */}
      <Projects id="projects" />
      <Experience id="experience" />
    </div>
  );
};

export default RightComponent;
