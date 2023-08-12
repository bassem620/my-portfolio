import { Col, Container, Row } from "react-bootstrap"
import { WhatsappBtn } from "../components"
import { Link } from "react-router-dom"
import LinkedInLogo from '../components/logos/LinkedInLogo';
import GitHubLogo from '../components/logos/GitHubLogo';
import ContentCopyOutlinedIcon from '@mui/icons-material/ContentCopyOutlined';

const Contact = () => {
    const LinkedInLink = "https://www.linkedin.com/in/bassemsaeed620/";
    const GitHubLink = "https://github.com/bassem620";
    
    const copyToClipboard = text => {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        // Show Message
        const message = document.createElement('div');
        message.textContent = 'Copied to clipboard!';
        message.className = "popMsg"
        document.body.appendChild(message);
        // Remove Message
        setTimeout(() => {
            document.body.removeChild(message);
        }, 2000);
    }

    return (
        <div className="contact section" id="contact">
            <Container>
                <div className="textBox mx-auto">
                    <span>📬 Contact</span>
                </div>
                <h3 className="heading">Let's talk</h3>
                <Row>
                    <Col className="contactBox email" md={6} lg={4}>
                        <span className="d-block text-sec">Email:</span>
                        <Link target="_blank" to="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=bassemsaeed710@gmail.com" className="emailAddress">bassemsaeed710@gmail.com</Link>
                        <ContentCopyOutlinedIcon onClick={ _ => copyToClipboard("bassemsaeed710@gmail.com")} className="copyEmail"/>
                    </Col>
                    <Col className="contactBox email" md={6} lg={4}>
                        <span className="d-block text-sec">Phone:</span>
                        <Link target="_blank" to="tel:+201281441143" className="emailAddress">+201281441143</Link>
                        <ContentCopyOutlinedIcon onClick={ _ => copyToClipboard("+201281441143")} className="copyEmail"/>
                    </Col>
                    <Col className="contactBox social" md={12} lg={4}>
                            <div className='socialLinks'>
                                <Link target="_blank" to={LinkedInLink}>
                                    <LinkedInLogo color='#7B4AE2' />
                                </Link>
                                <Link target="_blank" to={GitHubLink}>
                                    <GitHubLogo color='#7B4AE2' />
                                </Link>
                            </div>
                            <WhatsappBtn />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact