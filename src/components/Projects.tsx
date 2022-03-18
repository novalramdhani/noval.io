import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container>
            <h1 className="text-white font-bold text-lg uppercase mt-5">All my projects</h1>
            <Card title="Movie Cast" description="Movie Tv Shows Web App" />
            <Menu />
        </Container>
    );
}