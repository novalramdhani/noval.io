import Container from "./Container";
import Card from "./Card";
import Menu from "./Menu";

export default function Projects() {
    return (
        <Container customMaxWidth="max-w-[1220px]">
            <h1 className="text-white font-bold text-lg uppercase mt-5">Projects</h1>

            <div className="w-full flex flex-wrap flex-col sm:flex-row justify-center items-center gap-4 mt-5">
                <Card
                    title="Movie Cast"
                    description="Ani Cast is a simple movie shows application using a TALL stack with the integration of the tmdb.org API."
                    sourceCodeUrl="https://github.com/novalramdhani/Movie-Cast"
                    previewUrl="http://movie-cast.herokuapp.com"
                />
                <Card
                    title="AnimeKu"
                    description="AnimeKu is a simple anime movie application using a TALL stack with the integration of the jikan API."
                    sourceCodeUrl="https://github.com/novalramdhani/Ani-Cast"
                    previewUrl="http://anicast.herokuapp.com"
                />
                <Card
                    title="Social Network"
                    description="Social Network is a social media web app build using Laravel, PostgreSQL, Tailwind CSS with include the API."
                    sourceCodeUrl="https://github.com/novalramdhani/Social-Network"
                />
            </div>

            <Menu />
        </Container>
    );
}
