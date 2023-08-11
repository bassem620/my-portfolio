import { Container, Row, Col } from "react-bootstrap"
import { Btn } from "../components/index";

import web from '../assets/images/web.jpg';
import GitHubLogo from '../components/logos/GitHubLogo';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Projects = () => {
    return (
        <div className="boxesSection section" id="projects">
            <div className="textBox mx-auto mb-5">
                <span>🧑‍💻 Projects</span>
            </div>
            <Container>
                <Row className="m-0 p-0">
                    <Col sm={12} md={6} lg={4} xl={3} className="boxesContainer">
                        <div className="box">
                            <img src={web} alt="" className="img-fluid"/>
                            <h5 className="title">E-Commerce NodeJS Backend Server</h5>
                            <p>
                                The project also iertrtertetertertertertencorporates additional features, including security measures 
                                such as request size limits, rate limiting, anti-CSRF tsdlkamdklmskldm masdlmasldkakl lamsdlkadsm okens, prevention of asdasdadsasdasdaasdasdasdasdasdsdasdasd
                            </p>
                            <div className="btns d-flex align-items-center">
                                <Btn toLink={null} text="More" logo={<OpenInNewOutlinedIcon />} classes="w-50 me-1"/>
                                <Btn toLink={null} text="Code" logo={<GitHubLogo color="#7B4AE2"/>} classes="w-50 ms-1"/>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Projects