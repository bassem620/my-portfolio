import { Link } from "react-router-dom"

const Btn = ({target, toLink, logo, classes, text}) => {
    return (
        <Link target={target || '_blank'} to={toLink} className={`button ${classes}`}>
            {logo}
            <span>{text}</span>
        </Link>
    )
}

export default Btn