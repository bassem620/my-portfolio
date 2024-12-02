import { Container } from "react-bootstrap";

import skills from "../assets/skills";

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <Container>
        <div className="textBox mx-auto mb-5">
          <span>🧑‍💻 Technologies and skills</span>
        </div>
        <div className="skillsContainer">
          {skills.map((sk, ind) => (
            <div className="skill" key={ind}>
              {sk.logo && <sk.logo />}
              <span>{sk.name}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Skills;
