import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  return (
    <div className="about section" id="about">
      <Container>
        <Row>
          <Col md={6}>
            <div className="textBox">
              <span>🧐 About me</span>
            </div>
            <p className="aboutme">
              As a junior at Helwan University's Faculty of Computer Science and
              Artificial Intelligence, I am on track to graduate in 2025. <br />
              <br /> My expertise lies in full-stack development, with a strong
              focus on utilizing the MERN stack to build dynamic and responsive
              applications. <br />I possess a comprehensive background in both
              frontend and backend development, which allows me to contribute to
              all aspects of the software development lifecycle. <br />
              <br />I am always eager to expand my knowledge and stay up-to-date
              with the latest technologies in order to broaden my skill set.
            </p>
          </Col>
          <Col md={6} className="education pt-4 pt-md-0">
            <div className="textBox">
              <span>🧑‍🎓 Education</span>
            </div>
            <h4>Bachelor's degree, Computer Science</h4>
            <h5>Helwan University</h5>
            <h6>2021 - 2025</h6>
            <p>Current GPA: 3.41 (Excellent)</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
