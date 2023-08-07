import { Link } from "react-router-dom"

import linkedInLogo from '../assets/logos/linkedin.svg';
import gitHubLogo from '../assets/logos/github.svg';

const Footer = () => {
    const LinkedInLink = "https://www.linkedin.com/in/bassemsaeed620/";
    const GitHubLink = "https://github.com/bassem620";
    
    return (
        <footer>
            <div className="container-lg">
                <div className="row m-0 p-0 align-items-center text-center">
                    <span className="col-6 col-lg-4">Copyright © Bassem Said · 2023</span>
                    <div className="col-6 col-lg-4">
                        <Link target="_blank" to={LinkedInLink}>
                            <img src={linkedInLogo} alt="LinkedIN" />
                        </Link>
                        <Link target="_blank" to={GitHubLink}>
                            <img src={gitHubLogo} alt="GitHub" />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer