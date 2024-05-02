import { Container, Row, Col } from "react-bootstrap"
import { Btn } from "../components"
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

import experience from "../assets/experience";

const Experience = () => {
    return (
        <div className="boxesSection section" id="experience">
            <Container>
                <div className="textBox mx-auto mb-5">
                    <span>🧑‍💻 Experience</span>
                </div>
                <Row className="m-0 p-0">
                    {
                        experience.reverse().map( (exp, ind) => (
                            <Col sm={12} md={6} lg={4} className="boxesContainer" key={ind}>
                                <div className="box experience">
                                    <h5 className="title">{exp.title}</h5>
                                    <span className="company">{exp.company}</span>
                                    <p>{exp.desc}</p>
                                    <div className="timeBound">
                                        <span className="duration">{exp.duration}</span>
                                        <div>
                                            <span className="date">{exp.start}</span>
                                            <span>&nbsp;-&nbsp;</span>
                                            <span className="date">{exp.end}</span>
                                        </div>
                                    </div>
                                    {
                                        exp.link &&
                                        <Btn text={exp.link.name} toLink={exp.link.link} logo={<OpenInNewOutlinedIcon />}/>
                                    }
                                </div>
                            </Col>
                        ) )
                    }
                </Row>
            </Container>
        </div>
    )
}

export default Experience