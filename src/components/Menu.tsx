import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <div className="mt-5 mb-5">
            <span className="text-sky-400"><Link to="/">Home</Link></span>
            <span className="text-sky-400 ml-5"><Link to="/projects">Projects</Link></span>
            <span className="text-sky-400 ml-5"><a href="" className="" download>Download CV</a></span>
            <span className="text-sky-400 ml-5"><a href="https://linkedin.com/in/novalramdhani/" target="_blank">LinkedIn</a></span>
        </div>
    )
}