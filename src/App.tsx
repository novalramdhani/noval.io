import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";

export default function App() {
  return (
      <div>
        <Routes>
            <Route path="/" element={<Home />}>Home</Route>
            <Route path="/projects" element={<Projects />}>Projects</Route>
        </Routes>
      </div>
  );
}