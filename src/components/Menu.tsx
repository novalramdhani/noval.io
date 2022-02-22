import { Link } from "react-router-dom"

export default function Menu() {
    return (
        <p className="mt-5">
            <a href="" className="text-sky-400 underline"><Link to="/">Home</Link></a>
            <a href="" className="text-sky-400 underline ml-5"><Link to="/projects">Projects</Link></a>
        </p>
    )
}