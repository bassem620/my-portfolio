import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import LinkedInLogo from "../components/logos/LinkedInLogo";
import GitHubLogo from "../components/logos/GitHubLogo";

import CallIcon from "@mui/icons-material/Call";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

import { WhatsappBtn } from "../components";
import {
  LinkedInLink,
  GitHubLink,
  mailTo,
  emailAddress,
  callPhone,
  phoneNumber
} from "../assets/constants";

const Contact = () => {
  const copyToClipboard = (text) => {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    // Show Message
    const message = document.createElement("div");
    message.textContent = "Copied to clipboard!";
    message.className = "popMsg";
    document.body.appendChild(message);
    // Remove Message
    setTimeout(() => {
      document.body.removeChild(message);
    }, 2000);
  };

  return (
    <div className="contact section" id="contact">
      <Container>
        <div className="textBox mx-auto">
          <span>📬 Contact</span>
        </div>
        <h3 className="heading">Let's talk</h3>
        <Row>
          <Col className="contactBox contactFieldContainer" md={6} lg={4}>
            <span className="d-block text-sec">Email:</span>
            <Link target="_blank" to={mailTo} className="contactLink">
              {emailAddress}
              <OpenInNewOutlinedIcon />
            </Link>
            <ContentCopyOutlinedIcon
              onClick={(_) => copyToClipboard(emailAddress)}
              className="copy"
            />
          </Col>
          <Col className="contactBox contactFieldContainer" md={6} lg={4}>
            <span className="d-block text-sec">Phone:</span>
            <Link target="_blank" to={callPhone} className="contactLink">
              <CallIcon />
              {phoneNumber.replace(/\+20/g, "+20 ")}
            </Link>
            <ContentCopyOutlinedIcon
              onClick={(_) => copyToClipboard(phoneNumber)}
              className="copy"
            />
          </Col>
          <Col className="contactBox social" md={12} lg={4}>
            <div className="socialLinks">
              <Link target="_blank" to={LinkedInLink}>
                <LinkedInLogo color="#7B4AE2" />
              </Link>
              <Link target="_blank" to={GitHubLink}>
                <GitHubLogo color="#7B4AE2" />
              </Link>
            </div>
            <WhatsappBtn />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
