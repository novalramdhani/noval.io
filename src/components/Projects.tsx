import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container>
            <h1 className="text-white font-bold text-lg uppercase mt-5">My projects</h1>
            <Card title="Movie Cast" description="Movie Tv Shows Web App" sourceCodeUrl="https://github.com/novalramdhani/Movie-Cast" previewUrl="http://movie-cast.herokuapp.com" />
            <Card title="Ani Cast" description="Anime Shows Web App" sourceCodeUrl="https://github.com/novalramdhani/Ani-Cast" previewUrl="http://anicast.herokuapp.com" />
            <Menu />
        </Container>
    );
}