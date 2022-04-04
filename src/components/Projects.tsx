import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container customMaxWidth="max-w-[1220px]">
            <h1 className="text-white font-bold text-lg uppercase mt-5">My projects</h1>

            <div className="w-full flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 mt-5">
                <Card
                    title="Movie Cast"
                    description="Movie Tv Shows Web App"
                    sourceCodeUrl="https://github.com/novalramdhani/Movie-Cast"
                    previewUrl="http://movie-cast.herokuapp.com"
                />
                <Card
                    title="Ani Cast"
                    description="Anime Shows Web App"
                    sourceCodeUrl="https://github.com/novalramdhani/Ani-Cast"
                    previewUrl="http://anicast.herokuapp.com"
                />
                <Card
                    title="Ani Cast"
                    description="Anime Shows Web App"
                    sourceCodeUrl="https://github.com/novalramdhani/Ani-Cast"
                    previewUrl="http://anicast.herokuapp.com"
                />
            </div>

            <Menu />
        </Container>
    );
}
