import { Container, Row, Col } from "react-bootstrap"
import { Btn } from "../components"
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Experiences = () => {
    return (
        <div className="boxesSection section" id="experience">
            <Container>
                <div className="textBox mx-auto mb-5">
                    <span>🧑‍💻 Experiences</span>
                </div>
                <Row className="m-0 p-0">
                    <Col sm={12} md={6} lg={4} className="boxesContainer">
                        <div className="box experience">
                            <h5 className="title">Backend Hackathon</h5>
                            <p>
                                During this week at Orange Digital Center, I worked on developing a RESTful API backend
                                for Orange Company. The objective of the project was to create a platform for monitoring
                                the courses offered by Orange's partners, such as Instant and Amit.
                            </p>
                            <div className="timeBound">
                                <span className="duration">1 Week</span>
                                <div>
                                    <span className="date">16/09/2022</span>
                                    <span>&nbsp;-&nbsp;</span>
                                    <span className="date">22/09/2022</span>
                                </div>
                            </div>
                            <Btn text="More" toLink="" logo={<OpenInNewOutlinedIcon />}/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Experiences