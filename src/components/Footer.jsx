import { Link } from "react-router-dom"

import LinkedInLogo from '../components/logos/LinkedInLogo' 
import GitHubLogo from '../components/logos/GitHubLogo'
import { LinkedInLink, GitHubLink } from '../assets/constants'

const Footer = () => {
    return (
        <footer>
            <div className="container-lg">
                <div className="row m-0 p-0 align-items-center text-center">
                    <span className="col-6 col-lg-4">Copyright © Bassem Said · {new Date().getFullYear()}</span>
                    <div className="col-6 col-lg-4">
                        <Link target="_blank" to={LinkedInLink}>
                            <LinkedInLogo />
                        </Link>
                        <Link target="_blank" to={GitHubLink}>
                            <GitHubLogo />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer