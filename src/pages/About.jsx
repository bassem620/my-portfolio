import { Container, Row, Col } from "react-bootstrap"

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
                            My name is Bassem Said. I'm a student at Helwan University's Faculty of Computer Science and Artificial Intelligence, I am on track to graduate in 2025. <br/><br/>
                            Currently, I am working as a full-stack developer, utilizing the MERN stack to build dynamic and responsive applications. With a strong background in both frontend and backend development.<br/><br/> 
                            In addition to my current skill set, I am always eager to expand my knowledge and learn new technologies.
                        </p>
                    </Col>
                    <Col md={6} className="education">
                        <div className="textBox">
                            <span>🧑‍🎓 Education</span>
                        </div>
                        <h4>Bachelor's degree, Computer Science</h4>
                        <h5>Helwan University</h5>
                        <h6>2021 - 2025</h6>
                        <p>Last year GPA: 3.48 (Excellent)</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About