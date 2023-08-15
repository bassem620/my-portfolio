import { Link } from "react-router-dom";

import { Col } from "react-bootstrap"
import { Btn } from "../components/index";

import GitHubLogo from '../components/logos/GitHubLogo';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const ProjectBox = ({project}) => {
    return (
        <Col sm={12} md={6} lg={4} className="boxesContainer">
            <div className="box">
                {/* <img src={web} alt="" className="img-fluid"/> */}
                <h5 className="title">{project.title}</h5>
                <p>{project.desc}</p>   
                <div className="d-flex align-items-center justify-content-between flex-wrap px-1">
                    {
                        project.links.host &&
                        <Link to={project.links.host.link} target="_blank" className="host">{project.links.host.name}<OpenInNewOutlinedIcon /></Link>
                    }
                    {
                        project.workingOn &&
                        <span className="workingOn">Still under development</span>
                    }
                    {
                        project.links.others &&
                        project.links.others.map( (l, ind) => (
                            <Link to={l.link} target="_blank" className="host" key={ind}>{l.name}<OpenInNewOutlinedIcon /></Link>
                        ))
                    
                    }
                </div>
                <div className="btns d-flex align-items-center">
                    <Btn toLink={project.links.linkedin && project.links.linkedin.link} text="More" logo={<OpenInNewOutlinedIcon />} classes={"w-50 me-1 " + (!project.links.linkedin && "disable")}/>
                    <Btn toLink={project.links.github && project.links.github.link} text={project.private ? "Private" : "Code"} logo={<GitHubLogo color="#7B4AE2"/>} classes={"w-50 ms-1" + (!project.links.github && "disable")}/>
                </div>
            </div>
        </Col>
    )
}

export default ProjectBox