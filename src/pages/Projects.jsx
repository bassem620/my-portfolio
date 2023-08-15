import { useState } from "react";
import { Container, Row } from "react-bootstrap"

import projects from "../assets/projects";
import { ProjectBox } from '../components';

const Projects = () => {
    const [show, setShow] = useState(true);
    const [limit, setLimit] = useState(3);

    const showOnClick = _ => {
        setShow( prev => !prev);
        setLimit( prev => show ? projects.length : 3 );
    }

    return (
        <div className="boxesSection section" id="projects">
            <div className="textBox mx-auto mb-5">
                <span>🧑‍💻 Projects</span>
            </div>
            <Container>
                <Row className="m-0 p-0">
                    {
                        projects.slice(0,limit).map( (proj, ind) => (
                            <ProjectBox project={proj} key={ind}/>
                        ))
                    }
                </Row>
                {
                    projects.length > 3 &&
                    <div className="w-100 d-flex align-items-center justify-content-center pt-4">
                        <button onClick={showOnClick} className="button">{show ? "Show more" : "Show less"}</button>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Projects