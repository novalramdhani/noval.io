import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import NotFound from "./components/NotFound";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />}>
                Home
            </Route>
            <Route path="/projects" element={<Projects />}>
                Projects
            </Route>
            <Route path="*" element={<NotFound/>} />
        </Routes>
    );
}
