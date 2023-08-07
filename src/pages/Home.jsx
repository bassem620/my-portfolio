import { Link } from 'react-router-dom';
import { Container, Row, Col} from 'react-bootstrap';

import me from '../assets/images/me.jpg';
import WhatsappLogo from '../components/logos/WhatsappLogo';
import LinkedInLogo from '../components/logos/LinkedInLogo';
import GitHubLogo from '../components/logos/GitHubLogo';

const Home = () => {
    const LinkedInLink = "https://www.linkedin.com/in/bassemsaeed620/";
    const GitHubLink = "https://github.com/bassem620";

    return (
        <div className="home section" id='home'>
                <Container className='h-100'>
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
                                    Said
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
                                    <LinkedInLogo color='#7B4AE2' />
                                </Link>
                                <Link target="_blank" to={GitHubLink}>
                                    <GitHubLogo color='#7B4AE2' />
                                </Link>
                            </div>
                            <Link target='_blank' to="https://wa.me/+201281441143" className='whatsappLink'>
                                <WhatsappLogo color='#7B4AE2'/>
                                <span>let's talk</span>
                            </Link>
                        </Col>
                    </Row>
                </Container>
        </div>
    )
}

export default Home