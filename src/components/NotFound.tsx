import { Link } from "react-router-dom"

export default function NotFound() {
    return (
        <div>
            <h1 className="text-lg font-normal uppercase">404 - Not Found</h1>

            <h3 className="mt-2">Go to  <span className="text-sky-400"><Link to="/">homepage</Link></span></h3>
        </div>
    )
}