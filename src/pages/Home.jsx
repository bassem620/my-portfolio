import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import me from '../assets/images/me.jpg';
import LinkedInLogo from '../components/logos/LinkedInLogo';
import GitHubLogo from '../components/logos/GitHubLogo';

import { WhatsappBtn } from '../components';
import { LinkedInLink, GitHubLink, resumeLink } from '../assets/constants'
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const Home = () => {

    const resumeBtn = _ => window.open(resumeLink, '_blank');

    return (
        <div className="home section" id='home'>
                <Container className='d-flex align-items-center h-100'>
                    <Row className='m-0 p-0'>
                        {/* Left side */}
                        <Col md={6} lg={4}>
                            <div className='textBox'>
                                <span>👋 Greetings!</span>
                            </div>
                            <div className="name">
                                <span className="firstname">
                                    Bassem
                                </span>
                                <span className="lastname">
                                    Saeed
                                </span>
                            </div>
                            <span className="posTitle fw-light">
                                Full-Stack developer (MERN Stack) · NodeJS Developer 
                            </span>
                        </Col>
                        {/* Center */}
                        <Col md={6} lg={4}>
                            <img src={me} alt="BassemPhoto" className='myPhoto'/>
                        </Col>
                        {/* Right side */}
                        <Col md={12} lg={4}>
                            <div className='socialLinks'>
                                <Link target="_blank" to={LinkedInLink}>
                                    <LinkedInLogo />
                                </Link>
                                <Link target="_blank" to={GitHubLink}>
                                    <GitHubLogo />
                                </Link>
                            </div>
                            <WhatsappBtn />
                            <Link onClick={resumeBtn} className='resume'>CV<OpenInNewOutlinedIcon/></Link>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Home